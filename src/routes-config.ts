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

const rutas = [
    {path: '/' , componente: LandingPage, exact: true},

    {path: '/generos', componente: GenerosIndice, exact: true},
    {path: '/generos/crear', componente: CrearGenero},
    {path: '/generos/editar/:id(\\d+)', componente: EditarGenero},

    {path: '/actores', componente: IndiceActores, exact: true},
    {path: '/actores/crear', componente: CrearActores},
    {path: '/actores/editar/:id(\\d+)', componente: EditarActores},

    {path: '/cines', componente: IndiceCines, exact: true},
    {path: '/cines/crear', componente: CrearCine},
    {path: '/cines/editar/:id(\\d+)', componente: EditarCine},

    {path: '/pelicula/:id(\\d+)', componente: DetallePelicula},
    {path: '/peliculas/filtrar', componente: FiltroPeliculas},
    {path: '/peliculas/crear', componente: CrearPeliculas},
    {path: '/peliculas/editar/:id(\\d+)', componente: EditarPeliculas},

    {path: '*', componente: Redireccionar} //siempre al final porque atrapa a todas las rutas
]
export default rutas;