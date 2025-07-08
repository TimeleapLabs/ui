<script lang="ts">
	interface Props {
		src: string;
		alt: string;
		width?: string;
		height?: string;
		[key: string]: any;
	}

	let { src, alt, width = '100%', height = '100%', ...props }: Props = $props();
</script>

<div {...props} class="{props.class || ''} image" style="--height: {height}; --width: {width}">
	<img {src} {alt} {...props} />
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
