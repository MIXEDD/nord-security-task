import React from 'react';
import styles from './input-field.scss';

interface Props {
    name: string;
    label: string;
    onChangeInput: (value: string) => void;
}

const InputField: React.FC<Props> = React.memo((props) => {
    const { name, label, onChangeInput } = props;

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        onChangeInput(event.currentTarget.value);
    };

    return (
        <div className={styles.container}>
            <label htmlFor={name}>{label}</label>
            <input className={styles.inputField} id={name} type="text" onChange={onChange} />
        </div>
    );
});

export default InputField;
