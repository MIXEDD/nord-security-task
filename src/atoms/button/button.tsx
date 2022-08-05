import classnames from 'classnames';
import React from 'react';
import styles from './button.scss';

export enum ButtonStyle {
    Primary = 'PRIMARY',
}

export enum ButtonType {
    Submit = 'submit',
    Button = 'button',
}

interface Props {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    buttonStyle?: ButtonStyle;
    dataQa?: string;
    type?: ButtonType;
}

const getButtonTypeStyles = (buttonStyle: ButtonStyle) => {
    if (buttonStyle === ButtonStyle.Primary) {
        return styles.primary;
    }

    return null;
};

const Button: React.FC<Props> = React.memo((props) => {
    const {
        text,
        onClick,
        disabled,
        buttonStyle = ButtonStyle.Primary,
        dataQa,
        type = ButtonType.Button,
    } = props;

    return (
        <button
            className={classnames(
                styles.button,
                disabled && styles.disabled,
                getButtonTypeStyles(buttonStyle),
            )}
            onClick={onClick}
            disabled={disabled}
            data-qa={dataQa}
            type={type}
        >
            {text}
        </button>
    );
});

export default Button;
