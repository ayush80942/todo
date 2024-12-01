import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export function retrieveAllTodosForUsername(username) {
    return apiClient.get(`/users/${username}/todos`)
}

export function deleteTodoForId(username, id) {
    return apiClient.delete(`/users/${username}/todos/${id}`)
}

export function retrieveTodoForId(username, id) {
    return apiClient.get(`/users/${username}/todos/${id}`)
}