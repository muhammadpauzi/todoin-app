<script>
    import { fade } from "svelte/transition";
    import { flip } from "svelte/animate";
    import Todo from "./Todo.svelte";
    import todosStore from "../stores/todosStore";
</script>

{#each $todosStore as todo (todo.id)}
    <div in:fade out:fade animate:flip={{ duration: 500 }}>
        <Todo {todo} />
    </div>
{:else}
    <p class="text-danger text-center py-3 fw-medium" in:fade={{ delay: 500 }}>
        Todos not added yet.
    </p>
{/each}
