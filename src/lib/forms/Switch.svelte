<script>
	export let checked = false;
	export let disabled = false;
	export let color = '#ccc';
	export let label;
	export let id;
</script>

<div class="field">
	<label class="switch" for={id}>
		<input type="checkbox" {...$$restProps} {id} bind:checked {disabled} />
		<span class="slider" style="--bg-color: {color};"></span>
	</label>
	<label for={id}>{label}</label>
</div>

<style>
	.field {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.switch {
		position: relative;
		display: inline-block;
		width: 40px;
		height: 24px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		transition: 0.4s;
		border-radius: 24px;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 20px;
		width: 20px;
		left: 2px;
		bottom: 2px;
		background-color: white;
		transition: 0.4s;
		border-radius: 50%;
	}

	input:checked + .slider {
		background-color: var(--bg-color);
	}

	input:checked + .slider:before {
		transform: translateX(16px);
	}

	input:disabled + .slider {
		background-color: #e6e6e6;
		cursor: not-allowed;
	}
</style>
