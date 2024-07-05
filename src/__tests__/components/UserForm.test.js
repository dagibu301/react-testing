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

    it('should call onUserAdd when form is submitted', () => {
        const mock = jest.fn();

        render(<UserForm onUserAdd={mock} />);

        const nameInput = screen.getByRole('textbox', { name: /name/i });
        const emailInput = screen.getByRole('textbox', { name: /email/i });

        user.click(nameInput);
        user.keyboard('John Doe');


        user.click(emailInput);
        user.keyboard('john@john.com');


        const button = screen.getByRole('button')
        user.click(button);

        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith({ name: 'John Doe', email: 'john@john.com' });
    })
})