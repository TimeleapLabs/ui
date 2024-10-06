<script>
	import Icon from '@iconify/svelte';

	import Section from '$lib/layout/Section.svelte';
	import Grid from '$lib/layout/Grid.svelte';

	import Image from '$lib/ui/Image.svelte';
	import Button from '$lib/ui/Button.svelte';
	import Navbar from '$lib/ui/Navbar.svelte';
	import Card from '$lib/ui/Card.svelte';

	import Input from '$lib/forms/Input.svelte';
</script>

<Section class="w-full max-w-[1200px] mx-auto pt-12 !gap-16 px-4 md:px-0">
	<Navbar class="bg-zinc-900 text-white">
		<Button class="bg-cyan-900">Home</Button>
		<Button class="hover:bg-zinc-800">
			<Icon icon="carbon:carbon" /> Products
		</Button>
		<Button class="hover:bg-zinc-800 !hidden md:!inline-flex">
			<Icon icon="carbon:email" /> Contact
		</Button>
	</Navbar>
	<Grid extraLargeScreenColumns={2} largeScreenColumns={2}>
		<Card class="text-white flex flex-col bg-zinc-950 !pl-0">
			<h1 class="flex-1 font-serif text-5xl md:text-6xl font-light !leading-tight">
				Distributed and Decentralized Computation Solutions.
			</h1>
			<p class="flex-1 mt-12 text-gray-300">
				Our mission is to provide cutting-edge blockchain solutions for businesses and enterprises.
			</p>
			<div class="button">
				<Button class="bg-green-400 text-black hover:bg-green-300 font-normal" animate>
					Learn More<Icon icon="carbon:arrow-right" />
				</Button>
			</div>
		</Card>
		<Image src="/images/robot.jpg" alt="Distributed Computation" height="640px" />
	</Grid>
	<h2 class="white-text text-white font-serif text-5xl">Discover.</h2>
	<Grid extraLargeScreenColumns={3}>
		<Card class="!p-0 flex bg-violet-100">
			<div class="p-8 flex-1 content-center">
				<h3 class="font-serif text-2xl">Unchained</h3>
				<div class="text-gray-800">Distributed Computation</div>
			</div>
			<Image src="/images/pattern1.svg" alt="Unchained" width="128px" height="128px"></Image>
		</Card>
		<Card class="!p-0 flex bg-red-100">
			<div class="p-8 flex-1 content-center">
				<h3 class="font-serif text-2xl">GhostFS</h3>
				<div class="text-gray-800">Remote File Storage</div>
			</div>
			<Image src="/images/pattern2.png" alt="Unchained" width="128px" height="128px"></Image>
		</Card>
		<Card class="!p-0 flex bg-green-100">
			<div class="p-8 flex-1 content-center">
				<h3 class="font-serif text-2xl">Cascade</h3>
				<div class="text-gray-800">Blockchain as a Service</div>
			</div>
			<Image src="/images/pattern3.svg" alt="Unchained" width="128px" height="128px"></Image>
		</Card>
	</Grid>
</Section>

<Section class="w-full max-w-[1200px] mx-auto pt-24 !gap-16 pb-24 px-4 md:px-0">
	<Grid extraLargeScreenColumns={5} largeScreenColumns={5} class="mt-8">
		<Image
			src="/images/rolle.jpg"
			alt="Lake Geneva"
			height="640px"
			class="col-span-1 md:col-span-2"
		/>
		<Card
			class="text-white flex flex-col text-light font-light col-span-1 md:col-span-3 bg-gradient-to-tr from-zinc-950 to-zinc-900 border border-zinc-800"
		>
			<h2 class="font-sans text-4xl font-light leading-snug">
				Headquartered in the heart of Switzerland.
			</h2>
			<p class="mt-12 text-lg">
				Founded in December 2021, Kenshi is a pioneering blockchain technology company headquartered
				in the heart of Switzerland, with a commitment to innovation and excellence.
			</p>
			<p class="flex-1 mt-6 text-lg">
				As of April 2024, Kenshi has rebranded and registered as Timeleap SA, a company dedicated to
				providing cutting-edge blockchain solutions for businesses and enterprises.
			</p>
			<div class="button">
				<Button class="bg-green-400 text-black hover:bg-green-300 font-normal" animate>
					Learn More<Icon icon="carbon:arrow-right" />
				</Button>
			</div>
		</Card>
	</Grid>
	<Card class="bg-zinc-900 text-white flex flex-col gap-8">
		<h3 style="font-size: 1.3em; margin: 0">Contact Us</h3>
		<Grid extraLargeScreenColumns={2} largeScreenColumns={2}>
			<Input
				type="text"
				label="Name"
				id="name"
				class="bg-zinc-800 focus:bg-zinc-700 transition-colors"
				placeholder="John Doe"
			>
				<span class="text-gray-400"> Please enter your full name. </span>
			</Input>
			<Input
				type="email"
				label="Email"
				id="email"
				class="bg-zinc-800 focus:bg-zinc-700 transition-colors"
				placeholder="john@doe.com"
			>
				<span class="text-gray-400"> Please enter a valid email address. </span>
			</Input>
		</Grid>
		<Input
			label="Message"
			class="bg-zinc-800 focus:bg-zinc-700 transition-colors"
			id="message"
			placeholder="Hello there!"
		/>
		<Button class="bg-green-400 hover:bg-green-300 text-black font-normal self-start">
			Submit
		</Button>
	</Card>
</Section>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.950);
	}
</style>
