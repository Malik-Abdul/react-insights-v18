import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { login, logout, checkTokenValidity, refreshToken } from "../api/auth";

interface User {
  username: string;
}

interface AuthContextType {
  user: User | null;
  handleLogin: (username: string, password: string) => Promise<void>;
  handleLogout: () => Promise<void>;
  checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  // Function to check token validity
  const checkAuthStatus = async () => {
    try {
    //   const isValid = await checkTokenValidity();
    //   if (!isValid) {
        // console.log("Token expired, attempting refresh...");
        // const refreshed = await refreshToken();
        // if (!refreshed) {
        //   console.log("Refresh failed, logging out.");
        //   handleLogout();
        // }
    //   }
    } catch (error) {
    //   console.error("Auth check failed", error);
      //   handleLogout();
    }
  };

  // Runs on mount to check if the user is logged in
  useEffect(() => {
    // checkAuthStatus();
  }, []);

  const handleLogin = async (username: string, password: string) => {
    const data = await login(username, password);
    setUser(data.user || null);
  };

  const handleLogout = async () => {
    // await logout();
    // setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, handleLogin, handleLogout, checkAuthStatus }}
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
