import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from '../App';

describe('App component', () => {
  it('should receive a new user and show it in a list', async () => {
    render(<App />);

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });

    await user.click(nameInput);
    await user.keyboard('John Doe');


    await user.click(emailInput);
    await user.keyboard('john@john.com');


    const button = screen.getByRole('button', {
      name: /add user/i
    });
    await user.click(button);

    const userRows = screen.getAllByTestId('userRow');
    const nameCell = screen.getByRole('cell', {
      name: /john doe/i
    });
    const emailCell = screen.getByRole('cell', {
      name: /john@john\.com/i
    });


    expect(userRows).toHaveLength(1);
    expect(nameCell).toBeInTheDocument();
    expect(emailCell).toBeInTheDocument();
  })

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
