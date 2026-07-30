import React, { createContext, useContext, useState } from 'react';

import { loginUser } from '../services/authServices';

import { saveTokens, clearTokens } from '../services/tokenService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      console.log('Calling loginUser...');

      const response = await loginUser({
        email,
        password,
      });

      console.log('Login Response:', response);

      await saveTokens(
        response.accessToken,
        response.refreshToken,
        response.user,
      );

      console.log('Tokens Saved');

      setUser(response.user);

      return response.user;
    } catch (error) {
      console.log('AUTH CONTEXT ERROR:', error);
      console.log('Response:', error.response?.data);

      throw (
        error.response?.data || {
          message: 'Login Failed',
        }
      );
    }
  };

  const logout = async () => {
    await clearTokens();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
