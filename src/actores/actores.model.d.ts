export interface actorCreacionDTO{
    nombre: string;
    fechaNacimiento?: Date;
    foto?: File;
    fotoURL?: string;
}

//El patrón DTO tiene como finalidad de crear un objeto plano (POJO) con una serie de atributos que puedan ser enviados o recuperados del servidor en una sola invocación, de tal forma que un DTO puede contener información de múltiples fuentes o tablas y concentrarlas en una única clase simple.