<script>
    import Input from "../shared/Input.svelte";
    import Button from "../shared/Button.svelte";
    import todosStore, { saveTodo } from "../stores/todosStore";

    let title = "";
    const handleSubmit = () => {
        if (title.trim() == "") {
            alert("Please enter at least 1 character!");
        } else {
            $todosStore = saveTodo({
                id: Math.floor(Date.now() + Math.random() * 1000),
                title,
                dateCreated: Date.now(),
            });
        }
        title = "";
    };
</script>

<form type="POST" on:submit|preventDefault={handleSubmit} class="flex">
    <Input placeholder="Title of todo..." bind:value={title} />
    <Button>Add</Button>
</form>

<style>
    form {
        column-gap: 0.2rem;
    }
</style>
