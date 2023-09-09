
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
    state.status = 'authenticated';
};