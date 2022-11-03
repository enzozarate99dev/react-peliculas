import { Field, ErrorMessage } from "formik";

export default function FormGroupText(props: formGroupProps) {
    return (
        <>
            <div className='form-group'>
               {props.label?  <label htmlFor={props.campo}>{props.label}</label> : null}
                <Field name={props.campo} className='form-control' placeholder={props.placeholder}></Field>
                <ErrorMessage name={props.campo}>
                    {mensaje => <div className="text-danger">{mensaje}</div>}
                </ErrorMessage>
            </div>
            
        </>
    )
}
interface formGroupProps{
    campo: string,
    label?: string,
    placeholder?: string
}