import { useContext } from 'react';
import { GithubContextType } from '../@types/github';
import { GithubContext } from '../context/github/githubContext';

const useGithub = () => {
    const { githubState, getUser, getUserRepository, getUserStarred } = useContext(GithubContext) as GithubContextType;
    return { githubState, getUser, getUserRepository, getUserStarred };
}

export default useGithub;