
import axios from 'axios';


const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyDs0ZrgjJbWb8tNwwFww0SDtjFVD0puAu4'
    }
});

// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default authApi


