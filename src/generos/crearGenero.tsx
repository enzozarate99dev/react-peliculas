import FormularioGeneros from "./FormularioGeneros";

export default function CrearGenero() {

    //const history = useHistory()

    return (
        <>
            <h3>Crear Genero</h3>
           <FormularioGeneros modelo={{nombre: ''}} 
           onSubmit={async (valores) => { await new Promise (res => setTimeout(res, 3000))
            console.log('valores')
           }}/>



        </>
    )
}