import Componente01 from "./Componentes/Componente01";
import Componente02 from "./Componentes/Componente02";
import Componente03 from "./Componentes/Componente03";
import Carro from "./Componentes/Carro";

function App (){
  const linguagem="JAVASCRIPTs";

  const carros = 'CARRO AZUL';
  const carrosArray = ['FUSCA','CELTA',"UNO"];

  function clicouBotao(){
    alert("alerta da tela app")
  }
  return (
    <>
      <h1>Hello, World</h1>
      <hr/>
      <Componente01 />
      <hr/>
      <Componente02 />
      <hr/>
      <Componente03 linguagemPai={linguagem} clicouPai={clicouBotao} />
      <hr/>
      <Carro carroValorPai={carrosArray} />
      <hr/>
    </>
  )

}

export default App;