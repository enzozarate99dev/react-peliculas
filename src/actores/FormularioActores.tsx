import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utilidades/Button";
import FormGroupFecha from "../utilidades/FormGroupFecha";
import FormGroupImage from "../utilidades/FormGroupImage";
import FormGroupMark from "../utilidades/FormGroupMark";
import FormGroupText from "../utilidades/FormGroupText";
import { actorCreacionDTO } from "./actores.model";

export default function FormularioActores(props: formularioActoresProps){
    return(
        <Formik
        initialValues={props.modelo}
        onSubmit={props.onSubmit}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre"></FormGroupText> 
                    <FormGroupFecha label="Fecha de Nacimiento" campo="fechaNacimiento"></FormGroupFecha>
                    <FormGroupImage campo="foto" label="foto" imagenURL = {props.modelo.fotoURL}/>
                    <FormGroupMark campo="biografia" label="Biografía"/>

                    <Button disabled={formikProps.isSubmitting} type="submit">Listo!</Button>
                    <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
                </Form>
            )}
        
        </Formik>
    )
}

interface formularioActoresProps{
    modelo: actorCreacionDTO;
    onSubmit(values: actorCreacionDTO, actions: FormikHelpers<actorCreacionDTO>): void;
}