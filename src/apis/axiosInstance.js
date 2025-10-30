import axios from "axios";

const axiosInstance = axios.create({
    baseURL: window.ENV?.REACT_APP_BASE_URL || process.env.REACT_APP_BASE_URL,
});

let isLoggingOut = false;

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response && error.response.status === 401) {
            
            if (window.globalLogout && !isLoggingOut) {
                isLoggingOut = true;
                
                window.globalLogout();

                setTimeout(() => {
                    isLoggingOut = false;
                }, 1000); 
            }
            
            return Promise.reject(error);
        }
        
        return Promise.reject(error);
    }
);

export default axiosInstance;
