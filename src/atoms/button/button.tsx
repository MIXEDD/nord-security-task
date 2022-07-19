import classnames from 'classnames';
import React from 'react';
import styles from './styles.scss';

interface Props {
    text: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: React.FC<Props> = (props) => {
    const { text, onClick, disabled } = props;

    return (
        <button
            className={classnames(styles.button, disabled && styles.disabled)}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;
