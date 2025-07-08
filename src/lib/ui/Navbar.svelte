<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	let { ...props }: Props = $props();
</script>

<div {...props} class="{props.class || ''} navbar">
	{@render props.children?.()}
</div>

<style>
	.navbar {
		border-radius: var(--border-radius);
		height: auto;
		display: flex;
		align-items: center;
		gap: 1em;
	}
</style>
