import React from 'react';
import { Navigate } from 'react-router';

import { ROUTES } from '../constants';
import { getToken } from '../utils/cookieUtils';

interface Props {
    children: JSX.Element;
}

const ProtectedRoute: React.FC<Props> = (props) => {
    const isAuthenticated = getToken();

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} />;
    }

    return props.children;
};

export default ProtectedRoute;
