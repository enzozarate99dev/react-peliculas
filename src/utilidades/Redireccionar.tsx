import { Redirect } from "react-router-dom";

export default function Redireccionar(){
    return(
        <Redirect to={{pathname: '/'}}/>
    )
}