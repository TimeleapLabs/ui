<script lang="ts">
	interface Props {
		href?: string;
		animate?: boolean;
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	let { href = undefined, animate = false, ...props }: Props = $props();
</script>

{#if href}
	<a {...props} {href} class="{props.class || ''} button" class:animate>
		{@render props.children?.()}
	</a>
{:else}
	<button {...props} class="{props.class || ''} button" class:animate>
		{@render props.children?.()}
	</button>
{/if}

<style>
	.button {
		border-radius: var(--button-border-radius, var(--border-radius));
		padding: 1.25em 0.75em;
		height: 2em;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: none;
		cursor: pointer;
		display: inline-flex;
		gap: 0.5em;
		transition: background-color 0.2s;
	}

	.button.animate:hover {
		gap: 1em;
	}

	.animate {
		transition: all 0.2s;
	}
</style>
