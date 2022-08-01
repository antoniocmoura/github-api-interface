import styled from "styled-components";

export const ProfileWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 25px;
`;

export const InfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 8px;
    height: 200px;

    h1 {
        font-size: 30px;
        font-weight: bold;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
    }

    h4 {
        font-size: 16px;
        font-weight: bold;
    }
`;

export const StatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin-top: 5px;
        margin-right: 35px;
        text-align: center;
    }
`;

export const UserDetails = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;

    h3 {
        margin-right: 5px;
    }

    a {
        font-size: 18px;    
        font-weight: bold;
    }
`;

export const UserImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`;
