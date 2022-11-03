// este es un archivo de declaraciones. los .d.ts son usados para proveer informacion tipo 
//typescript sobre una api escrita en javascript

export interface pelicula{
    id: number;
    title: string;
    poster: string
}

export interface landingPageDTO{
    enCartelera?: pelicula[];
    proximosEstrenos?: pelicula[]
}