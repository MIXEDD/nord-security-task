import React from 'react';

import Button from '../atoms/button/button';
import InputField from '../atoms/input-field/input-field';

const Login: React.FC = () => {
    const onChangeUsername = (value: string) => {
        console.log(value);
    };

    const onChangePassword = (value: string) => {
        console.log(value);
    };

    return (
        <div>
            <InputField onChangeInput={onChangeUsername} name="username" label="Username" />
            <InputField onChangeInput={onChangePassword} name="password" label="Password" />
            <Button text="login" onClick={() => {}} />
        </div>
    );
};

export default Login;
