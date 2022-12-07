import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { generoDTO } from "../generos/generos.model";
import Cargando from "../utilidades/Cargando";
import { urlPeliculas } from "../utilidades/endpoints";
import MostrarErrores from "../utilidades/MostrarErrores";
import FormularioPelis from "./FormularioPelis";
import { peliculaCreacionDTO, peliculasPostGetDTO } from "./pelicula.model";
import {convertirPeliculaFormData} from "../utilidades/FormDataUtils"
import { cineDTO } from "../cines/cines.model";

export default function CrearPeliculas() {

    const [generosNoSeleccionados, setGenerosNoSeleccionados ] = useState<generoDTO[]>([]);
    const [cinesNoSeleccionados, setCinesNoSeleccionados ] = useState<cineDTO[]>([]);
    const [cargado, setCargado] = useState(false);
    const history = useHistory();
    const [errores, setErrores] = useState<string[]>([]);

    useEffect(() => {
        axios.get(`${urlPeliculas}/postget`)
        .then((respuesta: AxiosResponse<peliculasPostGetDTO>) => {
            setGenerosNoSeleccionados(respuesta.data.generos);
            setCinesNoSeleccionados(respuesta.data.cines);
            setCargado(true);

        })
    }, [])

    async function crear(pelicula: peliculaCreacionDTO){
        try {
            const formData = convertirPeliculaFormData(pelicula);
            await axios({
                method: 'post',
                url: urlPeliculas,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'}
            }).then((respuesta: AxiosResponse<number>) => {
                history.push(`/pelicula/${respuesta.data}`);
            })
        }
        catch(error) {
            setErrores(error.response.data);
        }
    }
    
    return (
        <>
            <h3>Crear Pelicula</h3>
            <MostrarErrores errores={errores} />
            {cargado ? <FormularioPelis

                actoresSeleccionados={[]}
                cinesNoSeleccionados={cinesNoSeleccionados}
                cinesSeleccionados={[]}
                generosNoSeleccionados={generosNoSeleccionados}
                generosSeleccionados={[]}
                modelo={{ titulo: '', enCines: false, trailer: '' }}
                onSubmit={async valores => crear(valores)} 
                /> : <Cargando />}
        </>
    )
}


