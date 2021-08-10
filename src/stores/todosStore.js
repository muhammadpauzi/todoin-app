import { writable } from 'svelte/store';

const getCurrentTodos = () => {
    const todos = localStorage.getItem('todos');
    console.log(todos)
    if (todos === null) {
        localStorage.setItem('todos', '[]');
        return [];
    }
    return JSON.parse(todos);
}

const saveTodo = todo => {
    let todos = getCurrentTodos();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
}

const todosStore = writable(getCurrentTodos());

export default todosStore;
export {
    getCurrentTodos,
    saveTodo
}