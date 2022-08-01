import { createContext } from "react";
import { GithubContextType } from "../../@types/github";

export const GithubContext = createContext<GithubContextType | null>(null);