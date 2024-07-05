import { getByRole, render, screen, waitFor } from "@testing-library/react"
import user from "@testing-library/user-event"
import UserForm from "../../components/UserForm"


describe('User Form Component', () => {
    it('show two inputs and a button', () => {
        render(<UserForm onUserAdd={null} />);

        const inputs = screen.getAllByRole('textbox');
        const button = screen.getByRole('button');

        expect(inputs).toHaveLength(2);
        expect(button).toBeInTheDocument;
    })

    it('should call onUserAdd when form is submitted', async () => {
        const mock = jest.fn();

        render(<UserForm onUserAdd={mock} />);

        const nameInput = screen.getByRole('textbox', { name: /name/i });
        const emailInput = screen.getByRole('textbox', { name: /email/i });

        await user.click(nameInput);
        await user.keyboard('John Doe');


        await user.click(emailInput);
        await user.keyboard('john@john.com');


        const button = screen.getByRole('button')
        user.click(button);

        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith({ name: 'John Doe', email: 'john@john.com' });
    })
})