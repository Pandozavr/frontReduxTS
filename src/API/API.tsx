import * as axios from "axios"
import {Navigate} from "react-router-dom";

export const API_URL = `http://localhost:3001/api`;
export const FILE_URL = `http://localhost:3001/`;

// @ts-ignore
const instance = axios.create({
    baseURL: API_URL,
    withCredentials: true, //автоматическая подцепка куки к запросу
    responseType: "json",
    headers: {
        "content-type": "application/json",
        "Accept": "application/json"
    }
});

//цепляем к запросу аксесс токен
instance.interceptors.request.use((config:any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
});


// в случае получение в ответе 401 перехыватываем ответ и кидаем запрос на обновление пары токенов по рефреш токену, если его нету или он умер - редайрект
// если ок, то сохраняем новый аксесс токен запихиваем его в локал сторедж и уже с новым акссес токеном повторно кидаем исходный запрос
instance.interceptors.response.use((config:any) => {
    return config;
}, async (error:any) => {
    const originalRequest = error.config;
    if(error.response.status === 401 && !originalRequest._isRetry) {
        originalRequest._isRetry = true;
        try {
            // @ts-ignore
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials:true});
            localStorage.setItem('token', response.data.accessToken);
            return instance.request(originalRequest)
        } catch (e) {
            return <Navigate to={"/login"}/>
        }
    }
    throw error;
});

export const authAPI = {
    register(email:string, password:string, user_name:string) {
        return instance.post(`register`, {email, password, user_name});
    },
    login(email:string, password:string) {
        return instance.post(`login`, {email, password});
    },
    logout() {
        return instance.post(`logout`);
    }
};

export const profileAPI = {
    uploadAvatar(profileImg:string) {
        const formData = new FormData();
        formData.append("profileImg", profileImg);
        return instance.post(`avatar`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    async sendPost(textPost:string) {
        const {data} = await instance.post(`post`, {textPost});
        return data;
    },
    getProfileData() {
        return instance.get(`profile`);
    },
    async getPosts() {
        const {data} = await instance.get(`userposts`);
        return data;
    },
    async deletePost(postID:number) {
        const data = await instance.delete(`post?postId=${postID}`);
        return data;
    },
    async updatePost(postID:number, postText:string) {
        const data = await instance.put(`post?postId=${postID}`, {postText});
        return data;
    }
};

export const userAPI = {
    getUsers() {
        return instance.get(`users`);
    },
    follow(friendId:number) {
        return instance.get(`follow?friendId=${friendId}`)
    },
    unfollow(friendId:number) {
        return instance.get(`unfollow?friendId=${friendId}`)
    }
};

export const musicAPI = {
    getMusic() {
        return instance.get(`music`);
    }
};