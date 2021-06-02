export class Todo {

constructor( tarea ){

    this.tarea      = tarea;
    this.id         = new Date().getTime();
    this.completado = true;
    this.creado     = Date();
}

}