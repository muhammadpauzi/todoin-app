<script>
    import Todo from "./Todo.svelte";
    import todosStore from "../stores/todosStore";
</script>

{#if $todosStore.length === 0}
    <p class="text-danger text-center py-3 fw-medium">Todos not added yet.</p>
{:else}
    {#each $todosStore as todo (todo.id)}
        <Todo {todo} />
    {/each}
{/if}
