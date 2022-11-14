import FormGroupCine from "./FormGroupCines";

export default function EditarCine() {
    return (
        <>
         <h3>Editar Cine</h3>
        <FormGroupCine 
            modelo={{nombre: 'Cinema Center'}}
            onSubmit={valores => console.log(valores)}
        />
        </>
    )
}