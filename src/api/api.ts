import axios, { AxiosPromise } from 'axios';

import { AuthModel, ServerListModel } from './interfaces';
import { getToken } from '../utils/cookieUtils';

axios.interceptors.request.use(
    (config) => {
        config.headers = {
            Authorization: `Bearer ${getToken()}`,
        };

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export const Api = {
    auth: (username: string, password: string): AxiosPromise<AuthModel> =>
        axios.post('v1/tokens', {
            username,
            password,
        }),
    getServerList: (): AxiosPromise<ServerListModel[]> => axios.get('v1/servers'),
};
