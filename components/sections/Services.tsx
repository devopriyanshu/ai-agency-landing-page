'use client';

import { services } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { 
  Globe, 
  Briefcase, 
  TrendingUp, 
  Sparkles, 
  Network, 
  Database 
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Globe,
  Briefcase,
  TrendingUp,
  Sparkles,
  Network,
  Database,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <Container>
        <SectionHeading
          title="AI Agent Services"
          subtitle="We build custom AI agents tailored to your specific needs - from simple automations to sophisticated multi-agent workflows."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
