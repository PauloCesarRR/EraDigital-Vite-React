import Menu from "../Components/Menu";
import { TitlePage, PageStyle } from "../Style/style";


function Home (){
    return(
        <PageStyle>
            <Menu />

            <hr/>
            <TitlePage>Home</TitlePage>

            <p>Este projeto é o Checkpoint 5 de Responsive de Web Devlopment</p>
            <p>RM99615</p>
        </PageStyle>
    )
}

export default Home;