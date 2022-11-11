import FormularioGeneros from "./FormularioGeneros"

export default function EditarGenero() {

    //const { id }: any = useParams()

    return (
        <>
            <h3>Editar Genero</h3>
            <FormularioGeneros modelo={{ nombre: 'Drama' }}
                onSubmit={async (valores) => {
                    await new Promise(res => setTimeout(res, 3000))
                    console.log('valores')
                }} />
        </>
    )
}