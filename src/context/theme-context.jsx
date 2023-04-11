import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({});

const ThemeProvider = ({children}) => {
  const [darkmode , setDarkmode] = useState(false);
 
    
 
  function changeTheme() {
    setDarkmode(!darkmode)
  }

 
    return(
        <ThemeContext.Provider value={{darkmode,changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider