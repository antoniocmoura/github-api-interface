import styled from "styled-components";

export const ItemContainer = styled.div`
    padding: 8px;
    border-radius: 8px;
  /*  border: 1px solid #ccc;*/
    margin-right: 15px;
    margin-bottom: 15px;
    width: 350px;
    height: 150px;
    align-content: center;
    * > :last-child {
        margin-right: 0;
    }
`;

export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
`;

export const FullName = styled.h2`
    font-size: 16px;
    font-weight: bold;
    margin: 8px 0;
`;

export const Link = styled.a`
    font-size: 16px;
    font-weight: bold;
    margin: 8px 0;
   /* color: #3182ce;*/
`;
