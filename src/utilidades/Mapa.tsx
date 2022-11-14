import L, { Marker } from "leaflet";
import icon from 'leaflet/dist/images/marker-icon.png'
import { MapContainer, TileLayer, useMapEvent } from "react-leaflet";
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { coordenadaDTO } from "./coordenadas.model";
import { useState } from "react";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37] //para colocar el marcador en el mapa
})

L.Marker.prototype.options.icon = DefaultIcon //no se q hace

export default function Mapa(props: mapaProps) {

    const [coordenadas, setCoordenadas] = useState<coordenadaDTO[]>([])

    return (
        <MapContainer
            center={[-31.744542141009997, -68.31429560880032]} zoom={14}
            style={{ height: props.height }}
        >
            <TileLayer attribution="Peliculas React" url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <ClickMapa setPunto={coordenadas => {
                setCoordenadas([coordenadas])
            }} />
            {/* {coordenadas.map(coordenada => <Marcador key={coordenada.lat + coordenada.lng}
                {...coordenada}
            />)} */}
        </MapContainer>
    )
}

function ClickMapa(props: clickMapaProps) {
    useMapEvent('click', e => {
        props.setPunto({ lat: e.latlng.lat, lng: e.latlng.lng })
    })
    return null;
}

interface clickMapaProps {
    setPunto(coordenadas: coordenadaDTO): void;
}

// function Marcador(props: coordenadaDTO) {

//     return (
//         <Marker position={[props.lat, props.lng]}></Marker>
//     )
// }

interface mapaProps {
    height: string;
}

Mapa.defaultProps = {
    height: '500px'
}