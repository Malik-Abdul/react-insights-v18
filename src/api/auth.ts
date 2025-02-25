import axios from "axios";
const API_URL = "http://127.0.0.1:9000/api";

export const login = async (username: string, password: string) => {
    try {
        console.log("Inside");
        const response = await axios.post(`${API_URL}/token/`, {
            username,
            password
        });

        if (response.data.access) {
            localStorage.setItem("access_token", response.data.access);
            localStorage.setItem("refresh_token", response.data.refresh);
            axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.access}`;
        }

        return response.data;
    } catch (error) {
        console.error("Login failed", error);
        throw error;
    }
};

// Refresh token function
export const refreshToken = async () => {
    try {
        const refreshToken = localStorage.getItem("refresh_token");
        const response = await axios.post(`${API_URL}/token/refresh/`, { refresh: refreshToken });

        localStorage.setItem("access_token", response.data.access);
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.access}`;

        return response.data;
    } catch (error) {
        console.error("Token refresh failed", error);
        logout();
    }
};

// Logout function
export const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    delete axios.defaults.headers.common["Authorization"];
};

// API request with authentication
// export const fetchProtectedData = async () => {
//     try {
//         const response = await axios.get(`${API_URL}/get_posts_with_jwt/`, {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem("access_token")}`
//             }
//         });

//         return response.data;
//     } catch (error) {
//         console.error("Error fetching protected data", error);
//         throw error;
//     }
// };