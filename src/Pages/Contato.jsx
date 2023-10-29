import { useState } from "react"
import Menu from "../Components/Menu"
import {InformacoesCep, TitlePage, PageStyle } from "../Style/style"
import axios from "axios"

import styled from "styled-components";

const Input = styled.input`
    border: 1px solid #000;
    border-radius: 8px;
    padding: 8px;
`

const WrapLabels = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap:4px;
`

const WrapContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-center: center;
    gap: 16px;
`

const Button = styled.button`
    background-color: #0077ff;
    padding: 8px;
    font-color: #000;
    border: 1px solid #000;
    border-radius: 8px;
`


function Contato() {

    // Vamos criar os estados para armazenar o cep
    const[cep, setCep] = useState('')
    
    // Estado par armazenar os dados retornados da nossa api VIACEP
    const[data,setData] = useState({})

    //Estado para manipular o erro
    const[error,setError] = useState(null)

    //Lidar com a mudança do campo de entrada CEP
    function handleCepChange(e) {
        setCep(e.target.value)
        pesquisaCEP()
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
            ).catch(
                function(error) {
                    setData({})
                    setError('CEP NÃO ENCONTRADO')
                }
            )
    }

    return (
        <PageStyle>
            <Menu />
            <TitlePage> ENTRE EM CONTATO</TitlePage>

            <WrapContent>
                <WrapLabels>
                    <label htmlFor="">Nome:</label>
                    <Input type="text" placeholder="Digite seu Nome..."/>
                </WrapLabels>

                <WrapLabels>
                    <label htmlFor="">Telefone:</label>
                    <Input type="text" placeholder="Digite seu número de telefone..."/>
                </WrapLabels>

                <WrapLabels>
                    <label htmlFor="">E-mail:</label>
                    <Input type="email" placeholder="Digite seu e-mail..."/>
                </WrapLabels>

                <WrapLabels>
                    <label htmlFor="">CEP:</label>
                    <Input type="text" placeholder="Digite seu CEP..." value={cep} onChange={handleCepChange} />

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
                </WrapLabels>

                <Button onClick={pesquisaCEP}>Enviar</Button>
            </WrapContent>  
        </PageStyle>
    )
}

export default Contato;