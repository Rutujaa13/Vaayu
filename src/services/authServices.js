import { loginApi, registerApi } from '../api/authApi';
import { saveTokens, clearTokens } from './tokenService';

// export const loginUser = async values => {
//   const response = await loginApi(values);

//   const { accessToken, refreshToken } = response.data;

//   await saveTokens(accessToken, refreshToken);

//   return response.data;
// };

export const loginUser = async data => {
  const response = await loginApi(data);

  return response.data;
};

export const registerUser = async values => {
  const response = await registerApi(values);

  const { accessToken, refreshToken } = response.data;

  await saveTokens(response.accessToken, response.refreshToken, response.user);
  return response.data;
};

export const logoutUser = async () => {
  await clearTokens();
};
