<script>
	import { email, password } from '/src/routes/api/data';
	import { getAuthToken } from '/src/routes/api/auth';
	import { getEmployees } from '/src/routes/api/employees';
	// import welcome from '$lib/images/svelte-welcome.webp';

	let employeeCount = 50;

	let authToken = '';

	async function handleLogin() {
    authToken = await getAuthToken(email, password);
		console.log('typef authToken: ', typeof authToken);
  }

  async function createEmployees() {
    const res = await getEmployees(authToken);
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
		<button on:click={handleLogin}>get Auth Token</button>
		<h1>Employees</h1>
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
