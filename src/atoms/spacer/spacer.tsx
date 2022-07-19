import React, { ReactNode } from 'react';
import classnames from 'classnames';

import styles from './spcaer.scss';

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

interface Props {
    children: ReactNode;
    mt?: MarginTop;
    mr?: MarginRight;
    mb?: MarginBottom;
    ml?: MarginLeft;
}

const Spacer: React.FC<Props> = (props) => {
    const {
        children,
        mt = MarginTop.Mt1,
        mr = MarginRight.Mr1,
        mb = MarginBottom.Mb1,
        ml = MarginLeft.Ml1,
    } = props;

    return (
        <div className={classnames(styles[mt], styles[mr], styles[mb], styles[ml])}>{children}</div>
    );
};

export default Spacer;
