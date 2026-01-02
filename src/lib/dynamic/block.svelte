<script lang="ts">
	import Loading from '$lib/blocks/Loading';

	let { block } = $props();

	const LazyHero = () => import('$lib/blocks/Hero');
	const LazyRichText = () => import('$lib/blocks/RichText');
	const LazyVideo = () => import('$lib/blocks/Video');
	const LazyImage =  () => import('$lib/blocks/Image');
</script>

{#if block.type === 'hero'}
	{#await LazyHero()}
		<Loading />
	{:then { default: Hero }}
		<Hero />
	{/await}
{:else if block.type === 'rich-text'}
	{#await LazyRichText()}
		<Loading />
	{:then { default: RichText }}
		<RichText />
	{/await}
{:else if block.type === 'video'}
	{#await LazyVideo()}
		<Loading />
	{:then { default: Video }}
		<Video />
	{/await}
{:else if block.type === 'image'}
	{#await LazyImage()}
		<Loading />
	{:then { default: Image }}
		<Image />
	{/await}
{/if}
