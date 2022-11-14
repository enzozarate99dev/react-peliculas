import { Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { generosDTO } from "../generos/generos.model";
import Button from "../utilidades/Button";
import { cineDTO } from "../utilidades/cines.model";
import FormGroupCheckbox from "../utilidades/FormGroupCheckbox";
import FormGroupFecha from "../utilidades/FormGroupFecha";
import FormGroupImage from "../utilidades/FormGroupImage";
import FormGroupText from "../utilidades/FormGroupText";
import SelectorMultiple, { selectorMultipleModel } from "../utilidades/SelectorMultiple";
import { peliculaCreacionDTO } from "./pelicula.model";

export default function FormularioPelis(props: formularioPelisProps) {
  
    const [generosSeleccionados, setGenerosSeleccionados] = useState(mapear(props.generosSeleccionados))
    const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState(mapear(props.generosNoSeleccionados))

    const [cinesSeleccionados, setCinesSeleccionados] = useState(mapear(props.cinesSeleccionados))
    const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState(mapear(props.cinesNoSeleccionados))
  
    function mapear(array: {id: number, nombre: string}[]): selectorMultipleModel[]{
    return array.map(valor => {
        return {llave: valor.id, valor: valor.nombre}
    })
   } 


    return (
        <Formik initialValues={props.modelo}
            onSubmit={(valores, acciones) => {
            valores.generosIds = generosSeleccionados.map(valor => valor.llave)
            valores.cinesIds = cinesSeleccionados.map(valor => valor.llave)

            props.onSubmit(valores, acciones)}}>
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="titulo" label="Titulo"></FormGroupText>
                    <FormGroupCheckbox campo="enCines" label="En Cines"></FormGroupCheckbox>
                    <FormGroupText campo="trailer" label="Trailer"></FormGroupText>
                    <FormGroupFecha label="Fecha de Lanzamiento" campo="fechaLanzamiento"></FormGroupFecha>                
                    <FormGroupImage campo="poster" label="Poster" imagenURL={props.modelo.posterURL}/>

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
                    <Button disabled={formikProps.isSubmitting} type="submit">Listo!</Button>
                    <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}
interface formularioPelisProps {
    modelo: peliculaCreacionDTO;
    onSubmit(values: peliculaCreacionDTO, actions: FormikHelpers<peliculaCreacionDTO>): void;
    generosSeleccionados: generosDTO[];
    generosNoSeleccionados: generosDTO[];
    cinesSeleccionados: cineDTO[];
    cinesNoSeleccionados: cineDTO[];


}