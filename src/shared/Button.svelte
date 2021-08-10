<script>
    export let type = "orange";
</script>

<button class="btn btn-{type}">
    <slot />
</button>

<style>
    /* buttons */
    .btn {
        padding: 0.8rem 2rem;
        font-size: 1rem;
        cursor: pointer;
        outline: none;
        border: none;
        font-weight: var(--font-medium);
        transition-property: background-color;
        transition-duration: 0.3s;
        border-radius: 4px;
        margin-bottom: 0.5rem;
    }

    .btn-orange {
        background-color: var(--orange);
        color: var(--white);
    }

    .btn-orange:hover {
        background-color: var(--orange-2);
    }
</style>
