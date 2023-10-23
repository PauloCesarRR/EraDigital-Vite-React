import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import ListaCarros from './Pages/ListaCarros';
import Sobre from './Pages/Sobre';
import { Button, Container, LightTheme, DarkTheme } from './Estilos/Estilo';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Cep from './Pages/cep';

function App (){
  const [theme, setTheme] = useState('light')

  const mudarTheme = () => {
    setTheme(mudar => mudar === 'light' ? 'dark' : 'light')
  }

  return(
    <>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <h1>CONFIGURAÇÃO DE UM LOGO</h1>

      <Button onClick={mudarTheme}>BOTÃO</Button>

      <hr/>
        <Container>
          <BrowserRouter>
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/ListaCarros' element={<ListaCarros />} />
                <Route path='/Sobre' element={<Sobre />} />
                <Route path='/cep' element={<Cep />} />

            </Routes>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </>
  )
}
export default App;