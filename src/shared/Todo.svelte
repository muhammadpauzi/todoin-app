<script>
    export let data = { title: "", dateCreated: "" };
</script>

<div class="todo py-3 px-2 shadow mb-1">
    <h2 class="mb-1">{data.title}</h2>
    <span class="text-gray">{new Date(data.dateCreated).toLocaleString()}</span>
</div>

<style>
    .todo {
        width: 100%;
        background-color: var(--white);
    }
</style>
