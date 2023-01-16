import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import { Link, useParams } from "react-router-dom"
import Swal from "sweetalert2"
import Cargando from "../utilidades/Cargando"
import { coordenadaDTO } from "../utilidades/coordenadas.model"
import { urlPeliculas, urlRatings } from "../utilidades/endpoints"
import Mapa from "../utilidades/Mapa"
import Rating from "../utilidades/Rating"
import { peliculaDTO } from "./pelicula.model"

export default function DetallePelicula() {
    const { id }: any = useParams()
    const [pelicula, setPelicula] = useState<peliculaDTO>();

    useEffect(() => {
        axios.get(`${urlPeliculas}/${id}`)
            .then((respuesta: AxiosResponse<peliculaDTO>) => {
                respuesta.data.fechaLanzamiento = new Date(respuesta.data.fechaLanzamiento);
                setPelicula(respuesta.data);
            })
    }, [id])

    function generarURLYoutubeEmbebido(url: any): string {
        if (!url) {
            return '';
        }

        var video_id = url.split('v=')[1];
        var posicionAmpersand = video_id.indexOf('&');
        if (posicionAmpersand !== -1) {
            video_id = video_id.substring(0, posicionAmpersand);
        }
        return `https://www.youtube.com/embed/${video_id}`

    }

    function transformarCoordenadas(): coordenadaDTO[] {
        if (pelicula?.cines) {
            const coordenadas = pelicula.cines.map(cine => {
                return {
                    lat: cine.latitud,
                    lng: cine.longitud, nombre: cine.nombre
                } as coordenadaDTO;
            });
            return coordenadas;
        }

        return [];
    }

    async function onVote(voto: number) {
        await axios.post(urlRatings, { puntuacion: voto, peliculaId: id })
        Swal.fire({ icon: 'success', title: 'Voto recibido' })

    }

    return (
        pelicula ?
            <div className="container" style={{ display: 'flex', padding: '3rem' }}>
                <div>
                    <div className="row justify-content-center">
                        <span className="col-3" style={{ display: 'inline-block', marginRight: '2rem' }}>
                            <img src={pelicula.poster}
                                style={{ width: '225px', height: '315px' }}
                                alt="poster"
                            />
                        </span>
                        <div className="col-6 ">
                            <h2 className="fw-bolder text-light">{pelicula.titulo} </h2>
                            {pelicula.generos?.map(genero =>
                                <Link key={genero.id} style={{ marginRight: '5px' }}
                                    className="btn btn-dark btn-sm rounded-pill"
                                    to={`/peliculas/filtrar?generoId=${genero.id}`}
                                >{genero.nombre}</Link>)
                            }
                            |  {pelicula.fechaLanzamiento.toDateString()}
                            |  Tu voto:
                            <Rating maximoValor={5}
                                valorSeleccionado={pelicula.votoUsuario!} onChange={onVote} />
                            {pelicula.resumen ?
                                <div style={{ marginTop: '1rem' }}>
                                    <div>
                                        <ReactMarkdown>{pelicula.resumen}</ReactMarkdown>
                                    </div>
                                </div> : null}
                        </div>
                    </div>



                    <div  style={{  marginTop: '1rem' }}>

                        {pelicula.trailer ? <div>
                            <iframe
                                title="youtube-trailer"
                                width="720"
                                height="680"
                                src={generarURLYoutubeEmbebido(pelicula.trailer)}
                                frameBorder={0}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            >

                            </iframe>
                        </div> : null}
                    </div>

                    

                    {pelicula.actores && pelicula.actores.length > 0 ?
                        <div style={{ marginTop: '1rem' }}>
                            <h3>Actores</h3>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {pelicula.actores?.map(actor =>
                                    <div key={actor.id} style={{ marginBottom: '2px' }}>
                                        <img alt="foto" src={actor.foto}
                                            style={{ width: '50px', verticalAlign: 'middle' }} />
                                        <span style={{
                                            display: 'inline-block', width: '200px',
                                            marginLeft: '1rem'
                                        }}>
                                            {actor.nombre}
                                        </span>
                                        <span style={{
                                            display: 'inline-block',
                                            width: '45px'
                                        }}>...</span>
                                        <span>{actor.personaje}</span>
                                    </div>)}
                            </div>
                        </div> : null}

                    {pelicula.cines && pelicula.cines.length > 0 ?
                        <div>
                            <h2>Mostrándose en los siguiente cines</h2>
                            <Mapa soloLectura={true} coordenadas={transformarCoordenadas()} />
                        </div> : null}

                </div>
            </div> : <Cargando />

    )
}