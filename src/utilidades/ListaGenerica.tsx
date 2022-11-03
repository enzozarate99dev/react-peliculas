import { ReactElement } from "react";
import Cargando from "./Cargando";

export default function ListaGenerica(props: listaGenericaProps){
   
    if (!props.lista){
        if(props.cargandoUI){
            return props.cargandoUI
        }
        return <Cargando />
    } else if (props.lista.length === 0){
        if (props.listaVaciaUI){
            return props.listaVaciaUI
        }
        return <>No hay elementos</>
    }
    else{
       return props.children
    }
    
}

interface listaGenericaProps{
    lista: any;
    children: ReactElement;
    cargandoUI?: ReactElement;
    listaVaciaUI?: ReactElement
}