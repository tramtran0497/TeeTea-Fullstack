import { Footer } from "./Footer"
import { Header } from "./Header"
import {useContext} from 'react'
import { ThemeContext } from '../ReactHooks/ThemeContext'

export const Layout = ({children}) => {
    const darkTheme = useContext(ThemeContext)

    return(
        <>
            <Header/>
            <div style={{"backgroundColor": darkTheme ? "black" : "white", "color": darkTheme ? "white": "black"}}>
              {children}
            </div>
            <Footer/>
        </>
    )
}