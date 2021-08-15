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

const getCurrentTodos = (keyword) => {
    let todos = localStorage.getItem('todos');
    if (todos === null) {
        localStorage.setItem('todos', '[]');
        return [];
    }
    todos = JSON.parse(todos);
    if (keyword) {
        todos = todos.filter(todo => todo.title.includes(keyword) && todo);
    }
    return sortTodos(todos);
}

const saveTodo = todo => {
    let todos = getCurrentTodos();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    return sortTodos(todos);
}

const deleteTodo = id => {
    const todos = getCurrentTodos().filter(todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(todos));
    return sortTodos(todos);
}

const setIsCompleteTodo = id => {
    const todos = getCurrentTodos().map(todo => {
        if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
        }
        return todo
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    return sortTodos(todos);
}

const todosStore = writable(getCurrentTodos());

export default todosStore;
export {
    getCurrentTodos,
    saveTodo,
    deleteTodo,
    setIsCompleteTodo
}