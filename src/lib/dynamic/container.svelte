<script lang="ts">
	import Block from './block.svelte';
	const blocks = [
		{
			type: 'hero',
			content: 'This is a hero block',
			settings: {
				theme: 'light'
			}
		},
		{
			type: 'rich-text',
			content: 'This is a hero block',
			settings: {
				theme: 'dark'
			}
		},
		{
			type: 'image',
			content: 'This is a hero block',
			settings: {
				theme: 'light'
			}
		},
		{
			type: 'video',
			content: 'This is a hero block',
			settings: {
				theme: 'light'
			}
		}
	];
</script>

<div class="flex flex-col">
	{#each blocks as block}
		<Block {block} />
	{/each}
</div>
