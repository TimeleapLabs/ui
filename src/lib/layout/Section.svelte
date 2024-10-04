<div {...$$restProps} class="{$$props.class || ''} section">
	<slot></slot>
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
