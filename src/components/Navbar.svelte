<nav class="flex ai-c bg-white shadow">
    <div class="container flex jc-sb ai-c">
        <a href="/" class="logo">Todoin</a>

        <ul class="flex">
            <li>
                <a href="/" class="py-1 px-2">Todos</a>
            </li>
            <li>
                <a href="/" class="py-1 px-2">About</a>
            </li>
        </ul>
    </div>
</nav>

<style>
    nav {
        padding: 1.4rem 0;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: var(--font-bold);
        color: var(--orange);
    }

    ul a {
        color: var(--gray-5);
        font-weight: var(--font-medium);
        transition: 0.3s color;
    }

    ul a:hover {
        color: var(--orange);
    }
</style>
