import { Field, useFormikContext } from "formik";
import ReactMarkdown from "react-markdown";
import  './FormGroupMark.css'

export default function FormGroupMark(props: formGroupMark){

    const {values} = useFormikContext<any>()

    return(
        <div className="form-group form-markdown">
            <div>
                <label>{props.label}</label>
                <div>
                    <Field name={props.campo} as="textarea" className="form-textarea"></Field>
                </div>
            </div>
            <div>
                <label>{props.label} (preview): </label>
                <div className="markdown-container">
                    <ReactMarkdown>{values[props.campo]}</ReactMarkdown>
                </div>
            </div>
        </div>
    ) 

}

interface formGroupMark{
    campo: string;
    label: string;
}