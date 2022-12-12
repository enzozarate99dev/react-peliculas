import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { urlCuentas } from "../utilidades/endpoints";
import MostrarErrores from "../utilidades/MostrarErrores";
import AutenticacionContext from "./AutenticacionContext";
import { credencialesUsuario, respuestaAutenticacion } from "./auth.model";
import FormularioAuth from "./FormularioAuth";
import guardarTokenLocalStorage, { obtenerClaims } from "./manejadorJWT";

export default function Login() {

    const {actualizar} = useContext(AutenticacionContext);
    const [errores, setErrores] = useState<string[]>([])
    const history = useHistory()


    async function login(credenciales: credencialesUsuario) {
        try {

        const respuesta = await 
            axios.post<respuestaAutenticacion>(`${urlCuentas}/login`, credenciales)
            guardarTokenLocalStorage(respuesta.data)
            actualizar(obtenerClaims())
            console.log(respuesta)
            history.push("/")
        }
        catch (error) {
            setErrores(error.response.data)
        }
    }

    return (
        <>
            <h3>Login</h3>
            <MostrarErrores errores={errores} />
            <FormularioAuth
                modelo={{ email: '', password: '' }}
                onSubmit={async valores => await login(valores)} />
        </>
    )
}