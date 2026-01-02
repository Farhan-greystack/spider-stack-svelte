<script lang="ts">
	import clsx from 'clsx';
	let { settings, children } = $props();
</script>

<section class={clsx(settings?.theme, 'bg-background text-foreground')}>
	{@render children()}
</section>
