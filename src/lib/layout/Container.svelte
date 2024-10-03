<div class="container" {...$$restProps}>
	<slot></slot>
</div>

<style>
	.container {
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: 4em 0;
		display: flex;
		flex-direction: column;
		gap: 4em;
	}
</style>
