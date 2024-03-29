import React from 'react';
import styles from './input-field.scss';

export enum InputType {
    Text = 'text',
    Password = 'password',
}

interface Props {
    name: string;
    label: string;
    onChangeInput: (value: string) => void;
    type?: InputType;
    dataQa?: string;
}

const InputField: React.FC<Props> = React.memo((props) => {
    const { name, label, onChangeInput, type = InputType.Text, dataQa } = props;

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeInput(event.target.value);
    };

    return (
        <div className={styles.container}>
            <label htmlFor={name}>{label}</label>
            <input
                data-qa={dataQa}
                className={styles.inputField}
                id={name}
                type={type}
                onChange={onChange}
            />
        </div>
    );
});

export default InputField;
