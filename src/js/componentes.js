//referencias en el html
const divTodoList = document.querySelector( '.todo-list');





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

    return div;

 }