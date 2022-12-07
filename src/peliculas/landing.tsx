import axios, { AxiosResponse } from "axios"
import { useState, useEffect } from "react"
import AlertaContext from "../utilidades/AlertaContext"
import { urlPeliculas } from "../utilidades/endpoints"
import ListaPelis from "./listaPelis"
import { landingPageDTO } from "./pelicula.model"

export default function LandingPage() {
    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect(() => {
        cargarDatos();

    }, [])

    function cargarDatos() {
        axios.get(urlPeliculas)
        .then((respuesta: AxiosResponse<landingPageDTO>) => {
            setPeliculas(respuesta.data)
        })
    }

    return (
        <>
            <AlertaContext.Provider value={() => cargarDatos()}>
            <h3>En Cartelera</h3>
            <ListaPelis peliculas={peliculas.enCines} />
            <h3>Proximos Estrenos</h3>
            <ListaPelis peliculas={peliculas.proximosEstrenos} />
            </AlertaContext.Provider>
        </>
    )
}