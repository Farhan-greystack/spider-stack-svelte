// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blocks: Record<string, () => Promise<any>> = {
	'rich-text': () => import('$lib/blocks/RichText'),
	hero: () => import('$lib/blocks/Hero'),
	image: () => import('$lib/blocks/Image'),
	video: () => import('$lib/blocks/Video')
};

export default blocks;