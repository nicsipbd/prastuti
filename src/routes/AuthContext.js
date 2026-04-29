import React, { createContext, useState, useContext, useEffect } from "react";

// Create Context
const AuthContext = createContext();
const a = localStorage.getItem("username");
// Provider component
export const AuthProvider = ({ children }) => {
  // Initialize authentication state from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(a || false);

  // Update localStorage when authentication changes

  // Methods for login/logout
  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.clear();
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
