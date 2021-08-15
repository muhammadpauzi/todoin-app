<script>
	import Navbar from "./components/Navbar.svelte";
	import AddTodo from "./components/AddTodo.svelte";
	import Todos from "./components/Todos.svelte";
	import Input from "./shared/Input.svelte";
	import todosStore, { getCurrentTodos } from "./stores/todosStore";

	const handleSeachTodo = (e) => {
		$todosStore = getCurrentTodos(e.target.value);
	};
</script>

<Navbar />
<div class="container py-2 my-2">
	<AddTodo />
	<Input
		placeholder="Search..."
		on:input={handleSeachTodo}
		autofocus={true}
	/>
	<Todos />
</div>
