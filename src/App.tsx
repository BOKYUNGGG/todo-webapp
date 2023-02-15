import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Navbar from './components/Navbar'
const GlobalStyle = createGlobalStyle`
    ${props => props.theme.isDark && `
        @media (prefers-color-scheme: dark){
            :root{
            --foreground : var(--color-light);
            --background : var(--color-dark);
            }
        }
    `}
    
`
function App() {
  const [isDark, setIsDark] = useState(false)
  useEffect(()=>{
    (function(){
        const useDark = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDark(useDark.matches)
    })()
  }, [])
  const toggleTheme = () => { 
      setIsDark(prev => !prev)
  }
  return (
    <div>
        <ThemeProvider theme={{isDark : isDark}}>
          <Navbar toggleHandler={toggleTheme}></Navbar>
          <Outlet></Outlet>
          <GlobalStyle></GlobalStyle>
        </ThemeProvider>
    </div>
  )
}

export default App
