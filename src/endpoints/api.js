import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/'
// const LOGIN_URL = `${BASE_URL}token/`
// const REFRESH_URL = `${BASE_URL}token/refresh`
// const USER_PROFILE_URL = (userId) => `${BASE_URL}users/${userId}/`;

const api = axios.create({
    baseURL:BASE_URL,
    withCredentials:true
})

api.interceptors.response.use(
    (response) => response,
    async error => {
        const original_request = error.config

        if(error.response?.status === 401 && !original_request._retry)
        {
            original_request._retry = true;

            try {
                await refresh_token();
                return api(original_request);
            } catch(refreshError) {
                window.location.href = '/login'
                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error)
    }
)

export const get_user_profile_data = async (username) => {
    const response = await api.get(`users/${username}`)
    return response.data
}

const refresh_token = async () => {
    const response = await api.post(`/token/refresh/`);
    return response.data
}

export const login = async (username, password) => {
    const response = await api.post('/token/', {username, password});
    return response.data
}

export const register = async (username, email, country, dob, gender, password) => {
    const response = await api.post('/register/', {username:username, email:email, country:country, dob:dob, gender:gender, password:password});
    return response.data
}

export const togglefollow = async (username) => {
    const response = await api.post('/toggle_follow/', {username:username});
    return response.data
}

export const get_users_posts = async (username) => {
    const response = await api.get(`/posts/${username}/`);
    return response.data
}

export const toggleLike = async (id) => {
  const response = await api.post(`/togglelike/`, { id });
  return response.data;
}


export const create_post = async (caption,description) => {
    const response = await api.post('/create_post/', {caption:caption, description:description})

    return response.data
}

export const get_post = async (num)=> {
    const response = await api.get(`/get_post/?page=${num}`)
    return response.data
}

export const search_users = async (search) => {
    const response = await api.get(`/search/?query=${search}`)
    return response.data
}