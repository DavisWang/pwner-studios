import type { GameEntry } from '../types';

function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path}`;
}

export const studioGames: GameEntry[] = [
  {
    slug: 'diggr',
    title: 'Diggr',
    tagline: 'Drill for ores, sell for cash, upgrade your digger and explore the underground.',
    status: 'Playable now',
    genre: 'Mining adventure',
    stack: 'Single-player',
    fact: 'Sell ore, upgrade, go deeper',
    repoUrl: 'https://github.com/DavisWang/diggr',
    liveUrl: 'https://daviswang.github.io/diggr/',
    detailCopy: [
      'Diggr is a mining adventure about heading underground, hauling back what you can, and pushing a little deeper on the next run.',
      'Every trip is a gamble between greed and survival as you manage fuel, dodge hazards, and decide when it is time to head back.',
      'Control your digger, sell ores for cash, and upgrade it to see how deep you can go.'
    ],
    cardImage: asset('assets/games/diggr/diggr-pwner-poster.png'),
    cardAlt: 'Diggr promotional poster showing the digger over a mine shaft, surface shops, and underground hazards.',
    detailMedia: [
      {
        src: asset('assets/games/diggr/consumable-shop-sprite-contact-sheet.png'),
        alt: 'Diggr consumable shop sprite contact sheet.',
        caption: 'A look at the shop where you stock up before the next run.',
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
    tagline: 'Lay hay, place TNT, and turn a tiny village into a perfectly planned chain reaction.',
    status: 'Playable now',
    genre: 'Puzzle tactics',
    stack: 'Single-player',
    fact: '20 levels + level editor',
    repoUrl: 'https://github.com/DavisWang/burn-the-village',
    liveUrl: 'https://daviswang.github.io/burn-the-village/',
    detailCopy: [
      'Burn the Village is a tight puzzle game about setting up the cleanest possible destruction run.',
      'You place hay, trigger TNT, work around terrain, and try to destroy enough structures without wasting resources.',
      'With 20 campaign levels, a full level editor, and tight score and resource pressure, there is plenty here to master once you start chasing cleaner runs.'
    ],
    cardImage: asset('assets/games/burn-the-village/poster.svg'),
    cardAlt: 'Poster art for Burn the Village with flames and a barn silhouette.',
    icon: asset('assets/games/burn-the-village/icon.svg'),
    detailMedia: [
      {
        src: asset('assets/games/burn-the-village/icon.svg'),
        alt: 'Burn the Village icon showing a burning barn.',
        caption: 'The barn-and-flames icon used for the game.',
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
    tagline: 'Connect every pair, fill every open cell, and solve the whole board cleanly.',
    status: 'Playable now',
    genre: 'Logic puzzle',
    stack: 'Touch-friendly',
    fact: '100 escalating levels',
    repoUrl: 'https://github.com/DavisWang/dots',
    liveUrl: 'https://daviswang.github.io/dots/',
    detailCopy: [
      'Dots is a clean, pick-up-and-play puzzle game that starts simple and keeps getting trickier.',
      'Walls and bridges force you to think ahead, because one messy route can ruin an almost finished board.',
      'With 100 levels of increasing difficulty, there is always another board waiting to make you rethink your approach.'
    ],
    cardImage: asset('assets/games/dots/level-08.png'),
    cardAlt: 'Solved Dots puzzle board with colored routes across a square grid.',
    detailMedia: [
      {
        src: asset('assets/games/dots/level-19.png'),
        alt: 'Second solved Dots board with a denser route layout.',
        caption: 'One of the later boards once the routes start getting tight.',
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
    tagline: 'Train units, build towers, age up through five eras, and crush the enemy base before they crush yours.',
    status: 'Playable now',
    genre: 'Lane battle strategy',
    stack: 'Single-player',
    fact: '5 ages, towers, and supers',
    repoUrl: 'https://github.com/DavisWang/aow',
    liveUrl: 'https://daviswang.github.io/aow/',
    detailCopy: [
      'Age of War is a fast lane battler where every match is a push and pull between building your army, holding the line, and timing your next leap forward.',
      'You buy units, place towers, unlock stronger eras, and look for the moment when one smart upgrade can swing the whole battlefield.',
      'From prehistoric brawls to futuristic firepower, the fun is in surviving long enough to evolve, hit a stronger age, and roll over the enemy with a bigger war machine.'
    ],
    cardImage: asset('assets/games/aow/poster.svg'),
    cardAlt: 'Poster art for Age of War with a tower, battlefield lane, and meteor streaks.',
    icon: asset('assets/games/aow/icon.svg'),
    detailMedia: [
      {
        src: asset('assets/games/aow/icon.svg'),
        alt: 'Age of War icon showing a tower over a dirt battlefield.',
        caption: 'The tower emblem used for the game.',
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
    tagline: 'Import bots, run quick matches or full brackets, and see whose strategy actually wins.',
    status: 'Playable now',
    genre: 'Bot battle sandbox',
    stack: 'Quick matches + brackets',
    fact: 'Custom bots + tournaments',
    repoUrl: 'https://github.com/DavisWang/rps-arena',
    liveUrl: 'https://daviswang.github.io/rps-arena/',
    detailCopy: [
      'RPS Arena turns rock paper scissors into a surprisingly competitive game of prediction, counterplay, and bracket survival.',
      'Run a quick head-to-head, seed a bracket, or bring in your own bot and see how it handles the field.',
      'What starts as rock paper scissors gets surprisingly addictive once different bot styles start baiting, punishing, and outlasting each other over a bracket run.'
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
