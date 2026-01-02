<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		className,
		content = `
		<h2>Why Design Matters</h2>
		<p>
			In today's digital landscape, <strong>design is not just about aesthetics</strong>; it is about functionality and user experience. 
			When you build with precision, you create trust. A well-designed interface guides the user effortlessly 
			towards their goal, reducing friction and increasing conversion.
		</p>
		<blockquote>
			"Good design is obvious. Great design is transparent."
		</blockquote>
		<h3>Our Core Principles</h3>
		<ul>
			<li><strong>Simplicity:</strong> Removing the unnecessary to focus on the essential.</li>
			<li><strong>Speed:</strong> Performance is a feature. We optimize every byte.</li>
			<li><strong>Accessibility:</strong> The web is for everyone. We ensure no one is left behind.</li>
		</ul>
		<p>
			Whether you are a startup looking to disrupt the market or an established enterprise seeking to innovate, 
			the foundation of your digital presence determines your trajectory. 
			<a href="/contact">Let's build something together.</a>
		</p>
	`
	} = $props();
</script>

<!-- 
  prose: Base typography styles
  prose-lg: Slightly larger text (great for marketing pages)
  prose-neutral: Neutral gray scale (clean look)
  dark:prose-invert: Auto-adjusts colors for Dark Mode
  mx-auto: Centers the text block
-->
<article
	class={cn(
		'prose prose-lg prose-neutral dark:prose-invert mx-auto px-6 py-12',
		'prose-headings:font-bold prose-headings:tracking-tight',
		'prose-a:text-primary prose-a:no-underline hover:prose-a:underline',
		'prose-img:rounded-xl prose-img:shadow-lg',
		className
	)}
>
	{@html content}
</article>
