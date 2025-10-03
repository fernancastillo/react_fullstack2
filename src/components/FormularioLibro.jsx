import { useState } from "react"

function FormularioLibro({agregar}) {
    const[titulo, setTitulo] = useState("")
    const[contenido, setContenido] = useState("")

    const handleSubmit =(event)=>{
        event.preventDefault()
        if(!titulo || !contenido) return
        agregar({id:Date.now(),titulo,contenido})
        setTitulo("")
        setContenido("")
    }

    return (
        <form className="mb-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese Título" onChange={(e)=>setTitulo(e.target.value.toUpperCase())} />
            <input type="text" placeholder="Ingrese Contenido" onChange={(e)=>setContenido(e.target.value)} />
            <button type="submit" className="btn btn-success">Agregar Libro</button>
        </form>
    )
}

export default FormularioLibro