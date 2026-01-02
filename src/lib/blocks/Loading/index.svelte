<script lang="ts">
	import { cn } from '$lib/utils';

	// 'hero' = Full screen / large container
	// 'media' = For ImageBlock or VideoBlock (standard aspect ratio)
	// 'text' = Multiple lines to mimic paragraphs
	let {
		variant = 'media',
		className
	}: { variant: 'hero' | 'media' | 'text'; className?: string | undefined } = $props();

	// Optional: Pass 'h-screen', 'aspect-video', etc.
</script>

{#if variant === 'hero'}
	<!-- HERO VARIANT: Big, dark, distinct loading state -->
	<div
		class={cn(
			'relative w-full animate-pulse overflow-hidden bg-muted',
			'flex items-center justify-center',
			className || 'h-dvh' // Default to full screen if no class provided
		)}
	>
		<!-- Optional: Subtle Icon/Logo in center while loading -->
		<div class="h-12 w-12 rounded-full bg-muted-foreground/20"></div>
	</div>
{:else if variant === 'text'}
	<!-- TEXT VARIANT: Multiple lines of varying widths -->
	<div class={cn('w-full space-y-4 py-4', className)}>
		<!-- Heading mimic -->
		<div class="mb-6 h-8 w-2/3 animate-pulse rounded-md bg-muted"></div>

		<!-- Paragraph mimic -->
		<div class="space-y-2">
			<div class="h-4 w-full animate-pulse rounded bg-muted/80"></div>
			<div class="h-4 w-full animate-pulse rounded bg-muted/80"></div>
			<div class="h-4 w-11/12 animate-pulse rounded bg-muted/80"></div>
			<div class="h-4 w-4/5 animate-pulse rounded bg-muted/80"></div>
		</div>
	</div>
{:else}
	<!-- MEDIA VARIANT (Default): Simple Box -->
	<div
		class={cn(
			'w-full animate-pulse rounded-xl bg-muted',
			className || 'aspect-video' // Default to video ratio
		)}
	>
		<span class="sr-only">Loading...</span>
	</div>
{/if}
