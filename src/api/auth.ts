import axios from "axios";

const API_URL = "http://127.0.0.1:9000/api/auth";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Ensure cookies are sent with requests
});

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post("/login/", { username, password });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { error: "Login failed" };
  }
};

// export const checkAuth = async () => {
//   try {
//     const response = await api.get("/check-auth/");
//     return response.data;
//   } catch (error) {
//     return null;
//   }
// };

export const logout = async () => {
  try {
    await api.post("/logout/");
  } catch (error: any) {
    throw error.response?.data || { error: "Logout failed" };
  }
};

export const checkTokenValidity = async () => {
  // const response = await fetch("http://127.0.0.1:9000/api/auth/check-token/", {
  //   method: "GET",
  //   credentials: "include", // Ensures cookies are sent
  // });

  // return response.ok; // ✅ Returns true if token is valid, false otherwise
};


export const refreshToken = async () => {
  const refreshTokenCookie = getCookie("refresh_token"); // Read from cookies

  if (!refreshTokenCookie) {
    console.warn("No refresh token found, cannot refresh access token.");
    return false;
  }

  const response = await fetch("http://127.0.0.1:9000/api/token/refresh/", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh: refreshTokenCookie }), // ✅ Include refresh token
  });

  return response.ok; // Returns true if token was successfully refreshed
};

const getCookie = (name: string) => {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
};