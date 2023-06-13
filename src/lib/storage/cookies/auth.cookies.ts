import { AuthTokens } from "@/contexts/authContext";
import Cookies from "js-cookie";

export const setAuth = (authTokens: AuthTokens) => {
  Cookies.set("authTokens", JSON.stringify(authTokens));
};

export const removeAuth = () => {
  Cookies.remove("authTokens");
};

export const getAuth = () => {
  return Cookies.get("authTokens");
};