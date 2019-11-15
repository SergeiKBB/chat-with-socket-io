import axios from 'axios';

const URL = 'http://localhost:8000';
const USERS_URL = `${URL}/`;
export const login = async data => {
    const response = await axios.post(USERS_URL, data);
    console.log(response);
    return response;
};
