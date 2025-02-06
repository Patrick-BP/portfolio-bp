import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // For demo purposes, we'll use a simple login
  const login = async (email: string, password: string) => {
    try {
      // In a real app, validate against a backend
      if (email === "admin@example.com" && password === "admin123") {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
        toast.success("Successfully logged in!");
        navigate("/dashboard");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      throw error;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    toast.success("Successfully logged out!");
    navigate("/login");
  };

  useEffect(() => {
    const authenticated = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authenticated);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};