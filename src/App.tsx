import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent } from 'react';
import { startTransition, useEffect, useEffectEvent, useRef, useState } from 'react';
import { studioGames } from './data/games';

const developerUrl = 'https://daviswang.github.io/personal-website/';

function getSlugFromHash(hash: string) {
  const nextSlug = hash.replace(/^#/, '').trim().toLowerCase();
  return studioGames.some((game) => game.slug === nextSlug) ? nextSlug : null;
}

function getFocusableElements(root: HTMLElement | null) {
  if (!root) {
    return [];
  }

  return Array.from(
    root.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((element) => !element.hasAttribute('hidden'));
}

function App() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(() => getSlugFromHash(window.location.hash));
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const cardRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const selectedGame = studioGames.find((game) => game.slug === selectedSlug) ?? null;

  const syncFromHash = useEffectEvent(() => {
    startTransition(() => {
      setSelectedSlug(getSlugFromHash(window.location.hash));
    });
  });

  const closeDialog = () => {
    if (window.location.hash) {
      window.history.pushState(null, '', `${window.location.pathname}${window.location.search}`);
    }

    startTransition(() => {
      setSelectedSlug(null);
    });

    window.requestAnimationFrame(() => {
      lastTriggerRef.current?.focus();
    });
  };

  const openDialog = (slug: string, trigger: HTMLButtonElement | null) => {
    lastTriggerRef.current = trigger ?? cardRefs.current[slug] ?? null;

    if (window.location.hash !== `#${slug}`) {
      window.location.hash = slug;
      return;
    }

    startTransition(() => {
      setSelectedSlug(slug);
    });
  };

  useEffect(() => {
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);

    return () => {
      window.removeEventListener('hashchange', syncFromHash);
    };
  }, [syncFromHash]);

  useEffect(() => {
    if (!selectedGame) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const frame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
      window.cancelAnimationFrame(frame);
    };
  }, [selectedGame]);

  useEffect(() => {
    if (!selectedGame) {
      return;
    }

    const handleWindowKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return;
      }

      event.preventDefault();
      closeDialog();
    };

    window.addEventListener('keydown', handleWindowKeyDown);

    return () => {
      window.removeEventListener('keydown', handleWindowKeyDown);
    };
  }, [selectedGame]);

  const handleDialogKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab') {
      return;
    }

    const focusableElements = getFocusableElements(dialogRef.current);

    if (focusableElements.length === 0) {
      return;
    }

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstFocusable) {
      event.preventDefault();
      lastFocusable.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === lastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
    }
  };

  return (
    <>
      <div className="scanlines" aria-hidden="true" />
      <main className="site-shell" aria-hidden={selectedGame ? true : undefined} inert={selectedGame ? true : undefined}>
        <section className="hero panel">
          <div className="hero__copy">
            <p className="eyebrow">Pwner Studios</p>
            <h1>Retro browser games with early 2000 nostalgia</h1>
            <div className="hero__actions">
              <a className="button button--primary" href="#lineup">
                Browse the lineup
              </a>
              <a className="button button--ghost" href={developerUrl} target="_blank" rel="noreferrer">
                About Davis Wang
              </a>
            </div>
          </div>

          <div className="hero__marquee" aria-hidden="true">
            <div className="hero__marquee-track">
              <span>Burn the Village</span>
              <span>Dots</span>
              <span>Age of War</span>
              <span>RPS Arena</span>
              <span>Burn the Village</span>
              <span>Dots</span>
              <span>Age of War</span>
              <span>RPS Arena</span>
            </div>
          </div>

          <div className="hero__stats" aria-label="Studio stats">
            <article className="stat-card">
              <span>Lineup</span>
              <strong>4 shipped builds</strong>
            </article>
            <article className="stat-card">
              <span>Modes</span>
              <strong>Puzzle, RTS, simulator</strong>
            </article>
            <article className="stat-card">
              <span>Platform</span>
              <strong>Browser-first</strong>
            </article>
          </div>
        </section>

        <section className="lineup panel" id="lineup" aria-labelledby="lineup-title">
          <div className="section-heading">
            <p className="eyebrow">Game Directory</p>
            <h2 id="lineup-title">Pick a cartridge.</h2>
          </div>

          <div className="card-grid">
            {studioGames.map((game) => {
              const style = {
                '--accent': game.accent.primary,
                '--accent-secondary': game.accent.secondary,
                '--accent-glow': game.accent.glow,
                '--accent-surface': game.accent.surface
              } as CSSProperties;

              return (
                <article className="game-card" key={game.slug} style={style}>
                  <button
                    ref={(node) => {
                      cardRefs.current[game.slug] = node;
                    }}
                    className="game-card__button"
                    type="button"
                    aria-label={`Open ${game.title} details`}
                    onClick={(event) => openDialog(game.slug, event.currentTarget)}
                  >
                    <div className="game-card__poster-shell">
                      <img className="game-card__poster" src={game.cardImage} alt={game.cardAlt} />
                      <span className="game-card__status">{game.status}</span>
                    </div>

                    <div className="game-card__copy">
                      <div className="game-card__meta">
                        <span>{game.genre}</span>
                        <span>{game.stack}</span>
                      </div>
                      <h3>{game.title}</h3>
                      <p>{game.tagline}</p>
                      <div className="game-card__footer">
                        <span>{game.fact}</span>
                        <span>View dossier</span>
                      </div>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <footer className="footer panel">
          <p>Pwner Studios is Davis Wang&apos;s home for retro-inspired browser games.</p>
          <a className="footer__link" href={developerUrl} target="_blank" rel="noreferrer">
            About Davis Wang
          </a>
        </footer>
      </main>

      {selectedGame ? (
        <div className="dialog-backdrop" role="presentation" onClick={closeDialog}>
          <div
            ref={dialogRef}
            className="game-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`dialog-title-${selectedGame.slug}`}
            onClick={(event) => event.stopPropagation()}
            onKeyDown={handleDialogKeyDown}
            style={
              {
                '--accent': selectedGame.accent.primary,
                '--accent-secondary': selectedGame.accent.secondary,
                '--accent-glow': selectedGame.accent.glow,
                '--accent-surface': selectedGame.accent.surface
              } as CSSProperties
            }
          >
            <div className="game-dialog__hero">
              <div className="game-dialog__poster-shell">
                <img className="game-dialog__poster" src={selectedGame.cardImage} alt={selectedGame.cardAlt} />
              </div>

              <div className="game-dialog__copy">
                <div className="game-dialog__topline">
                  <span>{selectedGame.status}</span>
                  <span>{selectedGame.stack}</span>
                </div>
                <div className="game-dialog__title-row">
                  {selectedGame.icon ? (
                    <img className="game-dialog__icon" src={selectedGame.icon} alt="" aria-hidden="true" />
                  ) : null}
                  <div>
                    <p className="eyebrow">{selectedGame.genre}</p>
                    <h2 id={`dialog-title-${selectedGame.slug}`}>{selectedGame.title}</h2>
                  </div>
                </div>
                <p className="game-dialog__tagline">{selectedGame.tagline}</p>
                <div className="game-dialog__actions">
                  {selectedGame.liveUrl ? (
                    <a className="button button--primary" href={selectedGame.liveUrl} target="_blank" rel="noreferrer">
                      Play game
                    </a>
                  ) : null}
                  <a className="button button--ghost" href={selectedGame.repoUrl} target="_blank" rel="noreferrer">
                    View repo
                  </a>
                </div>
              </div>

              <button ref={closeButtonRef} className="dialog-close" type="button" aria-label="Close detail panel" onClick={closeDialog}>
                Close
              </button>
            </div>

            <div className="game-dialog__body">
              <div className="game-dialog__story">
                {selectedGame.detailCopy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {selectedGame.detailMedia?.length ? (
                <div className="game-dialog__media">
                  {selectedGame.detailMedia.map((media) => (
                    <figure className={`media-card media-card--${media.frame ?? 'poster'}`} key={media.src}>
                      <img src={media.src} alt={media.alt} />
                      <figcaption>{media.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
