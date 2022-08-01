import React, { useContext, useState } from "react";
import { GithubContextType } from "../../@types/github";
import { GithubContext } from "../../context/github/githubContext";
import { Button, HeaderContainer } from "./styled";

const Header = () => {

    const { getUser } = useContext(GithubContext) as GithubContextType;

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    };

    const [usernameForSearch, setUsernameForSearch] = useState('');

    return (
        <header>
            <HeaderContainer>
                <input
                    type="text"
                    placeholder="Enter username for search..."
                    onChange={(event: React.FormEvent<HTMLInputElement>) => setUsernameForSearch(event.currentTarget.value)}
                />
                <Button type="submit" onClick={submitGetUser}>
                    <span>Search User</span>
                </Button>
            </HeaderContainer>
        </header>
    );
};

export default Header;
