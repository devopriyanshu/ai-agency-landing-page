'use client';

import { techStack } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';

export default function TechStack() {
  const frameworks = techStack.filter(t => t.category === 'framework');
  const tools = techStack.filter(t => t.category === 'tool');
  const techniques = techStack.filter(t => t.category === 'technique');

  return (
    <section className="py-20 md:py-32 bg-muted/50" id="tech-stack">
      <Container>
        <SectionHeading
          title="Our Technology Stack"
          subtitle="We leverage the latest AI frameworks, tools, and techniques to build robust, scalable solutions."
          centered
          className="mb-16"
        />

        <div className="space-y-12">
          {/* Frameworks */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Badge variant="secondary">Frameworks</Badge>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {frameworks.map((item) => (
                <div key={item.name} className="bg-background p-6 rounded-lg border">
                  <h4 className="font-semibold mb-2">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Badge variant="secondary">AI Models & Tools</Badge>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((item) => (
                <div key={item.name} className="bg-background p-6 rounded-lg border">
                  <h4 className="font-semibold mb-2">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Techniques */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Badge variant="secondary">Techniques</Badge>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techniques.map((item) => (
                <div key={item.name} className="bg-background p-6 rounded-lg border">
                  <h4 className="font-semibold mb-2">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
