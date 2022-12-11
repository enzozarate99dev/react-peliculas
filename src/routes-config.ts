import CrearActores from "./actores/crearActores";
import EditarActores from "./actores/editarActores";
import IndiceActores from "./actores/indiceActores";
import CrearCine from "./cines/crearCine";
import EditarCine from "./cines/editarCine";
import IndiceCines from "./cines/indiceCines";
import CrearGenero from "./generos/crearGenero";
import EditarGenero from "./generos/editarGenero";
import GenerosIndice from "./generos/generosIndice";
import CrearPeliculas from "./peliculas/crearPeliculas";
import EditarPeliculas from "./peliculas/editarPeliculas";
import FiltroPeliculas from "./peliculas/filtroPeliculas";
import DetallePelicula from "./peliculas/DetallePelicula";
import LandingPage from "./peliculas/landing";
import Redireccionar from "./utilidades/Redireccionar";
import Registro from "./auth/Registro";
import Login from "./auth/Login";


const rutas = [
    {path: '/generos', componente: GenerosIndice, exact: true, esAdmin: true},
    {path: '/generos/crear', componente: CrearGenero, esAdmin: true},
    {path: '/generos/editar/:id(\\d+)', componente: EditarGenero, esAdmin: true},

    {path: '/actores', componente: IndiceActores, exact: true},
    {path: '/actores/crear', componente: CrearActores, esAdmin: true},
    {path: '/actores/editar/:id(\\d+)', componente: EditarActores, esAdmin: true},

    {path: '/cines', componente: IndiceCines, exact: true, esAdmin: true},
    {path: '/cines/crear', componente: CrearCine, esAdmin: true},
    {path: '/cines/editar/:id(\\d+)', componente: EditarCine, esAdmin: true},

    {path: '/pelicula/:id(\\d+)', componente: DetallePelicula},
    {path: '/peliculas/filtrar', componente: FiltroPeliculas},
    {path: '/peliculas/crear', componente: CrearPeliculas, esAdmin: true},
    {path: '/peliculas/editar/:id(\\d+)', componente: EditarPeliculas, esAdmin: true},

    {path: '/registro', componente: Registro},
    {path: '/login', componente: Login},


    {path: '/' , componente: LandingPage, exact: true},
    {path: '*', componente: Redireccionar} //siempre al final porque atrapa a todas las rutas
]
export default rutas;