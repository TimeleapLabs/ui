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

<svelte:head>
	<title>Timeleap | Distributed App Engine</title>
</svelte:head>

<Section class="w-full max-w-[1200px] mx-auto pt-12 !gap-16 px-4 xl:px-0">
	<Navbar class="bg-zinc-900 text-white">
		<Button class="bg-cyan-900" href="/">Home</Button>
		<Button class="hover:bg-zinc-800 !hidden md:!inline-flex" href="/menu/products">
			<Icon icon="carbon:carbon" /> Products
		</Button>
		<Button class="hover:bg-zinc-800 !hidden md:!inline-flex">
			<Icon icon="carbon:email" /> Contact
		</Button>
		<div class="flex-1"></div>
		<Button
			class="bg-green-400 text-black !px-6 hover:bg-green-300 transition-colors md:!hidden"
			href="/menu"
		>
			<Icon icon="carbon:menu" width={24} />
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
			<div class="mt-16">
				<Button class="bg-green-400 text-black hover:bg-green-300 font-normal" animate>
					Learn More<Icon icon="carbon:arrow-right" />
				</Button>
			</div>
		</Card>
		<Image
			src="/images/hero.jpg"
			alt="Distributed Computation"
			height="min(640px, 100vw)"
			class="contrast-[1.05]"
		/>
	</Grid>

	<h2 class="white-text text-white font-serif text-5xl">Discover.</h2>
	<Grid extraLargeScreenColumns={3} largeScreenColumns={2}>
		<Card class="!p-0 flex bg-violet-100">
			<div class="px-8 flex-1 content-center">
				<h3 class="font-serif text-2xl">Unchained</h3>
				<div class="text-gray-800">Distributed App Engine</div>
			</div>
			<Image src="/images/pattern1.svg" alt="Unchained" width="128px" height="128px"></Image>
		</Card>
		<Card class="!p-0 flex bg-red-100">
			<div class="px-8 flex-1 content-center">
				<h3 class="font-serif text-2xl">GhostFS</h3>
				<div class="text-gray-800">Remote File Storage</div>
			</div>
			<Image src="/images/pattern2.png" alt="Unchained" width="128px" height="128px"></Image>
		</Card>
		<Card class="!p-0 flex bg-green-100">
			<div class="px-8 flex-1 content-center">
				<h3 class="font-serif text-2xl">Cascade</h3>
				<div class="text-gray-800">Blockchain as a Service</div>
			</div>
			<Image src="/images/pattern3.svg" alt="Unchained" width="128px" height="128px"></Image>
		</Card>
	</Grid>

	<Grid
		extraLargeScreenColumns={1}
		largeScreenColumns={1}
		mediumScreenColumns={1}
		smallScreenColumns={1}
		class="mt-8 !auto-rows-auto"
	>
		<Image src="/images/bangkok.jpg" alt="Bangkok DevCon" height="640px" />
		<Card class="text-white flex flex-col mt-4">
			<h2 class="white-text text-white font-serif text-5xl">Devcon 2024: Bangkok, Thailand.</h2>
			<p class="mt-12 text-lg font-light flex-1">
				Join us at Devcon 2024 in Bangkok, Thailand, where we will be hosting a series of workshops
				and talks on the future of blockchain technology.
			</p>
			<div class="button mt-24">
				<Button class="bg-green-400 text-black hover:bg-green-300 font-normal" animate>
					Book a Ticket<Icon icon="carbon:arrow-right" />
				</Button>
			</div>
		</Card>
	</Grid>
</Section>

<Section class="w-full max-w-[1200px] mx-auto pt-24 !gap-16 pb-24 px-4 xl:px-0">
	<Grid extraLargeScreenColumns={5} largeScreenColumns={5} class="mt-8">
		<Image
			src="/images/matterhorn.jpg"
			alt="Mattherhorn"
			height="640px"
			class="col-span-1 md:col-span-2"
		/>
		<Card
			class="text-white flex flex-col col-span-1 md:col-span-3 bg-gradient-to-tr from-zinc-950 to-zinc-900 border border-zinc-800"
		>
			<h2 class="white-text text-white font-serif text-4xl md:text-5xl">
				Headquartered in the heart of Switzerland.
			</h2>
			<p class="mt-12 text-lg font-light">
				Founded in December 2021, Kenshi is a pioneering blockchain technology company headquartered
				in the heart of Switzerland, with a commitment to innovation and excellence.
			</p>
			<p class="flex-1 mt-6 text-lg font-light">
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
	<h2 class="white-text text-white font-serif text-5xl mt-16">Contact Us.</h2>
	<Card class="bg-zinc-900 text-white flex flex-col gap-8">
		<Grid extraLargeScreenColumns={2} largeScreenColumns={2}>
			<Input
				type="text"
				label="Name"
				id="name"
				class="bg-zinc-800 focus:bg-zinc-700 transition-colors"
				placeholder="John Doe"
			>
				<span class="text-gray-400 font-light"> Please enter your full name. </span>
			</Input>
			<Input
				type="email"
				label="Email"
				id="email"
				class="bg-zinc-800 focus:bg-zinc-700 transition-colors"
				placeholder="john@doe.com"
			>
				<span class="text-gray-400 font-light"> Please enter a valid email address. </span>
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

<Section class="max-w-[1200px] mx-auto px-4 xl:px-0">
	<Grid
		extraLargeScreenColumns={4}
		largeScreenColumns={4}
		mediumScreenColumns={3}
		smallScreenColumns={1}
		class="text-white pt-4 md:pb-16"
	>
		<div class="md:pb-48">
			<h3 class="font-serif text-xl pb-8">Timeleap SA.</h3>
			<p class="text-gray-300">Pl. de l'Industrie 2, 1180 Rolle, Switzerland</p>
			<img class="mt-8" src="/images/timeleap.svg" alt="Logo" width="160px" />
		</div>
		<div>
			<h3 class="font-serif text-xl pb-8">Social Media</h3>
			<div class="flex gap-4 flex-wrap max-w-[240px]">
				<a
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-green-400 transition-colors"
				>
					<Icon icon="carbon:logo-twitter" width="32" height="32" />
				</a>
				<a
					href="https://linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-green-400 transition-colors"
				>
					<Icon icon="carbon:logo-linkedin" width="32" height="32" />
				</a>
				<a
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-green-400 transition-colors"
				>
					<Icon icon="carbon:logo-github" width="32" height="32" />
				</a>
				<a
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-green-400 transition-colors"
				>
					<Icon icon="carbon:send-alt" width="32" height="32" />
				</a>
				<a
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-green-400 transition-colors"
				>
					<Icon icon="carbon:logo-discord" width="32" height="32" />
				</a>
				<a
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-green-400 transition-colors"
				>
					<Icon icon="carbon:chat" width="32" height="32" />
				</a>
			</div>
		</div>
		<div>
			<h3 class="font-serif text-xl pb-8">Tokenomics</h3>
			<div class="flex gap-4 flex-col">
				<a
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-green-400 transition-colors"
				>
					KNS on Uniswap <Icon icon="carbon:arrow-up-right" class="inline-block ml-2" />
				</a>
				<a
					href="opensea.io/collection/kenshi-katana"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-green-400 transition-colors"
				>
					Katana NFT on OpenSea <Icon icon="carbon:arrow-up-right" class="inline-block ml-2" />
				</a>
				<a
					href="opensea.io/collection/kenshi-katana"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-green-400 transition-colors"
				>
					Stake <Icon icon="carbon:arrow-right" class="inline-block ml-2" />
				</a>
			</div>
		</div>
		<div>
			<h3 class="font-serif text-xl pb-8">Contact</h3>
			<div class="flex gap-4 flex-col">
				<a href="mailto:experts@kenshi.io" class="hover:text-green-400 transition-colors">
					Talk to an Expert <Icon icon="carbon:arrow-up-right" class="inline-block ml-2" />
				</a>
			</div>
		</div></Grid
	>
</Section>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.950);
	}
</style>
