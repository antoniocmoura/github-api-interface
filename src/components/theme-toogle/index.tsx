import { useContext, useEffect, useState } from "react";
import { ToggleWrapper } from "./styled";
import { ReactComponent as MoonIcon } from "../../assets/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/sun.svg";
import { ThemeContext } from "../../context/theme/themeContext";
import { ThemeContextType } from "../../@types/theme";

const ThemeToggle = () => {
    const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        setIsEnabled(theme === "dark");
    }, [theme]);

    const toggleState = () => {
        if (!isEnabled) {
            changeTheme("dark");
        } else {
            changeTheme("light");
        }
    };

    return (
        <ToggleWrapper>
            <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
                <span className="hidden">{isEnabled ? "Enable Light Mode" : "Enable Dark Mode"}</span>
                <div className="icons">
                    <SunIcon />
                    <MoonIcon />
                </div>
                <input id="toggle" name="toggle" type="checkbox" checked={isEnabled} onChange={toggleState} />
            </div>
        </ToggleWrapper>
    );
};

export default ThemeToggle;
