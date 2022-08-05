import { render, screen } from '@testing-library/react';
import Layout, {
    AlignItems,
    FlexDirection,
    JustifyContent,
    MarginBottom,
    MarginLeft,
    MarginRight,
    MarginTop,
} from './layout';

const TEST_ID = 'layout';

describe('Layout', () => {
    it('Should render', () => {
        render(
            <Layout>
                <div />
            </Layout>,
        );
    });

    it('Should check margins', () => {
        render(
            <Layout
                ml={MarginLeft.Ml1}
                mr={MarginRight.Mr1}
                mt={MarginTop.Mt1}
                mb={MarginBottom.Mb1}
                dataQa={TEST_ID}
            >
                <div />
            </Layout>,
        );

        expect(screen.getByTestId(TEST_ID)).toHaveClass('container', 'mt1', 'mr1', 'mb1', 'ml1');
    });

    it('Should flex properties', () => {
        render(
            <Layout
                justifyContent={JustifyContent.Center}
                alignItems={AlignItems.Center}
                direction={FlexDirection.Column}
                dataQa={TEST_ID}
            >
                <div />
            </Layout>,
        );

        expect(screen.getByTestId(TEST_ID)).toHaveClass(
            'container',
            'column',
            'justifyCenter',
            'alignFlexCenter',
        );
    });
});
