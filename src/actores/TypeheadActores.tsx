import { Typeahead } from "react-bootstrap-typeahead"
import { ReactElement } from "react-markdown/lib/react-markdown"
import { actorPeliculaDTO } from "./actores.model"

export default function TypeheadActores(props: typeheadActoresProps) {

    const actores: actorPeliculaDTO[] = [{
        id: 1, nombre: "Chris", personaje: "superman",
        foto: "https://m.media-amazon.com/images/M/MV5BMjE1MDYwNjQxMF5BMl5BanBnXkFtZTcwNDE4NzU3MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg"
    },
    {
        id: 2, nombre: "Henry", personaje: "superman",
        foto: "https://m.media-amazon.com/images/M/MV5BODI0MTYzNTIxNl5BMl5BanBnXkFtZTcwNjg2Nzc0NA@@._V1_UY317_CR26,0,214,317_AL_.jpg"
    }]

    const seleccion: actorPeliculaDTO[] = []

    return (
        <>
            <label>Actores</label>
            <Typeahead id="typeahead"
                onChange={actor => {
                if (props.actores.findIndex(x => x.id === actores[0].id) === -1) {
                    props.onAdd([...props.actores, actores[0]])

                }
                }}
                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
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
                 key={actor.id}
                 className="list-group-item list-group-item-action"
                 >{props.listadoUI(actor)}
                 <span className="badge badge-primary badge-pill pointer"
                 style={{marginLeft: '0.5rem'}}
                 onClick={() => props.onRemove(actor)}
                 >
                    x
                 </span> 
                 </li>)}
            </ul>
        </>
    )
}
interface typeheadActoresProps {
    actores: actorPeliculaDTO[];
    onAdd(actores: actorPeliculaDTO[]): void;
    listadoUI(actor: actorPeliculaDTO): ReactElement;
    onRemove(actor: actorPeliculaDTO): void;

}