<script>
	import { email, password } from '/src/routes/api/authData';
	import { getAuthToken, clearToken } from '/src/routes/api/auth';
	import { getEmployeeData } from '/src/routes/api/employees';
	// import welcome from '$lib/images/svelte-welcome.webp';

	let employeeCount = 350;

  async function createEmployees() {
    const res = await getEmployeeData();
		console.log('res: ', res);
  }
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<!-- <source srcset={welcome} type="image/webp" /> -->
				<!-- <img src={welcome_fallback} alt="Welcome" /> -->
			</picture>
		</span>
	</h1>

	<main>
		<h1>Employees</h1>
		<button on:click={clearToken}>Clear local storage</button>
		<form on:submit={createEmployees}>
			<label for="employeeCount">Number of Employees:</label>
			<input id="employeeCount" bind:value={employeeCount} min="50" type="number" />
			<button>Create Employees</button>
		</form>
		<br />
		<!-- {#await promise}
			<p>...waiting</p>
		{:then number}
			<p>The number is {number}</p>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await} -->
	</main>
</section>

<style>
</style>
