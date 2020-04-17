import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID BuSpgl88wue9vMTjLUIE7SmbrVgemCKhfEDxQioehW0'
    }
});