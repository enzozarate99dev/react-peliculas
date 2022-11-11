import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

export default function FormGroupImage(props: formGroupImageProps) {

    const [imagenBase64, setImagenBase64] = useState('')
    const { values } = useFormikContext<any>()
    const [imagenURL, setImagenURL] = useState(props.imagenURL)

    const divStyle = {marginTop: '10px'}
    const imgStyle = {width: '450px'}
    const ManejarOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            const archivo = e.currentTarget.files[0]
            aBase64(archivo)
                .then((representacionBase64: string) => setImagenBase64(representacionBase64))
                .catch(error => console.error(error))

            values[props.campo] = archivo
            setImagenURL('')
        }
    }
    const aBase64 = (file: File) => { //representar el archivo en base 64
        return new Promise<string>((resolve, reject) => { //promesa q retorna un string
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result as string) //si tenemos exito
            reader.onerror = (error) => reject(error) //si hay un error
        })
    }
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <div>
                <input type="file" accept=".jpg, .jpeg, .png" onChange={ManejarOnChange}></input>
            </div>
            {imagenBase64 ?
                <div>
                    <div style={divStyle}>
                        <img style={imgStyle} src={imagenBase64} alt="imagen" />
                    </div>
                </div> : null

            }
            {imagenURL ?
                <div>
                    <div style={divStyle}>
                        <img style={imgStyle} src={imagenURL} alt="imagen" />
                    </div>
                </div> : null

            }
        </div>

    )
}
interface formGroupImageProps {
    campo: string;
    label: string;
    imagenURL: string;
}
FormGroupImage.defaultProps = {
    imagenURL: ''
}