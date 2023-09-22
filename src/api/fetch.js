import axios from 'axios'

export const postUser = (user) => {
    return axios.post('https://api.escuelajs.co/api/v1/auth/login', user)
}

export const getUser = async(token) => {
    return axios.get('https://api.escuelajs.co/api/v1/auth/profile',
    {
        headers: {
            Authorization : `Bearer ${token}`
        }
    })
}