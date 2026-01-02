<script lang="ts">
	import Section from '$lib/components/common/Section';
	import Loading from '$lib/blocks/Loading';
	import blocks from './blocks';

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
