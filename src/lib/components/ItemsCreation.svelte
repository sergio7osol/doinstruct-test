<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let count = 3;

	function provideCount() {
		dispatch('count', { count });
	}
</script>

<form class="creation" on:submit={provideCount}>
	<label class="creation__label" for="employeeCount">
		<span class="creation__label-text">Anzahl der Mitarbeiter die angelegt werden</span>
		<input id="employeeCount" class="creation__label-field" bind:value={count} min="3" type="number" />
	</label>
	<button class="creation__submit-button">Mitarbeiter anlegen</button>
  <!-- <button on:click={showEmployees}>All employees</button> -->
</form>

<style>
	* {
		color: var(--text-color-default);
	}

	.creation {
		display: flex;
		align-items: flex-end;
	}

	.creation__label {
		display: inline-flex;
		flex-direction: column;
		margin-right: .5rem;
	}

	.creation__label-text {
		font-size: 0.75rem;
		vertical-align: text-top;
		margin-bottom: .4rem;
		font-weight: bold;
	}
	
	.creation__label-field {
		font-size: 0.875rem;
		line-height: 1.5;
		padding: 0.5rem;
		border-radius: 0.3rem;
		outline: var(--border-color-form-control);
		border: 1px solid var(--border-color-form-control);
	}

	.creation__label-field:focus,
	.creation__label-field:focus-visible {
		outline: var(--border-color-form-control);
		border: 1px solid var(--border-color-form-control);
	}

	.creation__submit-button {
		background-color: var(--bg-color-primary-button);
		color: var(--text-color-primary-button);
		padding: 0 1.5rem;
		line-height: 2.8;
		border: none;
		border-radius: 1.5rem;
		font-size: 0.875rem;
		cursor: pointer;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.creation__submit-button:hover {
		transform: scale(1.03);
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
	}

	.creation__submit-button:active {
		transform: scale(0.95);
		box-shadow: none;
	}
</style>
