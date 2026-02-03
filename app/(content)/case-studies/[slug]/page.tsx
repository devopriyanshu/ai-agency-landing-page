import Container from '@/components/common/Container';
import { generateSEO } from '@/lib/seo';
import { notFound } from 'next/navigation';

const caseStudies: Record<string, any> = {
  'ecommerce-automation': {
    title: 'E-commerce Automation Success',
    client: 'Online Retailer',
    industry: 'Retail',
  },
  'content-pipeline': {
    title: 'Content Production Pipeline',
    client: 'Media Company',
    industry: 'Media',
  },
};

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug];
  
  if (!study) {
    return {};
  }

  return generateSEO({
    title: study.title,
    description: `Case study: ${study.title} - ${study.client}`,
    url: `/case-studies/${params.slug}`,
  });
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug];

  if (!study) {
    notFound();
  }

  return (
    <div className="py-20">
      <Container size="md">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <h1>{study.title}</h1>
          <p className="text-muted-foreground">
            {study.client} • {study.industry}
          </p>
          
          <div className="bg-muted/50 rounded-lg p-8 text-center mt-8">
            <p className="text-muted-foreground">
              This is a placeholder case study page. In production, this would display detailed case study content.
            </p>
          </div>
        </article>
      </Container>
    </div>
  );
}
