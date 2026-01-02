<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		src,
		poster,
		caption,
		autoplay = true,
		loop = true,
		controls = false,
		aspectRatio = 'aspect-video',
		className
	} = $props();

	let videoRef: HTMLVideoElement | null = $state(null);
	let isLoaded = $state(false);
	let isPlaying = $state(false);

	function handleLoadedData() {
		isLoaded = true;
		if (autoplay && videoRef) {
			videoRef.play().catch(() => {
				// Autoplay failed (likely due to browser restrictions)
				// We fall back to showing the pause state
				isPlaying = false;
			});
		}
	}

	function togglePlay() {
		if (!videoRef) return;
		if (videoRef.paused) {
			videoRef.play();
			isPlaying = true;
		} else {
			videoRef.pause();
			isPlaying = false;
		}
	}
</script>

{#if src}
	<figure class={cn('group w-full space-y-3', className)}>
		<div class={cn('relative w-full overflow-hidden', aspectRatio)}>
			<!-- 1. Loading Skeleton -->
			{#if !isLoaded}
				<div
					class="absolute inset-0 z-10 flex animate-pulse items-center justify-center bg-secondary/50"
				>
					<span class="sr-only">Loading video...</span>
				</div>
			{/if}

			<!-- 2. The Video Element -->
			<!-- svelte-ignore a11y_media_has_caption -->
			<video
				bind:this={videoRef}
				{src}
				{poster}
				{loop}
				muted={autoplay}
				playsinline
				{controls}
				onloadeddata={handleLoadedData}
				onplay={() => (isPlaying = true)}
				onpause={() => (isPlaying = false)}
				class={cn(
					'h-full w-full object-cover transition-opacity duration-700',
					isLoaded ? 'opacity-100' : 'opacity-0'
				)}
			>
				<track kind="captions" />
			</video>

			<!-- 3. Custom Play/Pause Overlay (Only if controls are hidden) -->
			{#if !controls && isLoaded}
				<button
					onclick={togglePlay}
					class="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20 focus:outline-none"
					aria-label={isPlaying ? 'Pause video' : 'Play video'}
				>
					<!-- Icon Wrapper -->
					<div
						class={cn(
							'flex h-16 w-16 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all duration-300',
							isPlaying
								? 'scale-90 opacity-0 group-hover:opacity-100'
								: 'scale-100 opacity-100 hover:scale-110 hover:bg-black/50'
						)}
					>
						{#if isPlaying}
							<!-- Pause Icon -->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="h-8 w-8 fill-white"
								><rect x="6" y="4" width="4" height="16"></rect><rect
									x="14"
									y="4"
									width="4"
									height="16"
								></rect></svg
							>
						{:else}
							<!-- Play Icon -->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="ml-1 h-8 w-8 fill-white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg
							>
						{/if}
					</div>
				</button>
			{/if}
		</div>

		<!-- Caption -->
		{#if caption}
			<figcaption class="text-center text-sm text-muted-foreground italic">
				{caption}
			</figcaption>
		{/if}
	</figure>
{/if}
