<script>
    export let type = "primary";
</script>

<button class="btn btn-{type}">
    <slot />
</button>

<style>
    /* buttons */
    .btn {
        padding: 0.7rem 2rem;
        font-size: 1rem;
        cursor: pointer;
        outline: none;
        border: none;
        font-weight: var(--font-semibold);
        transition-property: background-color;
        transition-duration: 0.3s;
        border-radius: var(--border-radius);
        margin-bottom: 0.5rem;
    }

    .btn-primary {
        background-color: var(--primary);
        color: var(--white);
    }

    .btn-primary:hover {
        background-color: var(--primary-2);
    }
</style>
