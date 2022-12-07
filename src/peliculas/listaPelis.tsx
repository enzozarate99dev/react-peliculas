import { peliculaDTO } from "./pelicula.model"
import PeliculaInd from "./peliculaInd"
import css from "./listaPelis.module.css"
import ListaGenerica from "../utilidades/ListaGenerica"

export default function ListaPelis(props: listaPelisProps) {

    
        return (
            <ListaGenerica lista={props.peliculas}>
            <div className={css.div}>
                {props.peliculas?.map(pelicula => <PeliculaInd pelicula={pelicula} key={pelicula.id} />)}
            </div>
            </ListaGenerica>
        )
    }


interface listaPelisProps {
    peliculas?: peliculaDTO[]
}