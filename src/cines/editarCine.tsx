import FormularioGeneros from "../generos/FormularioGeneros";
import { cineCreacionDTO, cineDTO } from "./cines.model";
import EditarEntidad from "../utilidades/EditarEntidad";
import { urlCines } from "../utilidades/endpoints";
import FormularioCines from "./FormularioCines";

export default function EditarCine() {
    return (
        <EditarEntidad<cineCreacionDTO, cineDTO>
        url={urlCines} urlIndice="/cines" nombreEntidad="Cines">
        {(entidad, editar) =>
            <FormularioCines modelo={entidad}
                onSubmit={async values => {
                    await editar(values)
                }}
            />}
    </EditarEntidad>
    )
}