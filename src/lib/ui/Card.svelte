<script>
	export let href = '';
</script>

{#if href}
	<a {href} {...$$restProps} class="{$$props.class || ''} card">
		<slot></slot>
	</a>
{:else}
	<div {...$$restProps} class="{$$props.class || ''} card">
		<slot></slot>
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
