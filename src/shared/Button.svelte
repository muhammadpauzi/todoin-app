<script>
    export let type = "primary";
    export let size = "";
</script>

<button class="btn btn-{type}" class:btn-sm={size == "sm"} on:click>
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
        transition-property: background-color, box-shadow;
        transition-duration: 0.3s;
        border-radius: var(--border-radius);
        margin-bottom: 0.5rem;
    }

    .btn-primary {
        background-color: var(--primary);
        color: var(--white);
        box-shadow: 0 2px 6px var(--primary-3);
    }

    .btn-primary:hover {
        background-color: var(--primary-2);
        box-shadow: none;
    }

    .btn-danger {
        background-color: var(--danger);
        color: var(--white);
        box-shadow: 0 2px 6px var(--danger-3);
    }

    .btn-danger:hover {
        background-color: var(--danger-2);
        box-shadow: none;
    }

    .btn-sm {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
    }
</style>
