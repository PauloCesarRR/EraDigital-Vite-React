import Menu from "../Components/Menu";
import { Image, TextStyle, PageStyle } from '../Style/style';
import styled from "styled-components";


const WrapText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:16px;
`

function Tema (){
    return(
        <PageStyle>
            <Menu />
            <hr/>
            <WrapText>
                <TextStyle>A Era da Informação ou era digital são termos frequentemente utilizados para designar os avanços tecnológicos advindos da Terceira Revolução Industrial e que reverberaram na difusão de um ciberespaço, um meio de comunicação instrumentalizado pela informática e pela internet.</TextStyle>
                <Image src='/O.jfif'/>
                <TextStyle>Essa expressão também é uma forma de observar os avanços das técnicas atuais de transformação da sociedade em comparação a outras anteriores. Fala-se, por exemplo, que a era digital emerge como uma substituição à era industrial que, por sua vez, emergiu outrora em substituição à era da agricultura. Assim, ao menos em tese, estaríamos passando por um terceiro ciclo de renovações de ideias, ações e pensamentos que marcaram a história da humanidade.</TextStyle>
                <Image src='/OIP.jfif'/>
                <TextStyle>Podemos compreender, portanto, que a era da informação nada mais é do que mais uma dentre as várias evoluções que as transformações sobre as técnicas produziram, desde a invenção das técnicas agrícolas em tempos remotos. Sendo assim, trata-se também de uma nova forma de se produzir e transformar o espaço geográfico, as paisagens, os lugares e o território.</TextStyle>
                <Image src='/R.jfif'/>
                <TextStyle>A particularidade mais notória da atual era da informação é, sem dúvidas, a ampliação da capacidade de armazenamento e memorização de informações, dados e formas de conhecimentos. A integração mundial é uma outra marca, haja vista que, via internet, pessoas do mundo inteiro estão interligadas, compartilhando informações, divulgando impressões e difundindo formas de cultura e saberes.</TextStyle>
                <Image src='/A.jfif'/>
                <TextStyle>Para esse processo de formação e integração espacial ocasionado pelas técnicas digitais, bem como à maneira que ele modifica o espaço, é dado o nome de meio técnico-científico informacional. Nele, a velocidade dos fluxos econômicos, sociais, culturais, linguísticos, dentre outros, amplia-se em ritmo exponencial, deflagrando uma sucessão de novas revoluções a cada instante.</TextStyle>
            </WrapText>
        </PageStyle>
    )
}
export default Tema;