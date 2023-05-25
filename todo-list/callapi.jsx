import axios from 'axios';

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `https://643f75b8b9e6d064bef62a74.mockapi.io/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}