import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { urlCuentas } from "../utilidades/endpoints";
import MostrarErrores from "../utilidades/MostrarErrores";
import AutenticacionContext from "./AutenticacionContext";
import { credencialesUsuario, respuestaAutenticacion } from "./auth.model";
import FormularioAuth from "./FormularioAuth";


export default function Registro(){

    const {actualizar} = useContext(AutenticacionContext);
    const [errores, setErrores] = useState<string[]>([])
    const history = useHistory()

    async function  registrar(credenciales: credencialesUsuario) {

        try{
            const respuesta = await axios
                .post<respuestaAutenticacion>(`${urlCuentas}/crear`, credenciales);
                guardarTokenLocalStorage(respuesta.data)
                actualizar(obtenerClaims())
                console.log(respuesta.data)
                history.push("/")
        }
        catch(error){
            setErrores(error.response.data)
        }
    }
    
    return(
        <>
        <h3>Registro</h3>
        <MostrarErrores errores={errores} />
        <FormularioAuth modelo={{email: '', password:''}}
            onSubmit={async valores => await registrar(valores)} />
        </>
    )
}

function guardarTokenLocalStorage(data: respuestaAutenticacion) {
    throw new Error("Function not implemented.");
}


function actualizar(arg: any) {
    throw new Error("Function not implemented.");
}


function obtenerClaims(): any {
    throw new Error("Function not implemented.");
}
