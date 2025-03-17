import { createContext, useContext, useState, ReactNode } from "react";
import toast from "react-hot-toast";

interface User {
  firstName: string;
  email: string;
  password: string;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => void;
  register: (userDetails: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  console.log("called");
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("isAuthenticated");
  });

  const [user, setUser] = useState<User | null>(() => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  });

  const login = (email: string, password: string) => {
    const usersJson = localStorage.getItem("users");
    const storedUsers = usersJson ? JSON.parse(usersJson) : null;
    if (!storedUsers) {
      return toast.error("If you dont have an account register");
    }
    const storedUser = storedUsers.find((user: User) => user.email === email);
    if (!storedUser) {
      return toast.error("If you dont have an account register");
    }
    if (storedUser.password === password && storedUser.email === email) {
      setIsAuthenticated(true);
      setUser(storedUser);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(storedUser));
    } else {
      return toast.error("Invalid Credentials");
    }
  };

  const register = (userDetails: any) => {
    const usersStr = localStorage.getItem("users");
    const users = usersStr ? JSON.parse(usersStr) : [];
    users.push(userDetails);
    setUser(userDetails);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(userDetails));
    localStorage.setItem("users", JSON.stringify(users));
    toast.success("Registered Successfully");
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
