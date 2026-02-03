import Container from '@/components/common/Container';
import { generateSEO } from '@/lib/seo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = generateSEO({
  title: 'Case Studies',
  description: 'Real-world examples of AI agent implementations and their impact on business operations.',
  url: '/case-studies',
});

// Placeholder case studies - replace with CMS data
const caseStudies = [
  {
    slug: 'ecommerce-automation',
    title: 'E-commerce Automation Success',
    client: 'Online Retailer',
    industry: 'Retail',
    excerpt: 'How we automated product research and customer support for a growing e-commerce business.',
    results: '70% reduction in manual work',
  },
  {
    slug: 'content-pipeline',
    title: 'Content Production Pipeline',
    client: 'Media Company',
    industry: 'Media',
    excerpt: 'Building an end-to-end AI-powered content creation and distribution system.',
    results: '3x faster content production',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-muted-foreground">
            Real-world examples of how AI agents are transforming businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-2 mb-2">
                    <Badge variant="outline">{study.industry}</Badge>
                    <Badge variant="secondary">{study.client}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{study.title}</CardTitle>
                  <CardDescription className="text-base">{study.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm font-semibold text-primary">
                      {study.results}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            More case studies coming soon. Contact us to discuss your project.
          </p>
        </div>
      </Container>
    </div>
  );
}
