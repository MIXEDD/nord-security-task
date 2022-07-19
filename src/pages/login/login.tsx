import React from 'react';

import Button from '../../atoms/button/button';
import InputField from '../../atoms/input-field/input-field';
import Grid, { AlignItems, FlexDirection } from '../../atoms/grid/grid';
import Typography, { ElementType, TextAlign } from '../../atoms/typography/typography';

import styles from './login.scss';

const Login: React.FC = () => {
    const onChangeUsername = (value: string) => {
        console.log(value);
    };

    const onChangePassword = (value: string) => {
        console.log(value);
    };

    return (
        <Grid direction={FlexDirection.Column} alignItems={AlignItems.Center}>
            <div className={styles.login}>
                <Typography
                    elementType={ElementType.H1}
                    textAlign={TextAlign.Center}
                    text="Nord Security"
                />
                <Grid direction={FlexDirection.Column}>
                    <InputField onChangeInput={onChangeUsername} name="username" label="Username" />
                </Grid>
                <Grid direction={FlexDirection.Column}>
                    <InputField onChangeInput={onChangePassword} name="password" label="Password" />
                </Grid>
                <Grid direction={FlexDirection.Column}>
                    <Button text="login" onClick={() => {}} />
                </Grid>
            </div>
        </Grid>
    );
};

export default Login;
