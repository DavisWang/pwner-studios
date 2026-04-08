#!/usr/bin/env python3
"""
Generate Pwner Studios logo SVGs via Claude (Anthropic Messages API).

Claude does not output PNG/JPEG; it can return production SVG markup as text.

Requires: ANTHROPIC_API_KEY in the environment.
Usage:
  export ANTHROPIC_API_KEY=sk-ant-...
  python3 scripts/claude-logo-svgs.py
"""

from __future__ import annotations

import json
import os
import re
import sys
import urllib.error
import urllib.request

API = "https://api.anthropic.com/v1/messages"
MODEL = os.environ.get("CLAUDE_MODEL", "claude-sonnet-4-6")
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "assets", "brand")

SYSTEM = """You are a senior brand designer who outputs only valid, minimal SVG.
Rules: no raster images, no fonts that require external URLs (use system-ui or omit text outlines as shapes), self-contained single root <svg>, include xmlns, viewBox, role="img" and <title>."""

USER = """Create two standalone SVG files for the indie browser-game label "Pwner Studios".

Brand (match this site): dark navy panels #0c1118–#06080d, cream text #f6f0d9, soft cyan-blue rim glow #7fc9ff / #a7c4ff, gold accent #f0b15d. Mood: retro early-2000s browser games, subtle scanline-era polish—not childish.

1) HORIZONTAL lockup (viewBox roughly 400×100): left = vertical game cartridge (rounded rect, cyan stroke/glow, dark face, gold pin strip at bottom). On the label, a bold letter P: narrow stem, compact loop with clear counter (hole), visually balanced—not top-heavy. Right = text "PWNER" strong geometric sans; below "STUDIOS" smaller, gold, wide letter-spacing.

2) ICON only (viewBox 96×96): square rounded canvas, same cartridge + P centered, no wordmark.

Output format EXACTLY (so we can parse):
---FILE: pwner-studios-logo-horizontal-claude.svg---
<svg ...>...</svg>
---FILE: pwner-studios-logo-icon-claude.svg---
<svg ...>...</svg>

No markdown fences. No commentary before or after the two FILE blocks."""


def extract_files(text: str) -> dict[str, str]:
    pattern = r"---FILE:\s*(\S+)\s*---\s*((?:<\?xml[^>]*>\s*)?<svg[\s\S]*?</svg>)"
    matches = re.findall(pattern, text, re.IGNORECASE)
    if len(matches) < 2:
        # fallback: any two svg blocks
        svgs = re.findall(r"(<svg[\s\S]*?</svg>)", text, re.IGNORECASE)
        if len(svgs) >= 2:
            return {
                "pwner-studios-logo-horizontal-claude.svg": svgs[0].strip(),
                "pwner-studios-logo-icon-claude.svg": svgs[1].strip(),
            }
        raise ValueError("Could not parse two SVG files from response.")
    return {name.strip(): body.strip() for name, body in matches}


def main() -> int:
    key = os.environ.get("ANTHROPIC_API_KEY", "").strip()
    if not key:
        print("Set ANTHROPIC_API_KEY, then re-run.", file=sys.stderr)
        return 1

    payload = {
        "model": MODEL,
        "max_tokens": 16384,
        "system": SYSTEM,
        "messages": [{"role": "user", "content": USER}],
    }
    req = urllib.request.Request(
        API,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "content-type": "application/json",
            "x-api-key": key,
            "anthropic-version": "2023-06-01",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=300) as resp:
            data = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        print(e.read().decode("utf-8", errors="replace"), file=sys.stderr)
        return 1

    blocks = data.get("content") or []
    text = "".join(b.get("text", "") for b in blocks if b.get("type") == "text")
    if not text.strip():
        print("No text in API response.", file=sys.stderr)
        return 1

    try:
        files = extract_files(text)
    except ValueError as e:
        print(f"Parse error: {e}\n--- raw ---\n{text[:4000]}", file=sys.stderr)
        return 1

    os.makedirs(OUT_DIR, exist_ok=True)
    for name, svg in files.items():
        path = os.path.join(OUT_DIR, name)
        with open(path, "w", encoding="utf-8") as f:
            f.write(svg)
            if not svg.endswith("\n"):
                f.write("\n")
        print(f"Wrote {path}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
