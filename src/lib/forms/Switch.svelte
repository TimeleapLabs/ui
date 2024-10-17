<script lang="ts">
	export let checked = false;
	export let disabled = false;
	export let color = '#2196f3';
	export let label;
	export let id;

	const isTailwindClass = (color: string) => color.startsWith('bg-') || color.startsWith('text-');
	const getCssVariable = (color: string, name: string) =>
		!isTailwindClass(color) ? `${name}: ${color}` : '';
</script>

<div class="field">
	<label class="switch" for={id}>
		<input type="checkbox" {...$$restProps} {id} bind:checked {disabled} />
		<span
			class="slider {checked && isTailwindClass(color) ? `is-tailwind ${color}` : ''}"
			style={getCssVariable(color, '--bg-color')}
		></span>
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
		transition: 0.4s;
		border-radius: 24px;
	}

	.slider:not(.is-tailwind) {
		background-color: var(--off-color, #ccc);
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

	input:checked + .slider:not(.is-tailwind) {
		background-color: var(--bg-color, #2196f3);
	}

	input:checked + .slider:before {
		transform: translateX(16px);
	}

	input:disabled + .slider {
		background-color: #e6e6e6;
		cursor: not-allowed;
	}
</style>
