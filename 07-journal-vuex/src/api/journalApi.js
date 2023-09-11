import axios from "axios";

const journalApi = axios.create({
    baseURL: "https://vue-course-fh-default-rtdb.firebaseio.com",
});

journalApi.interceptors.request.use((config) => {
    const auth = JSON.parse(localStorage.getItem('idToken'));

    config.params = {
        ...config.params,
        auth,
    };

    return config;
});

// console.log( process.env.NODE_ENV ) // TEST durante testing,

export default journalApi;
