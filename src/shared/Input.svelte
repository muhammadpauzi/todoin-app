<script>
    export let placeholder = "";
    export const required = true;
    export let value = "";
</script>

<input type="text" {placeholder} required bind:value />

<style>
    input {
        display: inline-block;
        width: 100%;
        padding: 0.9rem;
        margin-bottom: 0.5rem;
        border-radius: var(--border-radius);
        border: 1px solid var(--gray-3);
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
    }
</style>
