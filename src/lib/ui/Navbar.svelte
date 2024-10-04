<div {...$$restProps} class="{$$props.class || ''} navbar">
	<slot></slot>
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
