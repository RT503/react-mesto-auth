
import {getResponseData} from './utils'

export const BASE_URL = 'https://api.rt503.nomoredomains.monster';

export const headers = {
    'Content-Type': 'application/json'
};

export function register({ email, password }){
    return fetch(`${BASE_URL}/signup`, {
        method : 'POST',
        mode: 'cors',
        headers,
        body : JSON.stringify({
            email, password
        }),
        credentials: 'include',
    }).then(result => getResponseData(result));
}

export function login({email, password}){
    return fetch(`${BASE_URL}/signin`, {
        method : 'POST',
        headers,
        credentials: 'include',
        mode: 'cors',
        body : JSON.stringify({
            email, password
        })
    }).then(result => getResponseData(result));
}

export function checkUserToken(jwt) {
    return fetch(`${BASE_URL}/users/me`, {
        headers: {
            ...headers,
            'Authorization' : `Bearer ${jwt}`
        },
        credentials: 'include',
        mode: 'cors',
    })
        .then((res) => getResponseData(res))
}