import { Field, Form, Formik } from "formik";
import { generoDTO } from "../generos/generos.model";
import Button from "../utilidades/Button";

export default function FiltroPeliculas() {

    const valorInicial: filtroPeliculasProps = {
        title: " ",
        generoId: 0,
        proximosEstrenos: false,
        enCines: false
    }

    const generos: generoDTO[] = [{ id: 1, nombre: 'Accion' }, { id: 2, nombre: 'Terror' }]
    return (
        <>
            <h3>Filtrar Pelis</h3>
            <Formik initialValues={valorInicial}
                onSubmit={values => console.log(values)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="form-inline">
                            <div className="form-group mb-2">
                                <label htmlFor="titulo" className="sr-only">Titulo</label>
                                <input type="text" id="title" className="form-control" placeholder="Escriba el titulo de la peli"
                                    {...formikProps.getFieldProps('title')}
                                />
                            </div>
                            <div className="form-group mb-2 mx-sm-3">
                                <select className="form-control"
                                    {...formikProps.getFieldProps('generoId')}
                                >
                                    <option value='0'>Seleccione un genero</option>
                                    {generos.map(genero =>
                                        <option key={genero.id} value={genero.id}>
                                            {genero.nombre}
                                        </option>)}
                                </select>
                            </div>
                            <div className="form-group mb-2 mx-sm-3">
                                <Field className="form-check-input" id="proximosEstrenos"
                                    name="proximosEstrenos" type="checkbox"></Field>
                                <label htmlFor="proximosEstrenos" className="form-check-label">Proximos Estrenos</label>

                            </div>
                            <div className="form-group mb-2 mx-sm-3">
                                <Field className="form-check-input" id="enCines"
                                    name="enCines" type="checkbox"></Field>
                                <label htmlFor="enCines" className="form-check-label">En Cines</label>

                            </div>
                            <Button 
                                className= "btn btn-primary mb-2 mx-sm-3"

                            onClick={() => formikProps.submitForm()}>
                                Filtrar
                            </Button>
                            <Button 
                                className= "btn btn-danger mb-2"

                            onClick={() => formikProps.setValues(valorInicial)}>
                                Limpiar
                            </Button>
                            
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

interface filtroPeliculasProps {
    title: string;
    generoId: number;
    proximosEstrenos: boolean;
    enCines: boolean;
}