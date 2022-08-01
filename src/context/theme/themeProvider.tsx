import { useState } from 'react';
import { Theme } from '../../@types/theme';
import { ThemeContext } from './themeContext';

const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [themeMode, setThemeMode] = useState<Theme>('light');
    return <ThemeContext.Provider
        value={{ theme: themeMode, changeTheme: setThemeMode }}>{children}
    </ThemeContext.Provider>;
};

export default ThemeProvider;