<script>
	import Container from '$lib/layout/Container.svelte';
	import Grid from '$lib/layout/Grid.svelte';

	import Image from '$lib/ui/Image.svelte';
	import Button from '$lib/ui/Button.svelte';
	import Navbar from '$lib/ui/Navbar.svelte';
	import Card from '$lib/ui/Card.svelte';

	import Input from '$lib/forms/Input.svelte';
</script>

<Container>
	<Navbar class="bg-gray-800 text-white">
		<Button class="bg-cyan-600">Home</Button>
		<Button class="hover:bg-slate-700">About</Button>
		<Button class="hover:bg-slate-700">Contact</Button>
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
	<Grid extraLargeScreenColumns={5} largeScreenColumns={5}>
		<Image src="/images/rolle.jpg" alt="Lake Geneva" height="640px" class="col-span-2" />
		<Card class="text-white flex flex-col bg-indigo-950 text-light font-light col-span-3">
			<h2 style="font-size: 2em; font-weight: 400">Timeleap.Swiss</h2>
			<p class="mt-8">
				Founded in December 2021, Kenshi is a pioneering blockchain technology company headquartered
				in the heart of Switzerland, with a commitment to innovation and excellence.
			</p>
			<p class="flex-1 mt-4">
				As of April 2024, Kenshi has rebranded and registered as Timeleap SA, a company dedicated to
				providing cutting-edge blockchain solutions for businesses and enterprises.
			</p>
			<div class="button">
				<Button class="bg-green-600">Learn More</Button>
			</div>
		</Card>
	</Grid>
	<Card class="bg-gray-800 text-white flex flex-col gap-8">
		<h3 style="font-size: 1.3em; margin: 0">Contact Us</h3>
		<Grid extraLargeScreenColumns={2} largeScreenColumns={2}>
			<Input
				type="text"
				label="Name"
				id="name"
				class="bg-cyan-50 text-black"
				placeholder="John Doe"
			>
				<span class="text-gray-400"> Please enter your full name. </span>
			</Input>
			<Input
				type="email"
				label="Email"
				id="email"
				class="bg-cyan-50 text-black"
				placeholder="john@doe.com"
			>
				<span class="text-gray-400"> Please enter a valid email address. </span>
			</Input>
		</Grid>
		<Input label="Message" class="bg-cyan-50 text-black" id="message" placeholder="Hello there!" />
		<Button class="bg-green-600 self-start">Submit</Button>
	</Card>
</Container>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.950);
	}
</style>
