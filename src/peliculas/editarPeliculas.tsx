import { generosDTO } from "../generos/generos.model";
import FormularioPelis from "./FormularioPelis";

export default function EditarPeliculas() {

    const generosNoSeleccionados: generosDTO[] = [{ id: 1, nombre: "Terror" }]
    const generosSeleccionados: generosDTO[] = [{ id: 1, nombre: "Drama" }]

    return (
        <>
            <h3>Editar Peliculas</h3>
            <FormularioPelis
                generosNoSeleccionados={generosNoSeleccionados}
                generosSeleccionados={generosSeleccionados}
                modelo={{
                    title: 'The Batman', enCines: true, trailer: 'dark knight',
                    fechaLanzamiento: new Date('2022-05-05T00:00:00')
                }}
                onSubmit={valores => console.log(valores)} />
        </>
    )
}