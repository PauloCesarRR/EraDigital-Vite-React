import Menu from "../Components/Menu";
import { Perfil, TextStyle, PageStyle } from '../Style/style';


function Sobre (){
    return(
        <PageStyle>
            <Menu />
            

            <h1>SOBRE MIM</h1>

            <Perfil src="/eu.jpg" />

            <TextStyle>Eu tenho 18 anos e comecei estudar programação com 16 anos e até hoje sou péssimo com front end, e por isso eu gosto de java e javascript para backend somente, eu odeio frontend com todas as minnhas forças, atualmente faço estágio na área trabalhando e estudando Java + Spring Boot</TextStyle>
            <TextStyle>Meus próximos tópicos de estudos serão Docker, Redes de Computadores, DevOps e CI/CD</TextStyle>
        </PageStyle>
    )
}
export default Sobre;