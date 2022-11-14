import { Typeahead } from "react-bootstrap-typeahead"
import { actorPeliculaDTO } from "./actores.model"

export default function TypeheadActores(props: typeheadActoresProps) {

    const actores: actorPeliculaDTO[] = [{
        id: 1, nombre: "Enzo", personaje: "superman",
        foto: "https://static.wikia.nocookie.net/superman/images/4/48/Nuj.png/revision/latest?cb=20200201181516&path-prefix=es"
    },
    {
        id: 2, nombre: "Carlos", personaje: "superman",
        foto: "https://static.wikia.nocookie.net/superman/images/4/48/Nuj.png/revision/latest?cb=20200201181516&path-prefix=es"
    }]

    return (
        <>
            <label>Actores</label>
            <Typeahead id="typeahead"
                onChange={actor => console.log(actor)}
                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba el actor"
                minLength={1}
                flip={true}
            
            />
        </>
    )
}
interface typeheadActoresProps {
    actores: actorPeliculaDTO[]
}