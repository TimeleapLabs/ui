<script lang="ts">
	interface Props {
		label: any;
		id: any;
		value?: string;
		containerClass?: string;
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		label,
		id,
		value = $bindable(''),
		containerClass = '',
		children,
		...rest
	}: Props = $props();
</script>

<div class="input {containerClass}">
	<label for={id}>{label} {@render children?.()} </label>
	<input {...rest} {id} bind:value />
</div>

<style>
	input {
		border-radius: var(--input-border-radius, var(--border-radius));
		padding: 0.75em 1em;
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
