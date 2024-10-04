<script>
	export let src;
	export let alt;
	export let width = '100%';
	export let height = '100%';
</script>

<div
	{...$$restProps}
	class="{$$props.class || ''} image"
	style="--height: {height}; --width: {width}"
>
	<img {src} {alt} {...$$restProps} />
</div>

<style>
	.image {
		border-radius: var(--border-radius);
		overflow: hidden;
		width: var(--width);
		height: var(--height);
	}
	img {
		width: var(--width);
		height: var(--height);
		object-fit: cover;
	}
</style>
