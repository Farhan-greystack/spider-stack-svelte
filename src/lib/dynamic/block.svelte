<script lang="ts">
	import Section from '$lib/components/common/Section';
	import Loading from '$lib/blocks/Loading';

	let { block } = $props();

	const blocks: Record<string, () => Promise<any>> = {
		hero: () => import('$lib/blocks/Hero'),
		'rich-text': () => import('$lib/blocks/RichText'),
		video: () => import('$lib/blocks/Video'),
		image: () => import('$lib/blocks/Image')
	};

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
