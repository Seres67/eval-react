import { MovieService } from "../../services/movie";
import { createContext } from "react";

export const MovieContext = createContext(new MovieService());
