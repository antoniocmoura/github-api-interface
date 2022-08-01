import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const TabsWrapper = styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
`;

export const TabListWrapper = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;

export const TabWrapper = styled(Tab)`
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    width: 125px;
    /* background-color: #fff;*/
    margin: 8px;
    display: flex;
    justify-content: center;
 /*   &:focus {
        outline: none;
    }

    &.is-selected {
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }*/
`;

export const TabPanelWrapper = styled(TabPanel)`
    padding: 16px;
    border: 1px solid "#ccc";
    display: none;
    margin-top: -5px;

    &.is-selected {
        display: block;
    }
`;

export const TabItem = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;
