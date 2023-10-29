import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Tema from './Pages/Tema';
import Sobre from './Pages/Sobre';
import { Button, Container, LightTheme, DarkTheme, Logo, DarkMode, Body } from './Style/style';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Contato from './Pages/Contato';
function App (){
  const [theme, setTheme] = useState('light')

  const mudarTheme = () => {
    setTheme(mudar => mudar === 'light' ? 'dark' : 'light')
  }

  return(
    <Body>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      
      <DarkMode>
        <Logo src='/logo.png'/>
        <Button onClick={mudarTheme}>BOTÃO</Button>
      </DarkMode>
        
      <Container>
          <BrowserRouter>
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/Tema' element={<Tema />} />
                <Route path='/Sobre' element={<Sobre />} />
                <Route path='/Contato' element={<Contato />} />

            </Routes>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </Body>
  )
}
export default App;