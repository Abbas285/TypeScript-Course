import { createContext } from "react"
import { theme } from "./theme"

type ThemeContextProviderpProps={
    children:React.ReactNode
}
export const ThemeContext=createContext(theme)

export const ThemeContextProvider=({children}:ThemeContextProviderpProps)=>{
    return <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
}