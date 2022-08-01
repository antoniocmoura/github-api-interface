import { useContext } from "react";
import { GithubContext } from "../../context/github/githubContext";
import { GithubContextType } from "../../@types/github";
import { InfoUser, ProfileWrapper, StatusCount, UserDetails, UserImage } from "./styled";

const Profile = () => {
    const { githubState } = useContext(GithubContext) as GithubContextType;

    return (
        <ProfileWrapper>
            <UserImage src={githubState.user.avatar_url} alt="Avatar of user" />
            <InfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <UserDetails>
                        <h3>Username:</h3>
                        <a href={githubState.user.html_url} target="_blank" rel="noreferrer">
                            {githubState.user.login}
                        </a>
                    </UserDetails>
                    <UserDetails>
                        <h3>Company:</h3>
                        <span>{githubState.user.company}</span>
                    </UserDetails>
                    <UserDetails>
                        <h3>Location:</h3>
                        <span>{githubState.user.location}</span>
                    </UserDetails>
                    <UserDetails>
                        <h3>Blog:</h3>
                        <a href={"http://" + githubState.user.blog} target="_blank" rel="noreferrer">
                            {githubState.user.blog}
                        </a>
                    </UserDetails>
                </div>
                <StatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span> {githubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span> {githubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span> {githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span> {githubState.user.public_repos}</span>
                    </div>
                </StatusCount>
            </InfoUser>
        </ProfileWrapper>
    );
};

export default Profile;
