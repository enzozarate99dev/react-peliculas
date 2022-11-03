import { useState, useEffect } from "react"
import ListaPelis from "./listaPelis"
import { landingPageDTO } from "./pelicula.model"

export default function LandingPage() {
    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect(() => {
        const timerId = setTimeout(() => {
            setPeliculas({
                enCartelera: [
                    {
                        id: 1, title: "Batman", poster: "https://es.web.img3.acsta.net/pictures/22/01/27/16/40/2914301.jpg"
                    },
                    {
                        id: 2, title: "300", poster: "https://c8.alamy.com/compes/2jh2pb7/gerard-butler-cartel-300-2006-2jh2pb7.jpg"
                    },

                ],
                proximosEstrenos: [
                    {
                        id: 3, title: "Bastardos Sin Gloria", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJV_--_p4NMDQKWPo-SdD_mHDZB-tV7i38sKccgQir&s"
                    },
                ]
            })
        }, 500)
        return () => clearTimeout(timerId)
    })

    return (
        <>
            <h3>En Cartelera</h3>
            <ListaPelis peliculas={peliculas.enCartelera} />
            <h3>Proximos Estrenos</h3>
            <ListaPelis peliculas={peliculas.proximosEstrenos} />
        </>
    )
}