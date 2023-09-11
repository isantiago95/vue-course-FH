import { AUTH_STATUS } from '../../../constants';

const saveItem = (name, item, state) => {
    if (item) {
        localStorage.setItem(name, JSON.stringify(item));
        state[name] = item;
    }
};

export const loginUser = (state, { user, idToken, refreshToken }) => {

    saveItem('idToken', idToken, state);
    saveItem('refreshToken', refreshToken, state);

    state.user = user;
    state.status = AUTH_STATUS.AUTHENTICATED;
};

export const logOut = (state) => {
    state.user = null;
    state.idToken = null;
    state.refreshToken = null;
    state.status = AUTH_STATUS.NON_AUTHENTICATED;

    localStorage.removeItem('idToken');
    localStorage.removeItem('refreshToken');
};