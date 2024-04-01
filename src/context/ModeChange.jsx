import { useState } from "react";
import { modeChange } from "./MyContext";

const ModeChnage = ({children}) => {

    const  [isDark, setIsDark] = useState('light');

    const toggleTheme = () => {
        setIsDark((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };

  return (
    <modeChange.Provider value={{isDark,toggleTheme}}>
        {children}
    </modeChange.Provider>

  )
}

export default ModeChnage