import FormularioActores from "./FormularioActores";

export default function EditarActores() {
    return (
        <>
            <h3> Editar Actores</h3>
            <FormularioActores
                modelo={{
                    nombre: 'Messi', fechaNacimiento: new Date('1987-06-20T00:00:00'),
                    fotoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/640px-Lionel_Messi_20180626.jpg"
                }}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}