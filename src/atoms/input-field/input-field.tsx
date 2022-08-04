import React from 'react';
import styles from './input-field.scss';

export enum Type {
    Text = 'text',
    Password = 'password',
}

interface Props {
    name: string;
    label: string;
    onChangeInput: (value: string) => void;
    type?: Type;
}

const InputField: React.FC<Props> = React.memo((props) => {
    const { name, label, onChangeInput, type = Type.Text } = props;

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        onChangeInput(event.currentTarget.value);
    };

    return (
        <div className={styles.container}>
            <label htmlFor={name}>{label}</label>
            <input className={styles.inputField} id={name} type={type} onChange={onChange} />
        </div>
    );
});

export default InputField;
