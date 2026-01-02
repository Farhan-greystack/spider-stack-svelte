<script lang="ts">
	import { cn } from '$lib/utils';

	let { src, alt, caption, aspectRatio, className } = $props();

	let isLoaded = $state(false);
</script>

<figure class={cn('group w-full space-y-3', className)}>
	<!-- Image Wrapper -->
	<div class={cn('relative w-full overflow-hidden', aspectRatio)}>
		<!-- 
            Skeleton / Loading State 
            Visible only when isLoaded is false.
        -->
		{#if !isLoaded}
			<div class="absolute inset-0 animate-pulse bg-secondary/50"></div>
		{/if}

		<!-- 
            The Image 
            opacity-0 initially, opacity-100 when loaded.
            duration-700 creates the smooth fade-in.
        -->
		<img
			{src}
			{alt}
			loading="lazy"
			onload={() => (isLoaded = true)}
			class={cn(
				'h-full w-full object-cover transition-all duration-700 ease-in-out',
				isLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
			)}
		/>
	</div>

	<!-- Optional Caption -->
	{#if caption}
		<figcaption class="text-center text-sm text-muted-foreground italic">
			{caption}
		</figcaption>
	{/if}
</figure>
