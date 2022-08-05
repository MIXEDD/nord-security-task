import React from 'react';
import classNames from 'classnames';

import styles from './typography.scss';

export enum ElementType {
    H1 = 'h1',
    H2 = 'h2',
    Span = 'span',
}

export enum TextAlign {
    Left = 'textAlignLeft',
    Center = 'textAlignCenter',
    Right = 'textAlignRight',
}

export enum Color {
    Red = 'red',
}

interface Props {
    elementType?: ElementType;
    text: string;
    textAlign?: TextAlign;
    color?: Color;
    dataQa?: string;
}

const Typography: React.FC<Props> = (props) => {
    const {
        elementType = ElementType.Span,
        text,
        textAlign = TextAlign.Left,
        color,
        dataQa,
    } = props;

    if (elementType === ElementType.H1) {
        return (
            <h1 data-qa={dataQa} className={classNames(styles[textAlign], color && styles[color])}>
                {text}
            </h1>
        );
    }

    if (elementType === ElementType.H2) {
        return (
            <h2 data-qa={dataQa} className={classNames(styles[textAlign], color && styles[color])}>
                {text}
            </h2>
        );
    }

    return (
        <span data-qa={dataQa} className={classNames(styles[textAlign], color && styles[color])}>
            {text}
        </span>
    );
};

export default Typography;
