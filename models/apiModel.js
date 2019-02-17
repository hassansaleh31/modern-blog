import axios from 'axios';

class ApiModel {

    constructor() {
        // this.baseUrl = process.env.NODE_ENV === 'production' ? 'https://hassansaleh.info/api' : 'http://localhost:3000/api'
        // this.baseUrl = window !== undefined ? `${window.location.hostname}/api` : 'http://localhost:3000/api'
        if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
            this.baseUrl = `/api`
        } else {
            this.baseUrl = 'http://localhost:3000/api'
        }
    }

    async get(path) {
        const res = await axios.get(`${this.baseUrl}${path}`);
        // const data = await res.json();
        const data = res.data;
        if (!data.success) throw new Error(500);
        return data.body;
    }

}

export default new ApiModel()