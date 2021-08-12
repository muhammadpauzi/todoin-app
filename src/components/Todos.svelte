<script>
    import Todo from "./Todo.svelte";
    import todosStore from "../stores/todosStore";
</script>

{#if $todosStore.length === 0}
    <p class="text-red text-center py-3 fw-medium">Todos not added yet.</p>
{:else}
    {#each $todosStore as todo (todo.id)}
        <Todo data={todo} />
    {/each}
{/if}
