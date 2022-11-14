import { generosDTO } from "../generos/generos.model";
import FormularioPelis from "./FormularioPelis";

export default function CrearPeliculas() {

    const generos: generosDTO[] = [{id: 1, nombre: "Terror"},
         {id: 2, nombre: "Drama"},
         {id: 3, nombre: "Accion"}
        ]
    return (
        <>
        <h3>Crear Pelicula</h3>
        <FormularioPelis 
        generosNoSeleccionados={generos}
        generosSeleccionados={[]}
        modelo={{title: '', enCines: false, trailer: ''}}
                        onSubmit={valores => console.log(valores)}/>
        </>
    )
}