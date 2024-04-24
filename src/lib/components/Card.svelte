<script>
	import DataTable from './DataTable.svelte';
	import ItemsCreation from './ItemsCreation.svelte';
	import { getAllEmployees, getProcessingStatus } from '/src/routes/api/employees';

	let employees = new Promise(() => {});
	let error = null;
	let isLoadingStarted = false;

	async function fetchEmployees(event) {
		isLoadingStarted = true;

		try {
			const processingStatus = await getProcessingStatus(event.detail.count);
			employees = await getAllEmployees();
			return employees;
		} catch (err) {
			error = err.message;
		} 
	}

	async function showEmployees(e) {
		employees = fetchEmployees(e);
	}
</script>

<article class="card">
	<header class="card__header">
		<ItemsCreation on:count={showEmployees} />
	</header>

	{#if isLoadingStarted}
		{#await employees}
			<p class="info">...waiting</p>
		{:then employeesList}
			<DataTable items={employeesList} />
		{:catch error}
			<p class="text--danger">{error.message}</p>
		{/await}  
	{/if}
</article>

<style>
	.card {
		color: var(--card-text-color);
		background-color: #fcfdfc;
		box-shadow: 0 0.5rem 1rem 0 #0000001a;
		border-radius: 0.75rem;
	}

	.card__header {
		padding: 1.2rem;
	}

	.text--danger {
		color: red;
	}

	.info {
		padding: 1rem 2rem;
		font-style: italic;
	}
</style>
