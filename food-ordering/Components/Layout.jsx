import { Footer } from "./Footer"
import { NavBar } from "./NavBar"
import {useContext} from 'react'
import { ThemeContext } from '../ReactHooks/ThemeContext'

export const Layout = ({children}) => {
    const darkTheme = useContext(ThemeContext)

    return(
        <>
            <NavBar/>
            <div style={{"backgroundColor": darkTheme ? "black" : "white", "color": darkTheme ? "white": "black"}}>
              {children}
            </div>
            <Footer/>
        </>
    )
}