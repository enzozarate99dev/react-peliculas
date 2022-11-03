import { useParams } from "react-router-dom"
import FormularioGeneros from "./FormularioGeneros"

export default function EditarGenero() {

    const { id }: any = useParams()

    return (
        <>
            <h3>Editar Genero</h3>
            <h5>El id es {id}</h5>
            <FormularioGeneros modelo={{ nombre: 'Drama' }}
                onSubmit={async (valores) => {
                    await new Promise(res => setTimeout(res, 3000))
                    console.log('valores')
                }} />
        </>
    )
}