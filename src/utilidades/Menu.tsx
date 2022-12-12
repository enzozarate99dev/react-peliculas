import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AutenticacionContext from "../auth/AutenticacionContext";
import Autorizado from "../auth/Autorizado";
import { logout, obtenerClaims } from "../auth/manejadorJWT";
import Button from "./Button";

export default function Menu() {
    const claseActiva = 'active'
    const { actualizar, claims} = useContext(AutenticacionContext);

    function obtenerNombreUsuario(): string {
        return claims.filter(x => x.nombre === 'email')[0]?.valor;
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/" activeClassName={claseActiva}>React Pelis</NavLink>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/peliculas/filtrar" activeClassName={claseActiva}>Filtrar Peliculas</NavLink>
                        </li>
                        <Autorizado role="admin"
                            autorizado={
                                <>

                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/generos" activeClassName={claseActiva}>Generos</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/actores" activeClassName={claseActiva}>Actores</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/cines" activeClassName={claseActiva}>Cines</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/peliculas/crear" activeClassName={claseActiva}>Crear Peliculas</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/peliculas/editar" activeClassName={claseActiva}>Editar Peliculas</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/usuarios" activeClassName={claseActiva}>Usuarios</NavLink>
                                    </li>
                                </>
                            }
                        />
                    </ul>

                    <div className="d-flex">
                        <Autorizado
                            autorizado={<>
                                <span className="nav-link">Hola, {obtenerNombreUsuario()} </span>
                                <Button
                                    onClick={() => {
                                        logout();
                                        actualizar([])
                                    }}
                                    className="nav-link btn btn-link"
                                >
                                    LogOut
                                </Button></>}
                            noAutorizado={<>
                                <Link to="/Registro" className="nav-link btn btn-link">Registro</Link>
                                <Link to="/Login" className="nav-link btn btn-link">Login</Link>

                            </>}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}