/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import {
  login as loginService,
  register as registerService,
  loginWithGoogle as loginWithGoogleService,
  profile,
} from "../services/AuthService";
import { User } from "../interfaces/User";

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: (googleToken: string) => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string;
  success: boolean;
  setError: (error: string) => void;
  setSuccess: (success: boolean) => void;
  me: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await loginService(email, password);

      if (response.status == "success") {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", response.data.token);
        setUser(response.data);
        setSuccess(true);
        console.log(response.data.name);
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async (googleToken: string) => {
    setLoading(true);
    try {
      const response = await loginWithGoogleService(googleToken);
      console.log(response);
      if (response.status === "success") {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", response.data.token);
        setUser(response.data);
        setSuccess(true);
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    setLoading(true);
    try {
      const response = await registerService(username, email, password);
      if (response.status === 201) {
        setSuccess(true);
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  // who am i
  const me = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await profile(token || "");
      if (response.status === "success") {
        setUser(response.data);
        return response.data;
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        loginWithGoogle,
        register,
        logout,
        loading,
        error,
        success,
        setError,
        setSuccess,
        me,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
