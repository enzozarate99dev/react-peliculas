import { Field, ErrorMessage, useFormikContext } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";
import React from "react";


export default function FormGroupText(props: formGroupTextProps) {

    const {values} = useFormikContext<any>();
    return (
        <>
            <div className='form-group'>
               {props.label ?  <label htmlFor={props.campo}>{props.label}</label> : null}
                <Field name={props.campo} className='form-control' placeholder={props.placeholder} value={values[props.campo] ?? ""} />
                <ErrorMessage name={props.campo}>{mensaje =>
                    <MostrarErrorCampo mensaje={mensaje} />}
                </ErrorMessage>
            </div>
            
        </>
    )
}
interface formGroupTextProps{
    campo: string,
    label?: string,
    placeholder?: string
}