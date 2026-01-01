<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import clsx from 'clsx';
	import { theme } from '$lib/store/theme.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class={clsx(theme.current, 'min-h-screen bg-background text-foreground')}>
	{@render children()}
</div>
