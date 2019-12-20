import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com}',
    headers: {
        Authorization: 
            'Client-ID 39d972e6632d1f3a8afb46962657c7427fcb09cf7b75a5635d260534ac7ca53d'
        }
})