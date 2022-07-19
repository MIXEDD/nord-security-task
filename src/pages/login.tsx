import React from 'react';

import Button from '../atoms/button/button';
import InputField from '../atoms/input-field/input-field';
import Spacer from '../atoms/spacer/spacer';

const Login: React.FC = () => {
    const onChangeUsername = (value: string) => {
        console.log(value);
    };

    const onChangePassword = (value: string) => {
        console.log(value);
    };

    return (
        <div>
            <Spacer>
                <InputField onChangeInput={onChangeUsername} name="username" label="Username" />
            </Spacer>
            <Spacer>
                <InputField onChangeInput={onChangePassword} name="password" label="Password" />
            </Spacer>
            <Button text="login" onClick={() => {}} />
        </div>
    );
};

export default Login;
