// este es un archivo de declaraciones. los .d.ts son usados para proveer informacion tipo 
//typescript sobre una api escrita en javascript

// import { generoDTO } from "../generos/generos.model";
// import { cineDTO } from "../cines/cines.model";



export interface peliculaDTO{
    id: number;
    titulo: string;
    poster: string;
    enCines: boolean;
    resumen?: string;
    fechaLanzamiento: Date;
    trailer: string;
    cines: cineDTO[];
    generos: generoDTO[];
    actores: actorPeliculaDTO[];
    votoUsuario?: number;
    promedioVoto?: number;
}

export interface landingPageDTO{
    enCines?: peliculaDTO[];
    proximosEstrenos?: peliculaDTO[]
}

export interface peliculaCreacionDTO{
    titulo: string;
    enCines: boolean;
    resumen?: string;
    poster?: File;
    posterURL?: string;
    fechaLanzamiento?: Date;
    trailer: string;
    generosIds?: number[];
    cinesIds?: number[];
    actores?: actorPeliculaDTO[];


}
export interface peliculasPostGetDTO{
    generos: generoDTO[];
    cines: cineDTO[];
}
export interface peliculasPutGetDTO{
    pelicula: peliculaDTO;
    generosSeleccionados: generoDTO[];
    generosNoSeleccionados: generoDTO[];
    cinesSeleccionados: cineDTO[];
    cinesNoSeleccionados: cineDTO[];
    actores: actorPeliculaDTO[];
}