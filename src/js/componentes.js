import { Todo } from "../classes";
import { todoList } from "../index"

//referencias en el html
const divTodoList = document.querySelector( '.todo-list');
const txtInput = document.querySelector('.new-todo');





//Creando el componente en el indexhtml, creara cada todo que quieras
 export const crearTodoHtml= (Todo) => {
    //ya que cada todo debe de ser creado en el html, debes de reescribir el codigo html que se utiliza para crearlo por eso copiaste del index html, el pedazo de codigo necesario para crear un todo

    const htmlTodo = `
    <li class="${(Todo.completado) ? 'completed' : ''}" data-id="${Todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(Todo.completado) ? 'checked' : ''}>
            <label>${Todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

 }


 //Eventos en html

 //Para agregar una nueva tarea a la lista
 txtInput.addEventListener('keyup', (event)=> {
    //cuando presionen entre (code 13) y si la persona no escribe nada, lo va a ignorar.
    if( event.keyCode === 13 && txtInput.value.length > 0){
        //Manda lo que la presona escribio
        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo( nuevoTodo )


        crearTodoHtml( nuevoTodo );
        txtInput.value = '';
    }


 })