import axios from "axios";

export default class PostService{
    static async getAll(limit = 10, page = 1) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: page
                }
            });
            return response;
    }

    static async getById(id) {
        const responseId = await axios.get(`https://jsonplaceholder.typicode.com/posts/` + id);
        return responseId;
    }

    static async getCommentsById(id) {
        const responseCommId = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments/`);
        return responseCommId;
    }
}