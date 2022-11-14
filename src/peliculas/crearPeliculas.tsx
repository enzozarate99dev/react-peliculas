import { generosDTO } from "../generos/generos.model";
import { cineDTO } from "../utilidades/cines.model";
import FormularioPelis from "./FormularioPelis";

export default function CrearPeliculas() {

    const generos: generosDTO[] = [{ id: 1, nombre: "Terror" },
    { id: 2, nombre: "Drama" },
    { id: 3, nombre: "Accion" }
    ]

    const cines: cineDTO[] = [{ id: 1, nombre: "CinemaCenter" },
    { id: 2, nombre: "PlayCinema" }]
    return (
        <>
            <h3>Crear Pelicula</h3>
            <FormularioPelis
                cinesNoSeleccionados={cines}
                cinesSeleccionados={[]}
                generosNoSeleccionados={generos}
                generosSeleccionados={[]}
                modelo={{ title: '', enCines: false, trailer: '' }}
                onSubmit={valores => console.log(valores)} />
        </>
    )
}