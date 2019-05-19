import axios from 'axios';

class ApiModel {

    constructor() {
        if (process.env.NODE_ENV === 'production') {
            if (typeof window !== 'undefined') {
                this.baseUrl = `/api`
            } else {
                this.baseUrl = `http://hassansaleh.info/api`
            }
        } else {
            this.baseUrl = 'http://localhost:3000/api'
        }
    }

    async get(path) {
        const res = await axios.get(`${this.baseUrl}${path}`);
        const data = res.data;
        if (!data.success) throw new Error(500);
        return data.body;
    }

    async post(path, body) {
        const res = await axios.post(`${this.baseUrl}${path}`, body);
        const data = res.data;
        if (!data.success) throw new Error(500);
        return data.body;
    }

}

export default new ApiModel()