import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const routes = [
    '',
    '/blog',
    '/case-studies',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // TODO: Add dynamic routes from CMS
  // Example for blog posts:
  // const blogPosts = await getBlogPosts();
  // const blogRoutes = blogPosts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }));

  return routes;
}
