import React from 'react';

import Button from '../atoms/button/button';
import InputField from '../atoms/input-field/input-field';
import Grid from '../atoms/grid/grid';

const Login: React.FC = () => {
    const onChangeUsername = (value: string) => {
        console.log(value);
    };

    const onChangePassword = (value: string) => {
        console.log(value);
    };

    return (
        <div>
            <Grid>
                <InputField onChangeInput={onChangeUsername} name="username" label="Username" />
            </Grid>
            <Grid>
                <InputField onChangeInput={onChangePassword} name="password" label="Password" />
            </Grid>
            <Button text="login" onClick={() => {}} />
        </div>
    );
};

export default Login;
