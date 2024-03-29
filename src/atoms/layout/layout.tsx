import React, { ReactNode } from 'react';
import classnames from 'classnames';

import styles from './layout.scss';

export enum MarginTop {
    Mt1 = 'mt1',
    Mt2 = 'mt2',
}

export enum MarginRight {
    Mr1 = 'mr1',
    Mr2 = 'mr2',
}

export enum MarginBottom {
    Mb1 = 'mb1',
    Mb2 = 'mb2',
}

export enum MarginLeft {
    Ml1 = 'ml1',
    Ml2 = 'ml2',
}

export enum FlexDirection {
    Row = 'row',
    Column = 'column',
}

export enum JustifyContent {
    FlexStart = 'justifyFlexStart',
    Center = 'justifyCenter',
    FlexEnd = 'justifyFlexEnd',
}

export enum AlignItems {
    FlexStart = 'alignFlexStart',
    Center = 'alignFlexCenter',
    FlexEnd = 'alignFlexEnd',
}

interface Props {
    children: ReactNode;
    mt?: MarginTop;
    mr?: MarginRight;
    mb?: MarginBottom;
    ml?: MarginLeft;
    direction?: FlexDirection;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    dataQa?: string;
}

const Layout: React.FC<Props> = (props) => {
    const { children, mt, mr, mb, ml, direction, justifyContent, alignItems, dataQa } = props;

    return (
        <div
            className={classnames(
                styles.container,
                mt && styles[mt],
                mr && styles[mr],
                mb && styles[mb],
                ml && styles[ml],
                direction && styles[direction],
                justifyContent && styles[justifyContent],
                alignItems && styles[alignItems],
            )}
            data-qa={dataQa}
        >
            {children}
        </div>
    );
};

export default Layout;
