// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Define your collection(s)
const releaseCollection = defineCollection({ 
	type: 'content',
	schema: ({image}) => z.object({
		title: z.string(),
		subtitle: z.string(),
		credits: z.array(z.string()), // Consider making this an array. Better access to separate credits without splicing
		release: z.boolean(),
		description: z.string(),
		soundcloudSrc: z.string(),
		imageSrc: image(),
		imageSrcAlt: z.string(),
		links: z.array(z.string()),
		rank: z.number()
	})
});
const characterCollection = defineCollection({ /* ... */ });
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'releases': releaseCollection,
  // 'character': characterCollection,
};