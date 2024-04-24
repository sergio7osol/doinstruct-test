<script>
	export let items = [];
</script>

<table id="cart">
	<thead>
		<tr>
			<th scope="col">Personalnummer</th>
			<th scope="col">Vorname</th>
			<th scope="col">Nachname</th>
			<th scope="col">Aktiv</th>
			<th scope="col">Erstellt</th>
		</tr>
	</thead>
	<tbody>
		{#each items as { id, firstName, lastName, active, created }}
			<tr>
				<td>{id?.split('-')[0]}</td>
				<td>{firstName}</td>
				<td>{lastName}</td>
				<td>
					{#if active}
						<span class="label label--active">Active</span>
					{:else}
						<span class="label label--inactive">Inactive</span> 
					{/if}
				</td>
				<td>{new Date(created).toDateString()}</td>
			</tr>
		{/each}
	</tbody>
	<tfoot>
		<tr>
			<td colspan="5">{items.length} geladen</td>
		</tr>
	</tfoot>
</table>

<style>
	table {
		border-collapse: collapse;
		width: 100%;
	}

	td,
	th {
		font-size: 0.875rem;
		padding: 0.6rem 1.5rem;
		border-style: solid;
		border-width: 1px 0;
		color: var(--text-color-default);
		border-color: var(--border-color-default);
	}

	th {
		color: var(--text-color-title);
		font-weight: normal;
		text-align: left;
	}

	tfoot td { 
		color: var(--text-color-default);
		font-size: 0.625rem;
		font-weight: bold;
		padding: 0.3rem 1.5rem;
	}

	:not(thead, tfoot) > tr:nth-of-type(odd) > * {
		background-color: #e0e4e0;
	}

	:not(thead, tfoot) > tr:hover > * {
		background-color: #ddf3e4 !important;
		cursor: pointer;
	}

	.label {
		font-size: 0.75rem;
		line-height: 1.3;
		font-weight: bold;
		border-radius: 0.3125rem;
		padding: 0 0.5rem;
		display: inline-block;
	}

	.label--active {
		color: #18794e;
		background-color: #b4dfc4;
	}

	.label--inactive {
		color: #6b716a;
		background-color: #e6e9e6;
	}
</style>
