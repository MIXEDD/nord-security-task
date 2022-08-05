import Button from './button';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
    it('Should render', () => {
        render(<Button text="test" onClick={() => {}} />);
    });

    it('Should check button text', () => {
        render(<Button text="test" onClick={() => {}} />);

        expect(screen.getByText('test')).toBeTruthy();
    });

    it('Should check if button is clicked', async () => {
        const onClick = jest.fn();

        render(<Button text="test" onClick={onClick} />);

        await userEvent.click(screen.getByText('test'));

        expect(onClick).toHaveBeenCalled();
    });

    it('Should button be disabled', () => {
        render(<Button text="test" onClick={() => {}} disabled />);

        expect(screen.getByText('test')).toBeDisabled();
    });
});
