import { pelicula } from "./pelicula.model"
import css from "./peliculaInd.module.css"
export default function PeliculaInd(props: peliculaIndProps) {

    const linkPeli = () => `/pelicula/${props.pelicula.id}`

    return (
        <div className={css.div}>
            <a href={linkPeli()}>
                <img src={props.pelicula.poster} alt="Poster"></img>
            </a>
            <p>
                <a href={linkPeli()}>
                    {props.pelicula.title}
                </a>
            </p>
        </div>
    )
}

interface peliculaIndProps {
    pelicula: pelicula
}