import axios, {AxiosInstance} from "axios";

const apiClient : AxiosInstance = axios.create({
    baseURL : "https://localhost:7082/api",
    headers : {
        "Content-Type" : "application/json"
    }
});

export default apiClient;