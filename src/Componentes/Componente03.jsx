function Componente03 (props){
    return(
        <>
            <h3>COMPONENTE 03</h3>
            <p>INFORMAÇÃO ENVIADA PELO COMPONENTE PAI: {props.linguagemPai}
            </p>

            <button onClick={props.clicouPai}>Clique Aqui</button>
        </>
    )
}

export default Componente03;