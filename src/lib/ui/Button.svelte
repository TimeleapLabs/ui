<script lang="ts">
	export let href: string | undefined = undefined;
</script>

{#if href}
	<a {...$$restProps} class="{$$props.class || ''} button" {href} on:click>
		<slot></slot>
	</a>
{:else}
	<button {...$$restProps} class="{$$props.class || ''} button" on:click>
		<slot></slot>
	</button>
{/if}

<style>
	.button {
		border-radius: 2em;
		padding: 2em;
		height: 2em;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: none;
		cursor: pointer;
	}

	.button:hover {
		opacity: 0.9;
	}

	.button :global(svg) {
		margin-right: 0.5em;
	}

	.button :global(img) {
		vertical-align: middle;
	}
</style>
