import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlGeneros } from "../utilidades/endpoints";
import MostrarErrores from "../utilidades/MostrarErrores";
import FormularioGeneros from "./FormularioGeneros";
import { generoCreacionDTO } from "./generos.model";

export default function CrearGenero() {

    const history = useHistory()

    const [errores, setErrores] = useState<string[]>([])

    async function crear(genero: generoCreacionDTO){
        try{
            
            await axios.post(urlGeneros, genero);
            history.push('/generos');
        }
        catch (error){
            setErrores(error.response.data);
        };
        
    }
    return (
        <>
            <h3>Crear Genero</h3>
            <MostrarErrores errores={errores} />
           <FormularioGeneros modelo={{nombre: ''}} 
           onSubmit={async (valores) => { await crear(valores)
           }}/>



        </>
    )
}