import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2695df3e9c8d4a5c9df31b09d6aabb50'
    }
})