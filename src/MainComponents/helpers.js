import axios from 'axios';

const BASE_URL = "http://0.0.0.0:3001";

export class Helpers {
    //empty token for header

    // skeleton of request helper function
    static async request(endpoint, data = {}, method = 'get') {

        const url = `${BASE_URL}/${endpoint}`;
        // const token = 'jeff'
        // const headers = { Authorization: token };
       
        const params = data
            ? data
            : {};
        try {
            return (await axios({
                url, data, method,
                // params,
                // headers
            }));
        } catch (err) {
            console.log(err)
        }

    }

    static async fetchYoutube(term) {
        console.log("TESTING!!!!!!!", term)
        let res = await this.request('youtube', {term}, 'get')
        console.log('Im HERE', res.statusText)
        console.log(res.status)
        return res.data
    }

    static async postToVault(username, title, url, description, author, image, published_at) {
        let res = await this.request('vault', { username, title, url, description, author, image, published_at }, 'post')
        console.log(res.statusText)
        return res.data
    }

    static async signUpUser(firstname, lastname, username, password, email) {
        let res = await this.request('register', {firstname, lastname, username, password, email}, 'post')
        console.log(res.status)
        return res.data
    }
}
