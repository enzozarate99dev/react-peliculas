import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utilidades/Button";
import FormGroupCheckbox from "../utilidades/FormGroupCheckbox";
import FormGroupFecha from "../utilidades/FormGroupFecha";
import FormGroupImage from "../utilidades/FormGroupImage";
import FormGroupMark from "../utilidades/FormGroupMark";
import FormGroupText from "../utilidades/FormGroupText";
import { peliculaCreacionDTO } from "./pelicula.model";

export default function FormularioPelis(props: formularioPelisProps) {
    return (
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}>
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="titulo" label="Titulo"></FormGroupText>
                    <FormGroupCheckbox campo="En Cines" label="enCines"></FormGroupCheckbox>
                    <FormGroupText campo="trailer" label="Trailer"></FormGroupText>
                    <FormGroupFecha label="Fecha de Lanzamiento" campo="fechaLanzamiento"></FormGroupFecha>                
                    <FormGroupCheckbox campo=" " label=" "></FormGroupCheckbox>
                    <FormGroupImage campo="poster" label="Poster" imagenURL={props.modelo.posterURL}/>
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
}