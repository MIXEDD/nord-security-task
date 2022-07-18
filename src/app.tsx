import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ROUTES } from './constants';
import Login from './pages/login';
import Main from './pages/main';

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.MAIN} element={<Main />} />
            </Routes>
        </div>
    );
};

const AppRoot: React.FC = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

export default AppRoot;
