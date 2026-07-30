import axios from 'axios';

import {
  getTokens,
  saveAccessToken,
  clearTokens,
} from '../services/tokenService';

// export const BASE_URL = 'http://192.168.1.10:5000/api';192.168.0.104

export const BASE_URL = 'http://192.168.0.104:5000/api';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
api.interceptors.request.use(
  async config => {
    const tokens = await getTokens();

    if (tokens?.accessToken) {
      config.headers.Authorization = `Bearer ${tokens.accessToken}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

// Response Interceptor
api.interceptors.response.use(
  response => response,

  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const tokens = await getTokens();

        if (!tokens?.refreshToken) {
          await clearTokens();
          return Promise.reject(error);
        }

        const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {
          refreshToken: tokens.refreshToken,
        });

        const newAccessToken = response.data.accessToken;

        await saveAccessToken(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (err) {
        await clearTokens();

        // Later, notify your auth state to log the user out
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
