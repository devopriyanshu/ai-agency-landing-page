import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { generateSEO } from '@/lib/seo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = generateSEO({
  title: 'Blog',
  description: 'Insights, tutorials, and updates on AI agent engineering, LangChain, RAG systems, and the latest in AI technology.',
  url: '/blog',
});

// Placeholder blog posts - replace with CMS data
const blogPosts = [
  {
    slug: 'getting-started-with-langchain',
    title: 'Getting Started with LangChain for AI Agents',
    excerpt: 'Learn the fundamentals of building AI agents with LangChain framework.',
    date: '2024-01-15',
    category: 'Tutorial',
  },
  {
    slug: 'rag-systems-explained',
    title: 'RAG Systems Explained: A Complete Guide',
    excerpt: 'Understanding Retrieval-Augmented Generation and how it powers intelligent AI systems.',
    date: '2024-01-10',
    category: 'Guide',
  },
  {
    slug: 'multi-agent-workflows',
    title: 'Building Multi-Agent Workflows',
    excerpt: 'How to orchestrate multiple AI agents to solve complex problems.',
    date: '2024-01-05',
    category: 'Advanced',
  },
];

export default function BlogPage() {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-muted-foreground">
            Tutorials, guides, and insights on AI agent engineering and the latest in AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            More articles coming soon. Subscribe to our newsletter to stay updated.
          </p>
        </div>
      </Container>
    </div>
  );
}
