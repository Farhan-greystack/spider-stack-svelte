<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index';
	import { Button } from '$lib/components/ui/button/index';
	import { cn } from '$lib/utils'; // Standard shadcn utility

	// Controls whether the hero takes up the full viewport or a fixed height
	let { isFullScreen = true } = $props();

	// Mock Data
	const slides = [
		{
			id: 1,
			title: 'Unleash Your Potential',
			description: 'Discover the tools you need to build faster and better.',
			image:
				'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop',
			cta: 'Get Started'
		},
		{
			id: 2,
			title: 'Design with Precision',
			description: 'Every pixel matters when you are crafting the future.',
			image:
				'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop',
			cta: 'View Portfolio'
		},
		{
			id: 3,
			title: 'Scale Your Business',
			description: 'Infrastructure that grows with you, seamlessly.',
			image:
				'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop',
			cta: 'Contact Sales'
		}
	];
</script>

<div class="relative w-full">
	<Carousel.Root
		opts={{
			align: 'start',
			loop: true
		}}
		class="w-full"
	>
		<Carousel.Content class="ml-0">
			{#each slides as slide}
				<Carousel.Item class="basis-full pl-0">
					<!-- 
						Dynamic Height Logic:
						1. h-dvh: 100% of dynamic viewport height (Full Screen)
						2. h-[600px]: Fixed height (Standard Hero)
						3. transition-all: Animates the change if the variable toggles live
					-->
					<div
						class={cn(
							'relative w-full overflow-hidden transition-[height] duration-500 ease-in-out',
							isFullScreen ? 'h-dvh' : 'h-[600px]'
						)}
					>
						<!-- Background Image -->
						<img src={slide.image} alt={slide.title} class="h-full w-full object-cover" />

						<!-- Dark Gradient Overlay -->
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
						></div>

						<!-- Text Content -->
						<div
							class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white"
						>
							<h1 class="mb-4 text-4xl font-bold tracking-tight drop-shadow-md md:text-6xl">
								{slide.title}
							</h1>
							<p class="mb-8 max-w-2xl text-lg text-gray-200 drop-shadow-sm md:text-xl">
								{slide.description}
							</p>
							<div class="flex gap-4">
								<Button size="lg" variant="default" class="font-semibold">
									{slide.cta}
								</Button>
								<Button
									size="lg"
									variant="outline"
									class="border-white bg-transparent text-white hover:bg-white hover:text-black"
								>
									Learn More
								</Button>
							</div>
						</div>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>

		<!-- Navigation Controls -->
		<Carousel.Previous
			class="absolute top-1/2 left-8 -translate-y-1/2 border-white/50 bg-transparent text-white hover:border-white hover:bg-white/20"
		/>
		<Carousel.Next
			class="absolute top-1/2 right-8 -translate-y-1/2 border-white/50 bg-transparent text-white hover:border-white hover:bg-white/20"
		/>
	</Carousel.Root>
</div>
