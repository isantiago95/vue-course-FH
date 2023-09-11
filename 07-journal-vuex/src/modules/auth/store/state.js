import { AUTH_STATUS } from '../../../constants';

export default () => ({
    status: AUTH_STATUS.AUTHENTICATING,
    user: null,
    idToken: null,
    refreshToken: null
});