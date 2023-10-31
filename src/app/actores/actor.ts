export interface actorDTO{
    nombre:string,
    fechaNacimiento:Date,
    foto:string, 
    biografia:string
}

export interface actorCreacionDTO{
    nombre:string,
    fechaNacimiento:Date,
    foto:File,
    biografia:string
}