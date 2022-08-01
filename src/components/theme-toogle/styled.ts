import styled from "styled-components";

export const ToggleWrapper = styled.label`
    width: 130px;
    display: block;
    margin: auto;

    .toggle {
        height: 65px;
        width: 130px;
         background: var(--foreground);
        border-radius: 40px;
        padding: 12px;
        position: relative;        
        transition: background var(--transition);
        cursor: pointer;
    }

    .toggle::before {
        content: "";
        display: block;
        height: 41px;
        width: 41px;
        border-radius: 30px;
        background: var(--background);
        position: absolute;
        z-index: 2;
        transform: translate(0);
        transition: transform var(--transition), background var(--transition);
    }

    .toggle.enabled::before {
        transform: translateX(65px);
    }

    .toggle input {
        opacity: 0;
        position: absolute;
        top: 0;
    }

    .toggle .icons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        margin: 0 5px;
    }

    .hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }

    .toggle .icons svg {
        fill: var(--background);        
        height: 30px;
        width: 30px;
        z-index: 0;
    }
`;
