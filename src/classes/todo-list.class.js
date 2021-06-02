// agrupa todas las listas de todo

export class TodoList {
    
    constructor(){
        
        this.todos = []; //aqui se almacenaran todos los to do en la aplicacion.

    }
    //metodos
    nuevoTodo( todo ) {
        this.todos.push( todo );

    }

    eliminarTodo(id) {

    }

    marcarCompletado(id){

    }

    eliminarCompletados(){
        
    }

}