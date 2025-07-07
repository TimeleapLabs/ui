<script lang="ts">
	interface Props {
		extraLargeScreenColumns?: Number;
		largeScreenColumns?: Number;
		mediumScreenColumns?: Number;
		smallScreenColumns?: Number;
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	let {
		extraLargeScreenColumns = 4,
		largeScreenColumns = 3,
		mediumScreenColumns = 2,
		smallScreenColumns = 1,
		...props
	}: Props = $props();
</script>

<div
	{...props}
	class="{props.class || ''} grid"
	style="--extra-large-cols: {extraLargeScreenColumns}; --large-cols: {largeScreenColumns}; --medium-cols: {mediumScreenColumns}; --small-cols: {smallScreenColumns}"
>
	{@render props.children?.()}
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
