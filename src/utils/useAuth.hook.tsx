import AsyncStorage from "@react-native-async-storage/async-storage"; // For token storage
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { AuthState, User } from "@/types/auth.types";

const AuthContext = createContext<
  | {
      authState: AuthState;
      signIn: (user: User, token: string) => Promise<void>;
      signOut: () => Promise<void>;
    }
  | undefined
>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    token: null,
  });

  useEffect(() => {
    // Implement token validation and set initial auth state here
    // E.g., load the token from storage, validate it, and update the state
  }, []);

  const signIn = async (user: User, token: string) => {
    // Implement sign-in logic here
    // E.g., store the token in AsyncStorage and update the state
    await AsyncStorage.setItem("userToken", token);
    setAuthState({ isAuthenticated: true, user, token });
  };

  const signOut = async () => {
    // Implement sign-out logic here
    // E.g., remove the token from AsyncStorage and update the state
    await AsyncStorage.removeItem("userToken");
    setAuthState({ isAuthenticated: false, user: null, token: null });
  };

  return (
    <AuthContext.Provider value={{ authState, signIn, signOut }}>
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
