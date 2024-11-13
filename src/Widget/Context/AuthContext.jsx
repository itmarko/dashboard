import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // // Retrieve initial authentication state from session storage
  // const [isAuthenticated, setIsAuthenticated] = useState(() => {
  //   return sessionStorage.getItem("isAuthenticated") === "true";
  // });
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Async login function if needed for API-based login
  const login = async () => {
    try {
      setIsAuthenticated(true);
      sessionStorage.setItem("isAuthenticated", "true");
      console.log("Login successful, isAuthenticated:", isAuthenticated);
    } catch (error) {
      console.error("Login failed:", error);
      // Optionally show a message to the user
    }
  };

  // Async logout function to handle API-based logout
  const logout = async () => {
    try {
      // Call logout API endpoint with credentials
      await axios.post(
        "http://localhost:8080/api/cities/logout",
        {},
        { withCredentials: true }
      );

      setIsAuthenticated(false);
      sessionStorage.removeItem("isAuthenticated");
      console.log("Logout successful, isAuthenticated:", isAuthenticated);
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  // Update session storage whenever `isAuthenticated` changes
  useEffect(() => {
    sessionStorage.setItem(
      "isAuthenticated",
      isAuthenticated ? "true" : "false"
    );
    console.log("Updated sessionStorage, isAuthenticated:", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
