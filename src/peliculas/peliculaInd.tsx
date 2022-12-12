import axios from "axios"
import { useContext } from "react"
import { Link } from "react-router-dom"
import Autorizado from "../auth/Autorizado"
import AlertaContext from "../utilidades/AlertaContext"
import Button from "../utilidades/Button"
import confirmar from "../utilidades/Confirmar"
import { urlPeliculas } from "../utilidades/endpoints"
import { peliculaDTO } from "./pelicula.model"
import css from "./peliculaInd.module.css"


export default function PeliculaIndividual(props: peliculaIndividualProps) {

    const construirLink = () => `/pelicula/${props.pelicula.id}`
    const alerta = useContext(AlertaContext)

    function borrarPelicula() {
        axios.delete(`${urlPeliculas}/${props.pelicula.id}`)
            .then(() => {
                alerta();
            })
    }

    return (
        <div className={css.div}>
            <Link to={construirLink()}>
                <img src={props.pelicula.poster} alt="Poster" />
            </Link>
            <p>
                <Link to={construirLink()}>{props.pelicula.titulo}</Link>
            </p>
            <Autorizado role="admin" autorizado={
                <>
                    <div>
                        <Link style={{ marginRight: '1rem' }} className="btn btn-info"
                            to={`/peliculas/editar/${props.pelicula.id}`}>Editar</Link>
                        <Button
                            onClick={() => confirmar(() => borrarPelicula())}
                            className="btn btn-danger">Borrar</Button>
                    </div>
                </>
            } />

        </div>
    )
}

interface peliculaIndividualProps {
    pelicula: peliculaDTO;
}

