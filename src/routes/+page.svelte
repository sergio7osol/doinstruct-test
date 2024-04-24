<script>
	import { signOut } from '/src/routes/api/auth';
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>Mitarbeiter</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<main>
		<button class="button--light" on:click={signOut}>Sign out</button>
		<Card />
	</main>
</section>

<style>
		.button--light {
			padding: .5rem .375rem;
			background-color: #f8f9fa;
			cursor: pointer;
			border: 1px solid #dee2e6;
			border-radius: .375rem;
			box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15),0 1px 1px rgba(0, 0, 0, .075);
			transition: color .8s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
			margin-bottom: 1rem;
		}

		.button--light:hover {
			background-color: #d3d4d5;
		}
</style>
