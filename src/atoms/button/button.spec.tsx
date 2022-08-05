import Button from './button';
import { screen, render } from '@testing-library/react';

describe('Button', () => {
    it('Should render', () => {
        render(<Button text="test" onClick={() => {}} />);
    });
});
