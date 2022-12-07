import EditarEntidad from "../utilidades/EditarEntidad";
import { urlActores } from "../utilidades/endpoints";
import { convertirActoraFormData } from "../utilidades/FormDataUtils";
import { actorCreacionDTO, actorDTO } from "./actores.model";
import FormularioActores from "./FormularioActores";


export default function EditarActores() {

    const transformar = (actor: actorDTO) => {
        return {
            nombre: actor.nombre,
            fotoURL: actor.foto,
            biografia: actor.biografia,
            fechaNacimiento: new Date(actor.fechaNacimiento)
        }
    }


    return (
        <>
            <EditarEntidad<actorCreacionDTO, actorDTO>
                url={urlActores} urlIndice="/actores" nombreEntidad="Actores"
                transformarFormData={convertirActoraFormData}
                transformar={transformar}
            >
                {(entidad, editar) =>
                    <FormularioActores
                        modelo={entidad}
                        onSubmit={async values => await editar(values)}
                    />}
            </EditarEntidad>

        </>
    )
}