import axios from "axios";

export function GetUserData(){
    return axios.get(`https://606fedd185c3f0001746f07e.mockapi.io/users`);
}

export function PostUserData(data){
    return axios.post(`https://606fedd185c3f0001746f07e.mockapi.io/users`, data);
}

export function getUserByID(id){
    return axios.get(`https://606fedd185c3f0001746f07e.mockapi.io/users/${id}`);
}


export function updateUserByID(id, data){
    return axios.put(`https://606fedd185c3f0001746f07e.mockapi.io/users/${id}`, data);
}