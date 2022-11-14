import FormGroupCine from "./FormGroupCines";

export default function CrearCine() {
    return (
        <>
        <h3>Crear Cine</h3>
        <FormGroupCine 
            modelo={{nombre: ''}}
            onSubmit={valores => console.log(valores)}
        />

        
        </>
    )
}