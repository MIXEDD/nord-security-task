import React from 'react';
import Cookies from 'js-cookie';
import { Navigate, useLocation } from 'react-router';

import { AUTH_COOKIE_NAME } from '../api/constants';
import { ROUTES } from '../constants';

interface Props {
    children: JSX.Element;
}

const ProtectedRoute: React.FC<Props> = (props) => {
    const isAuthenticated = Cookies.get(AUTH_COOKIE_NAME);

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} />;
    }

    return props.children;
};

export default ProtectedRoute;
