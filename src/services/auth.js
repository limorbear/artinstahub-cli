import axios from 'axios';

export function postLogin(userName, userPassword) {
    return axios.post('http://localhost:4000/api/auth/login/', JSON.stringify({
        username: userName,
        password: userPassword
    }),
    {
        headers: { 'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'X-Requested-With' }
    })
}