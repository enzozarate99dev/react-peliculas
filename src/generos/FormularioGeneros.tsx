import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utilidades/Button";
import FormGroupText from "../utilidades/FormGroupText";
//import * as Yup from 'yup'
import { generoCreacionDTO } from "./generos.model";

export default function FormularioGeneros(props: formularioGenerosProps){
    return (
        <> <Formik initialValues={props.modelo}
        
            onSubmit={props.onSubmit}

            // validationSchema={Yup.object({
            //     nombre: Yup.string().required('Este campo es obligatorio').primeraLetraMayuscula()
            // })}
        >
            {(formikProps) => (
                <Form >
                    <FormGroupText campo="nombre" label="nombre" placeholder="Escriba el Genero" />
                    <Button type='submit' disabled={formikProps.isSubmitting}>Crear</Button>
                    <Link to='/generos' className="btn btn-secondary">Cancelar</Link>
                </Form>
            )}

        </Formik>
        </>
    )
}
interface formularioGenerosProps{
    modelo: generoCreacionDTO;
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO> ): void;
}