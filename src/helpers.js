import axios from 'axios';

const BASE_URL = "http://localhost:3001";

export class Helpers {
    //empty token for header

    static token;
    // skeleton of request helper function
    static async request(endpoint, data = {}, method = 'get') {

        const url = `${BASE_URL}/${endpoint}`;
        const token = localStorage.getItem('token')
        const headers = { Authorization: token };
       
        const params = (method === 'get')
            ? data
            : {};
        try {
            return (await axios({
                url, method, data,
                params,
                headers
            }));
        } catch (err) {
            console.log('test', err)
            if (err.response) {


                console.error("API Error:", err.response.data);
                console.log(err.response.data)
                let message = err.response.data.error;
                throw Array.isArray(message) ? message : [message];
            }
            else {
                console.error(err)
            }
        }


    }

    static async fetchYoutube() {
        let res = await this.request('youtube')
        console.log(res.status)
        console.log(res.data)
        return res.data
    }
}