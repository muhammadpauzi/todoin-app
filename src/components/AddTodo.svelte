<script>
    import Input from "../shared/Input.svelte";
    import Button from "../shared/Button.svelte";
    import todosStore, {
        getCurrentTodos,
        saveTodo,
    } from "../stores/todosStore";

    let title = "";
    const handleSubmit = () => {
        const todo = {
            id: Math.floor(Date.now() + Math.random() * 1000),
            title,
            dateCreated: Date.now(),
        };
        $todosStore = saveTodo(todo);
    };
</script>

<form type="POST" on:submit|preventDefault={handleSubmit}>
    <Input placeholder="Title of todo..." bind:value={title} />
    <Button>Add</Button>
</form>
