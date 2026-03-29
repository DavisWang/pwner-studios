import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders the current hero copy and removes the old subline', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: /retro browser games with early 2000 nostalgia/i })).toBeInTheDocument();
    expect(screen.queryByText(/puzzle, combat, and bot-sim projects built for the browser/i)).not.toBeInTheDocument();
    expect(screen.getByText(/5 published builds/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /open diggr details/i })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /open .* details/i })[0]).toHaveAccessibleName(/open diggr details/i);
  });

  it('opens the matching detail dialog from the URL hash on first render', () => {
    window.history.pushState(null, '', '/#dots');

    render(<App />);

    expect(screen.getByRole('dialog', { name: /dots/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /play game/i })).toHaveAttribute('href', 'https://daviswang.github.io/dots/');
  });

  it('opens from a card click, updates the hash, and restores focus on escape', async () => {
    const user = userEvent.setup();

    render(<App />);

    const trigger = screen.getByRole('button', { name: /open burn the village details/i });
    await user.click(trigger);

    expect(window.location.hash).toBe('#burn-the-village');
    expect(screen.getByRole('dialog', { name: /burn the village/i })).toBeInTheDocument();

    await user.keyboard('{Escape}');

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(window.location.hash).toBe('');
      expect(trigger).toHaveFocus();
    });
  });

  it('keeps the developer link and repo link available', async () => {
    const user = userEvent.setup();

    render(<App />);

    for (const link of screen.getAllByRole('link', { name: /about davis wang/i })) {
      expect(link).toHaveAttribute('href', 'https://daviswang.github.io/personal-website/');
    }

    await user.click(screen.getByRole('button', { name: /open rps arena details/i }));

    expect(screen.getByRole('link', { name: /view repo/i })).toHaveAttribute(
      'href',
      'https://github.com/DavisWang/rps-arena'
    );
  });

  it('opens Diggr with the published live and repo links', async () => {
    const user = userEvent.setup();

    render(<App />);

    expect(screen.getByAltText(/diggr poster built from current sprite sheets/i)).toHaveAttribute(
      'src',
      expect.stringContaining('/assets/games/diggr/poster.svg')
    );

    await user.click(screen.getByRole('button', { name: /open diggr details/i }));

    const dialog = screen.getByRole('dialog', { name: /diggr/i });

    expect(within(dialog).getByText(/playable now/i)).toBeInTheDocument();
    expect(within(dialog).getByRole('link', { name: /play game/i })).toHaveAttribute('href', 'https://daviswang.github.io/diggr/');
    expect(within(dialog).getByRole('link', { name: /view repo/i })).toHaveAttribute('href', 'https://github.com/DavisWang/diggr');
    expect(within(dialog).getByAltText(/diggr consumable shop sprite contact sheet/i)).toHaveAttribute(
      'src',
      expect.stringContaining('/assets/games/diggr/consumable-shop-sprite-contact-sheet.png')
    );
  });
});
