<script lang="ts">
	export let href: string | undefined = undefined;
	export let animate = false;
</script>

{#if href}
	<a {...$$restProps} class="{$$props.class || ''} button" class:animate {href} on:click>
		<slot></slot>
	</a>
{:else}
	<button {...$$restProps} class="{$$props.class || ''} button" class:animate on:click>
		<slot></slot>
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
