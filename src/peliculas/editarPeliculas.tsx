import FormularioPelis from "./FormularioPelis";

export default function EditarPeliculas() {
    return (
        <>
            <h3>Editor Peliculas</h3>
            <FormularioPelis modelo={{
                title: 'The Batman', enCines: true, trailer: 'dark knight',
                fechaLanzamiento: new Date('2022-05-05T00:00:00')
            }}
                onSubmit={valores => console.log(valores)} />
        </>
    )
}