import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  token: string | null;
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
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const authenticated = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authenticated);
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post<{ token: string , message?: string}>(
        `${API_URL}/login`,
        {
          email,
          password,
        }
      );
      
      if(response.data?.message){
        toast.error(response.data.message);
        return;
      }
      const { token: newToken } = response.data;
      setIsAuthenticated(true);
      setToken(newToken);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("token", newToken);
      toast.success("Successfully logged in!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      throw error;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    toast.success("Successfully logged out!");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};