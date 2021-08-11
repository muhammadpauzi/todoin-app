import { writable } from 'svelte/store';

const sortTodos = (todos, sortBy = '2') => {
    return todos.sort((a, b) => {
        switch (sortBy) {
            case "1": // by asc date created
                return a.dateCreated - b.dateCreated;
            case "2": // by desc data created
                return b.dateCreated - a.dateCreated;
            case "3": // by asc title
                if (a.title < b.title) {
                    return -1;
                }
                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            case "4": // by desc title
                if (a.title > b.title) {
                    return -1;
                }
                if (a.title < b.title) {
                    return 1;
                }
                return 0;
            default:
                return 0;
        }
    })
}

const getCurrentTodos = () => {
    const todos = localStorage.getItem('todos');
    if (todos === null) {
        localStorage.setItem('todos', '[]');
        return [];
    }
    return sortTodos(JSON.parse(todos));
}

const saveTodo = todo => {
    let todos = getCurrentTodos();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    return sortTodos(todos);
}

const todosStore = writable(getCurrentTodos());

export default todosStore;
export {
    getCurrentTodos,
    saveTodo
}