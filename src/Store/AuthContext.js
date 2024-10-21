// src/contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

/**
 * The AuthProvider component wraps the app and provides login and logout functionality
 * as well as storage of the user data in local storage.
 * The user data is stored in the state and in local storage.
 * When the component mounts, it checks if there is a user stored in local storage
 * and if so, sets the user in the state to that user.
 * If not, the user is set to null.
 * The login function takes a user object and sets the user in the state to that
 * user. It also stores the user in local storage.
 * The logout function sets the user in the state to null and removes the user from
 * local storage.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('ucart');
    localStorage.removeItem('uwishlist');
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * The useAuth hook returns the user and the login and logout functions
 * from the AuthContext.
 */
export const useAuth = () => useContext(AuthContext);


