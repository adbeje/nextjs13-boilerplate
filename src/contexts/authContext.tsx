"use client";

import {
  ReactNode,
  createContext,
  useCallback, useMemo
} from "react";
import { getAuth, removeAuth, setAuth } from "@/lib/storage";



export type AuthTokens = {
  token: string;
  refreshToken: string;
};

export type AuthContextType = {
  login: (authTokens: AuthTokens) => void, 
  logout: () => void, 
  isLogged: () =>  boolean
}

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  // const authTokensInLocalStorage = Cookies.get("authTokens");

  const login = useCallback( setAuth, []);

  const logout = useCallback( removeAuth, []);

  const isLogged = useCallback( () => {
    return !!getAuth();
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isLogged
    }),
    [login, logout, isLogged]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}