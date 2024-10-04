<div {...$$restProps} class="{$$props.class || ''} card">
	<slot></slot>
</div>

<style>
	.card {
		border-radius: var(--border-radius);
		padding: 2em;
	}
</style>
