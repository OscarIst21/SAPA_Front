import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Token de desarrollo temporal
  const [token, setToken] = useState('dev_token');

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
    localStorage.setItem('auth', 'true');
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);