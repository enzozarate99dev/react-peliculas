import { NavLink } from "react-router-dom";

export default function Menu() {
    const claseActiva = 'active'
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/" activeClassName={claseActiva}>React Pelis</NavLink>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/generos" activeClassName={claseActiva}>Generos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/peliculas/filtrar" activeClassName={claseActiva}>Filtrar Peliculas</NavLink>
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

                    </ul>
                </div>
            </div>
        </nav>
    )
}