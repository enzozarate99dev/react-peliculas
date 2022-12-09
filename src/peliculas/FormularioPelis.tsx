import { Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import * as Yup from 'yup'
import { Link } from "react-router-dom";
import { actorPeliculaDTO } from "../actores/actores.model";
import TypeheadActores from "../actores/TypeheadActores";
import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import Button from "../utilidades/Button";
import FormGroupCheckbox from "../utilidades/FormGroupCheckbox";
import FormGroupFecha from "../utilidades/FormGroupFecha";
import FormGroupImage from "../utilidades/FormGroupImage";
import FormGroupMark from "../utilidades/FormGroupMark";
import FormGroupText from "../utilidades/FormGroupText";
import SelectorMultiple, { selectorMultipleModel } from "../utilidades/SelectorMultiple";
import { peliculaCreacionDTO } from "./pelicula.model";

export default function FormularioPelis(props: formularioPelisProps) {

    const [generosSeleccionados, setGenerosSeleccionados] = useState(mapear(props.generosSeleccionados))
    const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState(mapear(props.generosNoSeleccionados))

    const [cinesSeleccionados, setCinesSeleccionados] = useState(mapear(props.cinesSeleccionados))
    const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState(mapear(props.cinesNoSeleccionados))

    const [actoresSeleccionados, setActoresSeleccionados] = useState<actorPeliculaDTO[]>(props.actoresSeleccionados)
   
    function mapear(array: { id: number, nombre: string }[]): selectorMultipleModel[] {
        return array.map(valor => {
            return { llave: valor.id, valor: valor.nombre }
        })
    }


    return (
        <Formik initialValues={props.modelo}
            onSubmit={(valores, acciones) => {
                valores.generosIds = generosSeleccionados.map(valor => valor.llave)
                valores.cinesIds = cinesSeleccionados.map(valor => valor.llave)

                props.onSubmit(valores, acciones)
            }}
            validationSchema={Yup.object({
                titulo: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="titulo" label="Titulo"></FormGroupText>
                    <FormGroupCheckbox campo="enCines" label="En Cines"></FormGroupCheckbox>
                    <FormGroupText campo="trailer" label="Trailer"></FormGroupText>
                    <FormGroupFecha label="Fecha de Lanzamiento" campo="fechaLanzamiento"></FormGroupFecha>
                    <FormGroupImage campo="poster" label="Poster" imagenURL={props.modelo.posterURL} />
                    <FormGroupMark campo="resumen" label="Rseumen" />   
                     
                

                    <div className="form-group">
                        <label>Generos</label>
                        <SelectorMultiple seleccionados={generosSeleccionados}
                            noSeleccionados={generosNoSeleccionados}
                            onChange={(seleccionados, noSeleccionados) => {
                                setGenerosSeleccionados(seleccionados)
                                setGenerosNoSeleccionados(noSeleccionados)
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Cines</label>
                        <SelectorMultiple seleccionados={cinesSeleccionados}
                            noSeleccionados={cinesNoSeleccionados}
                            onChange={(seleccionados, noSeleccionados) => {
                                setCinesSeleccionados(seleccionados)
                                setCinesNoSeleccionados(noSeleccionados)
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <TypeheadActores
                            onAdd={actores => {
                                setActoresSeleccionados(actores)
                            }}
                            onRemove={actor => {
                                const actores = actoresSeleccionados.filter(x => x !== actor)
                                setActoresSeleccionados(actores)
                            }}
                            actores={actoresSeleccionados}
                            listadoUI={(actor: actorPeliculaDTO) =>
                                <>
                                    {actor.nombre} / <input placeholder="Personaje"
                                        type="text" value={actor.personaje}
                                        onChange={e => {
                                            const indice = actoresSeleccionados
                                                .findIndex(x => x.id === actor.id)

                                            const actores = [...actoresSeleccionados]
                                            actores[indice].personaje = e.currentTarget.value
                                            setActoresSeleccionados(actores)
                                        }}
                                    />
                                </>
                            }
                        />


                    </div>
                    <Button disabled={formikProps.isSubmitting} type="submit">Listo!</Button>
                    <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}
interface formularioPelisProps {
    modelo: peliculaCreacionDTO;
    onSubmit(valores: peliculaCreacionDTO, acciones: FormikHelpers<peliculaCreacionDTO>): void;
    generosSeleccionados: generoDTO[];
    generosNoSeleccionados: generoDTO[];
    cinesSeleccionados: cineDTO[];
    cinesNoSeleccionados: cineDTO[];
    actoresSeleccionados: actorPeliculaDTO[];



}