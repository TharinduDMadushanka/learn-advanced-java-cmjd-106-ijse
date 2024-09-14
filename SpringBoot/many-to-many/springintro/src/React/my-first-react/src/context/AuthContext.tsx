import {createContext} from "react";
import AuthContextType from "../types/AuthContextType.tsx";

export const AuthContext = createContext<AuthContextType>({
   isAuthentication: false,
   jwtToken: null,
   login: () => {},
   logout: () =>{}
});