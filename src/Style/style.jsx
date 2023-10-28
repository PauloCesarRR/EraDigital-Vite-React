import styled from "styled-components";


export const LightTheme = {
    corFundo: '#fff',
    corTexto: '#1593e7',
    corTitulo: '#1593e7'
}

export const DarkTheme = {
    corFundo: '#000000',
    corTexto: 'white',
    corTitulo: '#fffdd0'
}

export const Container = styled.div`
    background-color: ${props => props.theme.corFundo};
    color: ${props => props.theme.corTexto};
`

export const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: #000;
    color: white;
    margin: 10px;
    border-radius: 16px;
`

// Criando um título
export const TitlePage = styled.h1`
    color: #0077ff;
    font-size: 20px;
`

export const InformacoesCep = styled.div`
    margin: 24px;
    display: flex;
    flex-direction: column;
`

export const DivForm = styled.div`
    display: inline;
    background-color: #FFF;
`

export const MenuStyle = styled.nav`
   background: #0077ff;
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    width: 100vw;
`

export const UlStyle = styled.ul`
    display: flex;
    flex-direction: row;
    padding: 24px;
    gap:16px;
    text-decoration: none;
    list-style: none;
`
export const LinkStyle = styled.a`
    text-decoration: none;
    color: black;
    font-size: 16px;
`

export const TextStyle = styled.p`
    max-width: 300px;
`

export const Logo = styled.img`
    width: 80px;
    height: 40px;
`

export const Perfil = styled.img`
    width: 120px;
    height: 120px;
`

export const PageStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-items: center;
`

export const DarkMode = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #0077ff;
`