<script>
    import Button from "../shared/Button.svelte";
    import Input from "../shared/Input.svelte";
    import todosStore, {
        deleteTodo,
        editTodo,
        getTodoById,
        setIsCompleteTodo,
    } from "../stores/todosStore";
    export let todo;

    const handleDelete = (id) => {
        $todosStore = deleteTodo(id);
    };

    const handleIsComplete = (id) => {
        $todosStore = setIsCompleteTodo(id);
    };

    const handleEditTodo = (id, value) => {
        if (value.trim() === "") {
            return alert("Please enter at least 1 character!");
        }
        const todoById = getTodoById(id);
        todoById.title = value;
        $todosStore = editTodo(todoById);
    };
</script>

<div
    class="todo py-3 px-2 shadow mb-1 flex ai-c"
    class:is-complete={todo.isComplete}
>
    <div class="pr-2">
        <input
            type="checkbox"
            on:change={() => handleIsComplete(todo.id)}
            checked={todo.isComplete}
        />
    </div>
    <div class="flex-1 pr-1">
        <h2 class="mb-1">
            <Input
                value={todo.title}
                className={todo.isComplete
                    ? "todo-input is-complete"
                    : "todo-input"}
                on:input={(e) => handleEditTodo(todo.id, e.target.value)}
            />
        </h2>
        <span class="text-gray"
            >{new Date(todo.dateCreated).toLocaleString()}</span
        >
    </div>
    <div>
        <Button type="danger" size="sm" on:click={() => handleDelete(todo.id)}
            >Delete</Button
        >
    </div>
</div>

<style>
    .todo {
        width: 100%;
        background-color: var(--white);
        transition-property: background-image, color;
        transition-duration: 0.3s;
    }

    .todo.is-complete {
        background-image: linear-gradient(var(--success), var(--success-2));
    }

    .todo.is-complete span {
        color: var(--white) !important;
    }

    .todo h2 {
        font-size: 1.1rem;
        font-weight: var(--font-semibold);
    }

    .todo span {
        font-weight: var(--font-medium);
        font-size: 0.8rem;
    }
</style>
