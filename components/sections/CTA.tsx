import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Container from '@/components/common/Container';

export default function CTA() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 md:p-16 text-center">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to Build Your AI Agent?
            </h2>
            <p className="text-xl text-blue-100">
              Let's discuss your project and create a custom AI solution that transforms your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-0" />
        </div>
      </Container>
    </section>
  );
}
