'use client';

import { useCases } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { CheckCircle2 } from 'lucide-react';

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 md:py-32 bg-muted/50">
      <Container>
        <SectionHeading
          title="Real-World Use Cases"
          subtitle="See how AI agents are transforming businesses across industries."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <Card key={useCase.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  {useCase.industry}
                </Badge>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
                <CardDescription>{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-semibold mb-3">Key Benefits:</p>
                  {useCase.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
