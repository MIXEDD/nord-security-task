import React, { useState } from 'react';
import Cookie from 'js-cookie';

import Button from '../../atoms/button/button';
import InputField, { Type } from '../../atoms/input-field/input-field';
import Grid, { AlignItems, FlexDirection, MarginBottom } from '../../atoms/grid/grid';
import Typography, { Color, ElementType, TextAlign } from '../../atoms/typography/typography';
import { Api } from '../../api/api';
import { AUTH_COOKIE_NAME } from '../../api/constants';

import styles from './login.scss';

const Login: React.FC = () => {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onChangeUsername = (value: string) => {
        setUserName(value);
    };

    const onChangePassword = (value: string) => {
        setPassword(value);
    };

    const onClick = () => {
        setIsSubmitting(true);
        Api.auth(userName, password)
            .then((res) => {
                Cookie.set(AUTH_COOKIE_NAME, res.data.token);
            })
            .catch((error) => setError(error.response.data.message))
            .finally(() => setIsSubmitting(false));
    };

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
                {error && (
                    <Grid direction={FlexDirection.Column} mb={MarginBottom.Mb1}>
                        <Typography text={error} color={Color.Red} />
                    </Grid>
                )}
                <Grid direction={FlexDirection.Column}>
                    <Button text="login" onClick={onClick} disabled={isSubmitting} />
                </Grid>
            </div>
        </Grid>
    );
};

export default Login;
