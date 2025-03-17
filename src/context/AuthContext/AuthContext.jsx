import { AuthService } from "../../services/auth";
import { createContext } from "react";

export const AuthContext = createContext(new AuthService());
