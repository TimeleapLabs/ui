<script>
	export let label;
	export let id;
	export let value = '';
	export let containerClass = '';
</script>

<div class="input {containerClass}">
	<label for={id}>{label} <slot></slot> </label>
	<input {...$$restProps} {id} bind:value />
</div>

<style>
	input {
		border-radius: var(--input-border-radius, var(--border-radius));
		padding: 1em 0.75em;
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
