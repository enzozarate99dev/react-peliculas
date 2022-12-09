import axios, { AxiosResponse } from "axios"
import { useState, ReactElement } from "react"
import { AsyncTypeahead } from "react-bootstrap-typeahead"
import { urlActores } from "../utilidades/endpoints"
import { actorPeliculaDTO } from "./actores.model"

export default function TypeAheadActores(props: typeAheadActoresProps) {

    const [estaCargando, setEstaCargando] = useState(false)
    const [opciones, setOpciones] = useState<actorPeliculaDTO[]>([]);

    const [elementoArrastrado, setElementoArrastrado] = useState<actorPeliculaDTO | undefined>(undefined)

    const seleccion: actorPeliculaDTO[] = []

    function manejarBusqueda(query: string){
        setEstaCargando(true);

        axios.get(`${urlActores}/buscarPorNombre/${query}`)
        .then((respuesta: AxiosResponse<actorPeliculaDTO[]>) => {
            setOpciones(respuesta.data)
            setEstaCargando(false);
        })
    }

    function manejarDragStart(actor: actorPeliculaDTO) 
    {
        setElementoArrastrado(actor);
    }

    function manejarDragOver(actor: actorPeliculaDTO)
    {
        if (!elementoArrastrado){
            return;
        }

        if (actor.id !== elementoArrastrado.id){
            const elementoArrastradoIndice = 
                props.actores.findIndex(x => x.id === elementoArrastrado.id);
            const actorIndice = props.actores.findIndex(x => x.id === actor.id);
            const actores = [...props.actores];
            actores[actorIndice] = elementoArrastrado;
            actores[elementoArrastradoIndice] = actor;
            props.onAdd(actores);

        }
    }

    return (
        <>
            <label>Actores</label>
            <AsyncTypeahead id="typeahead"
                onChange={actores => {
                if (props.actores.findIndex(x => x.id === actores[0].id) === -1) {
                    props.onAdd([...props.actores, actores[0]])

                }
                }}
                options={opciones}
                isLoading={estaCargando}
                onSearch={manejarBusqueda}
                labelKey={actor => actor.nombre}
                filterBy={() => true}
                placeholder="Escriba el actor"
                minLength={1}
                flip={true}
                selected={seleccion}
                //personalizar el listado de sugerencias
                renderMenuItemChildren={actor => (
                    <>
                        <img src={actor.foto} alt="actor" style={{
                            height: '64px',
                            width: '64px',
                            margin: '7px'
                        }} />
                        <span>{actor.nombre}</span>
                    </>
                )}

            />

            <ul className="list-group">
                {props.actores.map(actor => <li
                draggable={true}
                onDragStart={() => manejarDragStart(actor)}
                onDragOver={() => manejarDragOver(actor)}
                className="list-group-item list-group-item-action"
                key={actor.id}>

                 {props.listadoUI(actor)}
                 <span className="badge badge-primary badge-pill pointer"
                 style={{marginLeft: '0.5rem'}}
                 onClick={() => props.onRemove(actor)}
                 >
                    X
                 </span> 
                 </li>)}
            </ul>
        </>
    )
}
interface typeAheadActoresProps {
    actores: actorPeliculaDTO[];
    onAdd(actores: actorPeliculaDTO[]): void;
    listadoUI(actor: actorPeliculaDTO): ReactElement;
    onRemove(actor: actorPeliculaDTO): void;

}