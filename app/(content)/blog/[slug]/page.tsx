import Container from '@/components/common/Container';
import { generateSEO } from '@/lib/seo';
import { notFound } from 'next/navigation';

// This would come from your CMS or markdown files
const blogPosts: Record<string, any> = {
  'getting-started-with-langchain': {
    title: 'Getting Started with LangChain for AI Agents',
    date: '2024-01-15',
    category: 'Tutorial',
    content: 'Blog post content would go here...',
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {};
  }

  return generateSEO({
    title: post.title,
    description: post.excerpt || 'Read our latest insights on AI agent engineering.',
    url: `/blog/${params.slug}`,
    type: 'article',
    publishedTime: post.date,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="py-20">
      <Container size="md">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-2">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <h1>{post.title}</h1>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <p className="text-muted-foreground">
              This is a placeholder blog post page. In production, this would display content from your CMS or markdown files.
            </p>
          </div>
        </article>
      </Container>
    </div>
  );
}
