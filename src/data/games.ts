import type { GameEntry } from '../types';

function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path}`;
}

export const studioGames: GameEntry[] = [
  {
    slug: 'diggr',
    title: 'Diggr',
    tagline: 'Dig down, manage fuel, and haul ore back to the surface before the run turns against you.',
    status: 'Playable now',
    genre: 'Mining RPG prototype',
    stack: 'Phaser + TypeScript',
    fact: 'Chunked mining + surface shops',
    repoUrl: 'https://github.com/DavisWang/diggr',
    liveUrl: 'https://daviswang.github.io/diggr/',
    detailCopy: [
      'Diggr is a desktop-first digging prototype built around deterministic chunked world generation and timed drilling.',
      'The run loop mixes gravity, fuel burn, lava damage, ore hauling, and full-cargo tradeoffs with a surface economy layer.',
      'It already has upgrades, consumables, refining, and local save support, so it reads like the start of a real mining RPG instead of a one-screen tech demo.'
    ],
    cardImage: asset('assets/games/diggr/poster.svg'),
    cardAlt: 'Diggr title card showing the game logo, menu buttons, and a mine preview panel.',
    detailMedia: [
      {
        src: asset('assets/games/diggr/consumable-shop-sprite-contact-sheet.png'),
        alt: 'Diggr consumable shop sprite contact sheet.',
        caption: 'Current consumable shop sprite sheet from the repo docs.',
        frame: 'pixel'
      }
    ],
    accent: {
      primary: '#79bb5c',
      secondary: '#e4b54d',
      glow: 'rgba(121, 187, 92, 0.32)',
      surface: '#152117'
    }
  },
  {
    slug: 'burn-the-village',
    title: 'Burn the Village',
    tagline: 'Route fire, place TNT, and turn a tiny 32x32 map into a chain reaction.',
    status: 'Playable now',
    genre: 'Puzzle tactics',
    stack: 'Phaser + TypeScript',
    fact: '20 campaign levels',
    repoUrl: 'https://github.com/DavisWang/burn-the-village',
    liveUrl: 'https://daviswang.github.io/burn-the-village/',
    detailCopy: [
      'A fixed-frame pixel tactics game built around efficient destruction.',
      'Every run is about laying hay, routing the burn path, and using TNT without wasting tiles or time.',
      'It already ships the full campaign, a level editor, and a dense little board language that feels like an old shareware puzzle disc.'
    ],
    cardImage: asset('assets/games/burn-the-village/poster.svg'),
    cardAlt: 'Poster art for Burn the Village with flames and a barn silhouette.',
    icon: asset('assets/games/burn-the-village/icon.svg'),
    detailMedia: [
      {
        src: asset('assets/games/burn-the-village/icon.svg'),
        alt: 'Burn the Village icon showing a burning barn.',
        caption: 'Shipped favicon from the game build.',
        frame: 'icon'
      }
    ],
    accent: {
      primary: '#ff7a35',
      secondary: '#fff27a',
      glow: 'rgba(230, 93, 45, 0.45)',
      surface: '#2f1f16'
    }
  },
  {
    slug: 'dots',
    title: 'Dots',
    tagline: 'Connect every pair, fill every cell, and never cross the wrong line.',
    status: 'Playable now',
    genre: 'Logic puzzle',
    stack: 'React + TypeScript',
    fact: '20 deterministic boards',
    repoUrl: 'https://github.com/DavisWang/dots',
    liveUrl: 'https://daviswang.github.io/dots/',
    detailCopy: [
      'A touch-first browser puzzle game with walls, bridges, and full-board coverage rules.',
      'The puzzle set is deterministic on purpose, which makes the experience feel curated instead of endlessly generated.',
      'The shipped level solutions are part of the project itself, so the art here is pulled straight from those exported review boards.'
    ],
    cardImage: asset('assets/games/dots/level-08.png'),
    cardAlt: 'Solved Dots puzzle board with colored routes across a square grid.',
    detailMedia: [
      {
        src: asset('assets/games/dots/level-19.png'),
        alt: 'Second solved Dots board with a denser route layout.',
        caption: 'Another shipped puzzle solution export.',
        frame: 'pixel'
      }
    ],
    accent: {
      primary: '#46d1c8',
      secondary: '#ffbf57',
      glow: 'rgba(70, 209, 200, 0.34)',
      surface: '#102026'
    }
  },
  {
    slug: 'aow',
    title: 'Age of War',
    tagline: 'A prehistoric lane battler rebuilt as a browser vertical slice.',
    status: 'Vertical slice',
    genre: 'Lane battle RTS',
    stack: 'Phaser + TypeScript',
    fact: 'Prehistoric era only',
    repoUrl: 'https://github.com/DavisWang/aow',
    liveUrl: 'https://daviswang.github.io/aow/',
    detailCopy: [
      'This is a focused remake of the original flash-game loop: base versus base, unit buys, tower slots, and a super ability.',
      'The current build keeps scope intentionally tight so the lane combat and camera movement feel right before expanding into later ages.',
      'It is rougher than the fully shipped puzzle games, but the structure is already there and the fantasy is clear immediately.'
    ],
    cardImage: asset('assets/games/aow/poster.svg'),
    cardAlt: 'Poster art for Age of War with a tower, battlefield lane, and meteor streaks.',
    icon: asset('assets/games/aow/icon.svg'),
    detailMedia: [
      {
        src: asset('assets/games/aow/icon.svg'),
        alt: 'Age of War icon showing a tower over a dirt battlefield.',
        caption: 'Shipped favicon from the current vertical slice.',
        frame: 'icon'
      }
    ],
    accent: {
      primary: '#f0b15d',
      secondary: '#7fc9ff',
      glow: 'rgba(127, 201, 255, 0.3)',
      surface: '#18253a'
    }
  },
  {
    slug: 'rps-arena',
    title: 'RPS Arena',
    tagline: 'Seeded bots, imported bots, quick matches, and tournament brackets in the browser.',
    status: 'Playable now',
    genre: 'Simulation sandbox',
    stack: 'React + TypeScript',
    fact: 'Bot tournaments + IndexedDB',
    repoUrl: 'https://github.com/DavisWang/rps-arena',
    liveUrl: 'https://daviswang.github.io/rps-arena/',
    detailCopy: [
      'A browser arena for running Rock Paper Scissors bots against each other without freezing the UI.',
      'Quick matches are fast to set up, while tournament mode gives the project a very different energy than the action and puzzle games.',
      'The app already supports custom bot imports and persistent local history, so it feels more like a tiny tool than a one-screen toy.'
    ],
    cardImage: asset('assets/games/rps-arena/poster.svg'),
    cardAlt: 'Poster art for RPS Arena with bracket lines and rock paper scissors symbols.',
    accent: {
      primary: '#f47f42',
      secondary: '#2cb9a4',
      glow: 'rgba(44, 185, 164, 0.3)',
      surface: '#1b1a1c'
    }
  }
];
