import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ROUTES } from './constants';
import Login from './pages/login/login';
import Main from './pages/main';
import { store } from './store';

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
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
};

export default AppRoot;
