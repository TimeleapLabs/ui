<script>
	export let src;
	export let alt;
	export let width = '100%';
	export let height = '100%';
</script>

<div class="image" style="--height: {height}; --width: {width}">
	<img {src} {alt} {...$$restProps} />
</div>

<style>
	.image {
		border-radius: 2em;
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
