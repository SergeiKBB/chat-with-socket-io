import axios from 'axios';

const URL = 'http://localhost:8000'

export const login = async data => {
    const response = await axios.post(`${URL}/login`, data);
    console.log(response);
    return response;
}