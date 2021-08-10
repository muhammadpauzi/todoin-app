<script>
    export let placeholder = "";
    export let required = true;
    export let value = "";
</script>

<input type="text" {placeholder} required bind:value />

<style>
    input {
        width: 100%;
        padding: 0.9rem;
        margin-bottom: 0.5rem;
        border-radius: var(--border-radius);
        border: 1px solid var(--gray-3);
        font-size: 1rem;
        color: var(--gray-5);
        font-weight: var(--font-medium);
        outline: none;
        transition-property: color border-color;
        transition-duration: 0.3s;
    }

    input:focus {
        border-color: var(--orange);
        color: var(--black);
    }
</style>
