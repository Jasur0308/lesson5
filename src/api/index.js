import axios from "axios";
import { store } from "../redux/store/store";

const instance = axios.create ({
    baseURL: "https://fakestoreapi.com/",
    headers: {
        "Content-Type" : "application/json"
    },
    timeout: 1000
})

instance.interceptors.response.use (
    (response) => {
        if(response) {
            return response
        }
    },
    (error) => {
        if(error.response.status === 401 || error.response.status === 403) {
            store.dispatch({type: "LOG_OUT"})
        }
    }
)

export default instance;