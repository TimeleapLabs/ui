<script lang="ts">
	interface Props {
		href?: string | undefined;
		[key: string]: any;
		children?: import('svelte').Snippet;
	}

	let { href = undefined, ...props }: Props = $props();
</script>

{#if href}
	<a {href} {...props} class="{props.class || ''} card">
		{@render props.children?.()}
	</a>
{:else}
	<div {...props} class="{props.class || ''} card">
		{@render props.children?.()}
	</div>
{/if}

<style>
	.card {
		border-radius: var(--border-radius);
		padding: 2em;
	}
	a.card {
		text-decoration: none;
	}
</style>
