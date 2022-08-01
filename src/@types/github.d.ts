import { Repository } from "./repository";
import { Starred } from "./starred";
import { User } from "./user";

export interface GithubState {
    hasUser: boolean;
    loading: boolean;
    user: User;
    repositories: Repository[];
    starred: Starred[];
}

export type GithubContextType = {    
    githubState: GithubState;
    getUser: (username: string) => void;    
    getUserRepository: (username: string) => void;    
    getUserStarred: (username: string) => void;
}