import { useState } from 'react';
import { GithubState } from '../../@types/github';
import API from '../../services/api';
import { GithubContext } from './githubContext';
import { User } from "../../@types/user";
import { Repository } from '../../@types/repository';
import { Starred } from '../../@types/starred';

const initialState: GithubState = {
    hasUser: false,
    loading: false,
    user: {
        id: 0,
        login: '',
        name: '',
        company: '',
        location: '',
        blog: '',
        followers: 0,
        following: 0,
        public_gists: 0,
        public_repos: 0,
        node_id: '',
        avatar_url: '',
        gravatar_id: '',
        url: '',
        html_url: '',
        followers_url: '',
        following_url: '',
        gists_url: '',
        starred_url: '',
        subscriptions_url: '',
        organizations_url: '',
        repos_url: '',
        events_url: '',
        received_events_url: '',
        type: '',
        site_admin: false
    },
    repositories: [],
    starred: []
}

const GithubProvider: React.FC<Props> = ({ children }) => {

    const [githubState, setGithubState] = useState<GithubState>(initialState);

    const getUserApi = (username: string) => {

        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        API.get<User>(`users/${username}`)        
            .then((response) => {         
                
            console.log(response.data)      
                setGithubState((prevState) => ({
                    ...prevState,
                    hasUser: true,
                    user: response.data
                }));
            }).finally(() => {
                setGithubState((prevState) => ({
                    ...prevState,
                    loading: !prevState.loading,
                }));
            });
    }

    const getUserRepositoryApi = (username: string) => {
        API.get<Repository[]>(`users/${username}/repos`).then((response) => {
            setGithubState((prevState) => ({
              ...prevState,
              repositories: response.data
            }));
          });
    }

    const getUserStarredApi = (username: string) => {
        API.get<Starred[]>(`users/${username}/starred`).then(({ data }) => {            
            setGithubState((prevState) => ({
              ...prevState,
              starred: data,
            }));
          });
    }

    return <GithubContext.Provider
        value={{
            githubState: githubState,
            getUser: getUserApi,
            getUserRepository: getUserRepositoryApi,
            getUserStarred: getUserStarredApi
        }}>
        {children}
    </GithubContext.Provider>;
}

export default GithubProvider;