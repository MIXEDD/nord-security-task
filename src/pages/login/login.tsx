import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import { useNavigate } from 'react-router';

import Button from '../../atoms/button/button';
import InputField, { Type } from '../../atoms/input-field/input-field';
import Layout, { AlignItems, FlexDirection, MarginBottom } from '../../atoms/layout/layout';
import Typography, { Color, ElementType, TextAlign } from '../../atoms/typography/typography';
import { Api } from '../../api/api';
import { AUTH_COOKIE_NAME } from '../../api/constants';
import { ROUTES } from '../../constants';

import styles from './login.scss';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        if (Cookie.get(AUTH_COOKIE_NAME)) {
            navigate(ROUTES.MAIN);
        }
    }, []);

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
                navigate(ROUTES.MAIN);
            })
            .catch((error) => setError(error.response.data.message))
            .finally(() => setIsSubmitting(false));
    };

    return (
        <Layout direction={FlexDirection.Column} alignItems={AlignItems.Center}>
            <div className={styles.login}>
                <Typography
                    elementType={ElementType.H1}
                    textAlign={TextAlign.Center}
                    text="Nord Security"
                />
                <Layout direction={FlexDirection.Column} mb={MarginBottom.Mb1}>
                    <InputField onChangeInput={onChangeUsername} name="username" label="Username" />
                </Layout>
                <Layout direction={FlexDirection.Column} mb={MarginBottom.Mb1}>
                    <InputField
                        onChangeInput={onChangePassword}
                        name="password"
                        label="Password"
                        type={Type.Password}
                    />
                </Layout>
                {error && (
                    <Layout direction={FlexDirection.Column} mb={MarginBottom.Mb1}>
                        <Typography text={error} color={Color.Red} />
                    </Layout>
                )}
                <Layout direction={FlexDirection.Column}>
                    <Button text="login" onClick={onClick} disabled={isSubmitting} />
                </Layout>
            </div>
        </Layout>
    );
};

export default Login;
