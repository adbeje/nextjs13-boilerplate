import { AuthTokens } from "@/contexts/authContext";
import Cookies from "js-cookie";

// Hay que setear el path a "/" para que no haga falta refrescar la puta web
export const setAuth = (authTokens: AuthTokens) => {
  Cookies.set("authTokens",JSON.stringify(authTokens),{path: "/"});
};

export const removeAuth = () => {
  Cookies.remove("authTokens");
};

export const getAuth = () => {
  const cookie = Cookies.get("authTokens");
  if(cookie === undefined) return undefined;
  let authTokens = JSON.parse(cookie) as AuthTokens; 
  return authTokens;
};

export const isAuthed = () => {
  return !!getAuth();
};