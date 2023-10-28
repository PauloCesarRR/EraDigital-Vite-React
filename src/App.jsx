import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Tema from './Pages/Tema';
import Sobre from './Pages/Sobre';
import { Button, Container, LightTheme, DarkTheme, Logo, DarkMode } from './Style/style';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Contato from './Pages/Contato';
function App (){
  const [theme, setTheme] = useState('light')

  const mudarTheme = () => {
    setTheme(mudar => mudar === 'light' ? 'dark' : 'light')
  }

  return(
    <>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      
      <DarkMode>
        <Button onClick={mudarTheme}>BOTÃO</Button>
      </DarkMode>
        
      
      <hr/>
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
    </>
  )
}
export default App;