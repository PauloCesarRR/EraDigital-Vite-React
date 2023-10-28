import { MenuStyle, LinkStyle, UlStyle } from "../Style/style";

function Menu (){

   

    return(
        <>
            <MenuStyle>
                <UlStyle>
                    <li><LinkStyle href="/">HOME</LinkStyle></li>
                    <li><LinkStyle href="/Tema" >TEMA</LinkStyle></li>
                    <li><LinkStyle href="/Sobre" >SOBRE</LinkStyle></li>
                    <li><LinkStyle href="/Contato" >CONTATO</LinkStyle></li>
                </UlStyle>
            </MenuStyle>       
        </>
    )
}
export default Menu;