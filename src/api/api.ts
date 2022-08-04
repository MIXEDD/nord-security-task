import axios, { AxiosPromise } from 'axios';

import { AuthModel } from './interfaces';

export const Api = {
    auth: (username: string, password: string): AxiosPromise<AuthModel> =>
        axios.post('v1/tokens', {
            username,
            password,
        }),
};
