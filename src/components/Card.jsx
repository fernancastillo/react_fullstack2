//Vamos a crear una card en React

function Card(props){
    return (
        <div className="card mb-3" style={ {width:"18rem"} }>
            <div className="card-body">
                <h3 className="card-title">{props.titulo}</h3>
                <p className="card-text">{props.contenido}</p>
                <button className="btn btn-danger" onClick={props.eliminar}>Eliminar</button>
            </div>
        </div>
    )
}

export default Card;