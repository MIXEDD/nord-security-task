import { screen, render, fireEvent } from '@testing-library/react';
import InputField from './input-field';

describe('Input field', () => {
    it('Should render', () => {
        render(<InputField name="test" label="test" onChangeInput={() => {}} />);
    });

    it('Should fire onChange event', () => {
        const onChange = jest.fn();

        render(
            <InputField name="test" label="test" onChangeInput={onChange} dataQa="test-field" />,
        );

        fireEvent.change(screen.getByTestId('test-field'), {
            target: {
                value: 'test',
            },
        });

        expect(onChange).toHaveBeenCalledWith('test');
    });
});
