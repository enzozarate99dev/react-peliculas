import FormularioPelis from "./FormularioPelis";

export default function CrearPeliculas() {
    return (
        <>
        <h3>Crear Pelicula</h3>
        <FormularioPelis modelo={{title: '', enCines: false, trailer: ''}}
                        onSubmit={valores => console.log(valores)}/>
        </>
    )
}