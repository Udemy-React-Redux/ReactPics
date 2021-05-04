import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID KnTo3t_VkflD9ZUlB3LlGyOr8V5XBiw0VBfHmv4ZJuY'
    }
});
