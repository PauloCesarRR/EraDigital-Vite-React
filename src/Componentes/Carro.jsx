


function Carro(props) {
    return(
        <>
            <h1>LISTA DE CARROS</h1>

            <ul>
                    <li>{ props.carroValorPai[0] }</li>
                    <li>{ props.carroValorPai[1] }</li>
                    <li>{ props.carroValorPai[2] }</li>
            </ul>


        </>
    )
}

export default Carro;