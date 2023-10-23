import { useState } from "react"
import Menu from "../Componentes/Menu"
import { DivForm, InformacoesCep, TitlePage } from "../Estilos/Estilo"
import axios from "axios"


function Cep() {

    // Vamos criar os estados para armazenar o cep
    const[cep, setCep] = useState('')
    
    // Estado par armazenar os dados retornados da nossa api VIACEP
    const[data,setData] = useState({})

    //Estado para manipular o erro
    const[error,setError] = useState(null)

    //Lidar com a mudança do campo de entrada CEP
    function handleCepChange(e) {
        setCep(e.target.value)
    }

    function pesquisaCEP() {
        //Usar o axios: manipula o get (Fazer uma requisição)
        axios
            .get(`https://viacep.com.br/ws/${cep}/json`)
            
            //Define uma função CALLBACK que será chamada se a requisição for bem-sucedida (similar ao try except)
            .then(
                function(response){
                    if(response.data && !response.data.error) {
                        setData(response.data)
                        setError(null)
                    }
                    else{
                        setData({})
                        setError('CEP NÃO ENCONTRADO')
                    }
                }
                
            )
            .catch(
                function(error) {
                    setData({})
                    setError('CEP NÃO ENCONTRADO')
                }
            )
    }

    return (
        <>
            <Menu />
            <TitlePage> PESQUISA CEP</TitlePage>

            <input type="text" placeholder="TEXTO NO FUNDO" value={cep} onChange={handleCepChange} />

            <button onClick={pesquisaCEP}>PESQUISAR</button>

            {
                error && <p>{error}</p>
            }

            {
                data.cep && (
                    <InformacoesCep>
                            <p>CEP: {data.cep} </p>
                            <p>Logradouro: {data.logradouro}</p>
                            <p>Complemento: {data.complemento}</p>
                            <p>Bairro: {data.bairro}</p>
                            <p>UF: {data.uf}</p>
                            <p>DDD: {data.ddd}</p>
                    </InformacoesCep>
                )
            }


            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </>
    )
}

export default Cep;