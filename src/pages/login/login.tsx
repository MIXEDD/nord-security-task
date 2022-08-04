import React from 'react';

import Button from '../../atoms/button/button';
import InputField, { Type } from '../../atoms/input-field/input-field';
import Grid, { AlignItems, FlexDirection, MarginBottom } from '../../atoms/grid/grid';
import Typography, { ElementType, TextAlign } from '../../atoms/typography/typography';

import styles from './login.scss';

const Login: React.FC = () => {
    const onChangeUsername = (value: string) => {
        console.log(value);
    };

    const onChangePassword = (value: string) => {
        console.log(value);
    };

    const onClick = () => {};

    return (
        <Grid direction={FlexDirection.Column} alignItems={AlignItems.Center}>
            <div className={styles.login}>
                <Typography
                    elementType={ElementType.H1}
                    textAlign={TextAlign.Center}
                    text="Nord Security"
                />
                <Grid direction={FlexDirection.Column} mb={MarginBottom.Mb1}>
                    <InputField onChangeInput={onChangeUsername} name="username" label="Username" />
                </Grid>
                <Grid direction={FlexDirection.Column} mb={MarginBottom.Mb1}>
                    <InputField
                        onChangeInput={onChangePassword}
                        name="password"
                        label="Password"
                        type={Type.Password}
                    />
                </Grid>
                <Grid direction={FlexDirection.Column}>
                    <Button text="login" onClick={onClick} />
                </Grid>
            </div>
        </Grid>
    );
};

export default Login;
