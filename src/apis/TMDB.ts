import axios from 'axios';

const http = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

const key: string = '5382eef79738bd0041e1d109b40c498c';

export const Api = {
    getPost: async () => {
        const post = await http.get(`/posts`);
        return post.data;
    },
    addNewPost: async (title: string, text: string, userId: number) => {
        let response = await http.post(`/posts`, 
        {title, text, userId});
        return response.data;
    },
};
