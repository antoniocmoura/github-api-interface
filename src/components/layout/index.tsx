import React, { useContext } from "react";
import { ThemeContextType } from "../../@types/theme";
import { ThemeContext } from "../../context/theme/themeContext";
import Header from "../header";
import { LayoutWrapper } from "./styled";
import ThemeToggle from "../theme-toogle";

const Layout: React.FC<Props> = ({ children }) => {
    const { theme } = useContext(ThemeContext) as ThemeContextType;
    return (
        <LayoutWrapper className="Theme-wrapper" data-theme={theme}>
            <ThemeToggle />
            <Header />
            {children}
        </LayoutWrapper>
    );
};

export default Layout;
