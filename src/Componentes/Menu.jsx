

function Menu (){

    const menu = {
        background:'red',
        display:'flex',
        justifyContent:'center'
    }

    const link = {
        display: 'inlineBlock',
        textDecoration: 'none',
        padding: '20px',
        color: '#fff',
        fontSize: '15px'
    }

    return(
        <>
            <nav style={menu}>
                <ul style={link}>
                    <li><a href="/" style={link}>HOME</a></li>
                    <li><a href="/ListaCarros" style={link}>LISTA CARROS</a></li>
                    <li><a href="/sobre" style={link}>SOBRE</a></li>
                </ul>
            </nav>
            
        </>
    )
}
export default Menu;