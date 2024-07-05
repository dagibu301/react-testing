import { screen, render, within } from "@testing-library/react";
import UserList from "../../components/UserList";

describe('User List component', () => {
    const mockUsers = [{ name: 'test1', email: 'test1@test.com' }, { name: 'test2', email: 'test2@test.com' }]
    it('should render on the screen', () => {
        render(<UserList users={[]} />);

        const userList = screen.getByRole('table');

        expect(userList).toBeInTheDocument();
    })

    it('should render one row per user', () => {
        const { container } = render(<UserList users={mockUsers} />);

        const users = screen.getAllByTestId('userRow');
        const rows = within(screen.getByTestId('usersTBody')).getAllByRole('row');
        const rows2 = container.querySelectorAll('tbody tr');

        expect(users).toHaveLength(2);
        expect(rows).toHaveLength(2);
        expect(rows2).toHaveLength(2);

    })

    it('should render the name and email of each user', () => {
        render(<UserList users={mockUsers} />);
        // screen.logTestingPlaygroundURL();

        for (const user of mockUsers) {
            const name = screen.getByRole('cell', { name: user.name });
            const email = screen.getByRole('cell', { name: user.email });

            expect(name).toBeInTheDocument();
            expect(email).toBeInTheDocument();
        }
    })
})