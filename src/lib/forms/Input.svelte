<script>
	export let label;
	export let id;
</script>

<div class="input">
	<label for={id}>{label} <slot></slot> </label>
	<input {...$$restProps} {id} />
</div>

<style>
	input {
		border-radius: 2em;
		padding: 0 2em;
		height: 64px;
		box-sizing: border-box;
		outline: none;
	}
	.input {
		display: flex;
		flex-direction: column;
		gap: 1em;
		height: auto;
	}
	label {
		display: flex;
		gap: 1em;
	}
</style>
