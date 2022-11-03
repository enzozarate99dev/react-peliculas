import { Formik } from "formik";

export default function FiltroPeliculas() {

    const valorInicial: filtroPeliculasProps = {
        title: " ",
        generoID: 5,
        proximosEstrenos: false,
        enCines: false
    }
    return (
        <>
            <h3>Filtrar Pelis</h3>
            <Formik initialValues={valorInicial}
                    onSubmit={values => console.log(values)}
            ></Formik>
        </>
    )
}

interface filtroPeliculasProps {
    title: string;
    generoID: number;
    proximosEstrenos: boolean;
    enCines: boolean;
}