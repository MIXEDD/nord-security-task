import { render, screen } from '@testing-library/react';
import Typography from './typography';

describe('Typography', () => {
    it('Should render', () => {
        render(<Typography text="test" />);
    });

    it('Should check text exists', () => {
        render(<Typography text="test" />);

        expect(screen.getByText('test')).toBeTruthy();
    });
});
