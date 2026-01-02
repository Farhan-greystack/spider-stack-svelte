<script lang="ts">
	import Block from './block.svelte';
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

<div class="flex flex-col">
	{#each blocks as block}
		<Block {block} />
	{/each}
</div>
