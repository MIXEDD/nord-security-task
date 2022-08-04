import axios, { AxiosPromise } from 'axios';

import { AuthModel } from './interfaces';
import { getToken } from '../utils/cookieUtils';

axios.interceptors.request.use(
    (config) => {
        config.headers = {
            Authorization: `Bearer ${getToken()}`,
        };

        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

export const Api = {
    auth: (username: string, password: string): AxiosPromise<AuthModel> =>
        axios.post('v1/tokens', {
            username,
            password,
        }),
    getServerList: () => axios.get('v1/servers'),
};
