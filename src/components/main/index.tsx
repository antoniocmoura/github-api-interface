import { useContext } from "react";
import { GithubContextType } from "../../@types/github";
import { GithubContext } from "../../context/github/githubContext";
import NoSearch from "../no-search";
import Profile from "../profile";
import Repositories from "../repositories";

const Main = () => {
   
    const { githubState } = useContext(GithubContext) as GithubContextType;

    return (
        <>
            {githubState.hasUser ? (
                githubState.loading ? (
                    <p>Loading</p>
                ) : (
                    <>
                        <Profile />
                        <Repositories />
                    </>
                )
            ) : (
                <NoSearch />
            )
            }
        </>
    );

}

export default Main;