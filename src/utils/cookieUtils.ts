import Cookies from 'js-cookie';
import { AUTH_COOKIE_NAME } from '../api/constants';

export const getToken = () => Cookies.get(AUTH_COOKIE_NAME);
