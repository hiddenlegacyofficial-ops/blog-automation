import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: string }) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Syntexic — Next-Gen Tech Hub',
    description: 'Deep-dive articles, practical developer tools, and real-world AI breakdowns for engineers who build things that matter.',
    site: context.site || 'https://syntexic.com',
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.pubDate),
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
