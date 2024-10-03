<div class="container" {...$$restProps}>
	<slot></slot>
</div>

<style>
	.container {
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: 2em;
		display: flex;
		flex-direction: column;
		gap: 2em;
	}
</style>
