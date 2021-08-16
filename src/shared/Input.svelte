<script>
    export let placeholder = "";
    export const required = true;
    export let value = "";
    export let className = "";
    export const autofocus = false;
</script>

<!-- svelte-ignore a11y-autofocus -->
<input
    type="text"
    {placeholder}
    required
    bind:value
    on:input
    {autofocus}
    class={className}
/>

<style>
    input {
        display: inline-block;
        width: 100%;
        padding: 0.9rem;
        margin-bottom: 0.5rem;
        border-radius: var(--border-radius);
        border: 1px solid var(--gray-3);
        background-color: var(--gray-2);
        font-size: 1rem;
        color: var(--gray-5);
        font-weight: var(--font-semibold);
        outline: none;
        transition-property: color border-color;
        transition-duration: 0.2s;
    }

    input:focus {
        border-color: var(--primary);
        color: var(--black);
        box-shadow: 0 4px 8px rgb(172, 181, 246, 0.2);
    }

    input.todo-input {
        width: fit-content;
        border-color: transparent;
        padding: 0.4rem 0.3rem;
        background-color: transparent;
    }

    input.todo-input.is-complete {
        color: var(--white);
    }

    input.todo-input:focus {
        border: 1px solid var(--primary);
    }
</style>
