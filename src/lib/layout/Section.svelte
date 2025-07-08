<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let { ...props }: Props = $props();
</script>

<div {...props} class="{props.class || ''} section">
	{@render props.children?.()}
</div>

<style>
	.section {
		width: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 4em;
		box-sizing: border-box;
	}
</style>
