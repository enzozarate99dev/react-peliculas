import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utilidades/Button";
import { cineCreacionDTO } from "../utilidades/cines.model"
import FormGroupText from "../utilidades/FormGroupText";
import Mapa from "../utilidades/Mapa";

export default function FormGroupCine(props: formGroupCine) {
    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
        >
            {(formikProps) => (
                <Form >
                    <FormGroupText campo="nombre" label="Nombre"  />
                    <div style={{marginBottom: '1rem'}}>
                       <Mapa />
                    </div>
                    <Button type='submit' disabled={formikProps.isSubmitting}>Listo!</Button>
                    <Link to='/cines' className="btn btn-secondary">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}
interface formGroupCine {
    modelo: cineCreacionDTO;
    onSubmit(valores: cineCreacionDTO, acciones: FormikHelpers<cineCreacionDTO>): void;
}