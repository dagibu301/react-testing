import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  it('should display 6 products', async () => {
    render(<App />);

    const elements = await screen.findAllByRole('img');
    expect(elements).toHaveLength(6);
  });

  it('should display 12 products after button is clicked', async () => {
    render(<App />);

    const button = await screen.findByRole('button', { name: /Load More/i });
    user.click(button);

    await waitFor(async () => {
      const elements = await screen.findAllByRole('img');
      expect(elements).toHaveLength(12);
    });
  });
});
