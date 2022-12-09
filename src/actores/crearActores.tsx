import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlActores } from "../utilidades/endpoints";
import { convertirActoraFormData } from "../utilidades/FormDataUtils";
import MostrarErrors from "../utilidades/MostrarErrores";
import { actorCreacionDTO } from "./actores.model";
import FormularioActores from "./FormularioActores";

export default function CrearActores() {

    const history = useHistory()
    const [errores, setErrores] = useState<string[]>([])

    async function crear(actor: actorCreacionDTO){
        try{
            const formData = convertirActoraFormData(actor);
            await axios({
                method: 'post',
                url: urlActores,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'}
            });
            history.push('/actores')
        }
        catch(error){
            setErrores(error.response.data)
        }
    }
    return (
        <>
            <h3>Crear Actor</h3>
            <MostrarErrors errores={errores} />
            <FormularioActores modelo={{ nombre: '', fechaNacimiento: undefined }}
                onSubmit={async valores=> await crear(valores)}
            />
        </>
    )
}