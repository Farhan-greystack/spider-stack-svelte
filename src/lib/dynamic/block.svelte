<script lang="ts">
	import Section from '$lib/components/common/Section';
	import Loading from '$lib/blocks/Loading';

	const blocks: Record<string, () => Promise<any>> = {
		'rich-text': () => import('$lib/blocks/RichText'),
		hero: () => import('$lib/blocks/Hero'),
		image: () => import('$lib/blocks/Image'),
		video: () => import('$lib/blocks/Video')
	};

	let { block } = $props();
	let lazyBlock = $derived(blocks[block.type]);
</script>

{#if lazyBlock}
	<Section settings={block.settings}>
		{#await lazyBlock()}
			<Loading />
		{:then { default: Block }}
			<Block {block} />
		{/await}
	</Section>
{/if}
