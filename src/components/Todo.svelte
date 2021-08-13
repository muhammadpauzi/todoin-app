<script>
    import Button from "../shared/Button.svelte";
    import todosStore, { deleteTodo } from "../stores/todosStore";
    export let todo;

    const handleDelete = (id) => {
        $todosStore = deleteTodo(id);
    };
</script>

<div class="todo py-3 px-2 shadow mb-1 flex ai-c">
    <div class="pr-2">
        <input type="checkbox" />
    </div>
    <div class="flex-1">
        <h2 class="mb-1">{todo.title}</h2>
        <span class="text-gray"
            >{new Date(todo.dateCreated).toLocaleString()}</span
        >
    </div>
    <div>
        <Button type="danger" on:click={() => handleDelete(todo.id)}
            >Delete</Button
        >
    </div>
</div>

<style>
    .todo {
        width: 100%;
        background-color: var(--white);
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
