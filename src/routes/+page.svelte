<script>
	import Container from '$lib/layout/Container.svelte';
	import Grid from '$lib/layout/Grid.svelte';

	import Image from '$lib/ui/Image.svelte';
	import Button from '$lib/ui/Button.svelte';
	import Navbar from '$lib/ui/Navbar.svelte';
	import Card from '$lib/ui/Card.svelte';
</script>

<Container>
	<Navbar class="bg-gray-800 text-white">
		<Button class="bg-cyan-600">Home</Button>
		<Button class="transparent">About</Button>
		<Button class="transparent">Contact</Button>
	</Navbar>
	<Grid extraLargeScreenColumns={2} largeScreenColumns={2}>
		<Card class="text-white flex flex-col bg-indigo-950 text-light font-light">
			<h1 style="flex: 1; font-size: 4em; font-weight: 300">
				Distributed and Decentralized Computation Solutions.
			</h1>
			<div class="button">
				<Button class="bg-green-600">Learn More</Button>
			</div>
		</Card>
		<Image src="/images/robot.jpg" alt="Distributed Computation" height="640px" />
	</Grid>
	<h2 class="white-text font-light text-white" style="font-size: 3em">Discover</h2>
	<Grid extraLargeScreenColumns={3}>
		<Card class="!p-0 flex bg-fuchsia-200">
			<div class="p-8 font-light flex-1 content-center">
				<h3 style="font-size: 1.3em; margin: 0">Unchained Network</h3>
			</div>
			<Image src="/images/pattern1.svg" alt="Unchained" width="128px" height="128px"></Image>
		</Card>
		<Card class="!p-0 flex bg-indigo-200">
			<div class="p-8 font-light flex-1 content-center">
				<h3 style="font-size: 1.3em; margin: 0">Storage</h3>
			</div>
			<Image src="/images/pattern2.png" alt="Unchained" width="128px" height="128px"></Image>
		</Card>
		<Card class="!p-0 flex bg-sky-200">
			<div class="p-8 font-light flex-1 content-center">
				<h3 style="font-size: 1.3em; margin: 0">L1-as-a-Service</h3>
			</div>
			<Image src="/images/pattern3.svg" alt="Unchained" width="128px" height="128px"></Image>
		</Card>
	</Grid>
</Container>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.950);
	}
</style>
