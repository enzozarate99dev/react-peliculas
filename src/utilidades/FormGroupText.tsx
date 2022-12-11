import { Field, ErrorMessage, useFormikContext } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";
import React from "react";
import { string } from "yup";


export default function FormGroupText(props: formGroupTextProps) {

    const {values} = useFormikContext<any>();
    return (
        <div className="form-group">
        {props.label ? <label htmlFor={props.campo}>{props.label}</label> : null} 
        <Field type={props.type} name={props.campo} className="form-control" 
        placeholder={props.placeholder} />
        <ErrorMessage name={props.campo}>{mensaje =>
            <MostrarErrorCampo mensaje={mensaje} />
        }</ErrorMessage>
    </div>
)
}

interface formGroupTextProps{
campo: string;
label?: string;
placeholder?: string;
type: 'text' | 'password';
}

FormGroupText.defaultProps = {
type: 'text'
}