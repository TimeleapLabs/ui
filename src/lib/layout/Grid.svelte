<script>
	export let extraLargeScreenColumns = 4;
	export let largeScreenColumns = 3;
	export let mediumScreenColumns = 2;
	export let smallScreenColumns = 1;
</script>

<div
	{...$$restProps}
	class="{$$props.class || ''} grid"
	style="--extra-large-cols: {extraLargeScreenColumns}; --large-cols: {largeScreenColumns}; --medium-cols: {mediumScreenColumns}; --small-cols: {smallScreenColumns}"
>
	<slot></slot>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: 2em;
		grid-auto-rows: 1fr;
		--columns: var(--extra-large-cols);
	}

	@media (max-width: 1440px) {
		.grid {
			--columns: var(--large-cols);
		}
	}

	@media (max-width: 960px) {
		.grid {
			--columns: var(--medium-cols);
		}
	}

	@media (max-width: 640px) {
		.grid {
			--columns: var(--small-cols);
		}
	}
</style>
