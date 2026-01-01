<script lang="ts">
	import Block from './block.svelte';
	import Section from '$lib/components/common/Section';
	const blocks = [
		{
			type: 'hero',
			content: 'This is a hero block',
			settings: {}
		},
		{
			type: 'rich-text',
			content: 'This is a hero block',
			settings: {}
		},
		{
			type: 'image',
			content: 'This is a hero block',
			settings: {}
		},
		{
			type: 'video',
			content: 'This is a hero block',
			settings: {}
		}
	];
</script>

{#each blocks as block}
	<Section settings={block.settings}>
		<Block {block} />
	</Section>
{/each}
