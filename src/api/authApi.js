import api from './axiosInstance';
import { ENDPOINTS } from './endpoints';

export const loginApi = data => api.post(ENDPOINTS.LOGIN, data);

export const registerApi = data => api.post(ENDPOINTS.REGISTER, data);

export const refreshTokenApi = refreshToken =>
  api.post(ENDPOINTS.REFRESH, {
    refreshToken,
  });
