import { urlGeneros } from "../utilidades/endpoints";
import IndiceEntidad from "../utilidades/IndiceEntidad";
import { generoDTO } from "./generos.model";

export default function GenerosIndice() {
    return (
        <>
            <IndiceEntidad<generoDTO>
                url={urlGeneros} urlCrear="generos/crear" titulo="Géneros"
                nombreEntidad="Género"
            >
                {(generos, botones) => <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generos?.map(genero =>
                            <tr key={genero.id}>
                                <td>
                                    {botones(`generos/editar/${genero.id}`, genero.id)}
                                </td>
                                <td>
                                    {genero.nombre}
                                </td>
                            </tr>)}
                    </tbody>
                </>}

            </IndiceEntidad></>
    )
}