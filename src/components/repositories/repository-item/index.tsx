import { FullName, ItemContainer, Link, Title } from "./styled";

const RepositoryItem = (props: RepositoryItemProps) => {
    return (
        <ItemContainer className="Repo">
            <Title>{props.name}</Title>
            <FullName className="RepoFullName">Full name:</FullName>
            <Link href={props.linkToRepo} target="_blank" rel="noreferrer">
                {props.fullName}
            </Link>
        </ItemContainer>
    );
};

export default RepositoryItem;
