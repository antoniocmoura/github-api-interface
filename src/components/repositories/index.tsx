import { useEffect, useState } from "react";
import { useContext } from "react";
import { GithubContext } from "../../context/github/githubContext";
import { GithubContextType } from "../../@types/github";
import { TabItem, TabWrapper, TabListWrapper, TabPanelWrapper, TabsWrapper } from "./styled";
import RepositoryItem from "./repository-item";

const Repositories = () => {
    const { githubState, getUserRepository, getUserStarred } = useContext(GithubContext) as GithubContextType;
    const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
            getUserRepository(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        if (githubState.repositories) {
            setHasUserForSearchrepos(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user.login]);

    return (
        <>
            {hasUserForSearchrepos ? (
                <TabsWrapper selectedTabClassName="SelectedTab" selectedTabPanelClassName="is-selected">
                    <TabListWrapper>
                        <TabWrapper className="Tab">Repositories</TabWrapper>
                        <TabWrapper className="Tab">Starred</TabWrapper>
                    </TabListWrapper>
                    <TabPanelWrapper>
                        <TabItem>
                            {githubState.repositories.map((item) => (
                                <RepositoryItem key={item.id} name={item.name} linkToRepo={item.html_url} fullName={item.full_name} />
                            ))}
                        </TabItem>
                    </TabPanelWrapper>
                    <TabPanelWrapper>
                        <TabItem>
                            {githubState.starred.map((item) => (
                                <RepositoryItem key={item.id} name={item.name} linkToRepo={item.full_name} fullName={item.full_name} />
                            ))}
                        </TabItem>
                    </TabPanelWrapper>
                </TabsWrapper>
            ) : (
                <></>
            )}
        </>
    );
};

export default Repositories;
