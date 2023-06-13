import { AuthContext, AuthContextType } from "@/contexts/authContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext) as AuthContextType;
  if(context === undefined) throw new Error("useAuthContext must be used within a AuthProvider");
  return context;
};