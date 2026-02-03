import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Zap, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/50">
      <Container>
        {/* Mission & Vision */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Engineering-Led AI Solutions
          </h2>
          <p className="text-xl text-muted-foreground">
            We're a team of AI engineers passionate about building custom AI agents that solve real business problems. No templates, no shortcuts—just robust, scalable solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground">
              To democratize access to custom AI agent technology by making sophisticated AI systems accessible to businesses of all sizes. We believe every company should have the power to automate intelligently and scale efficiently.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
            <p className="text-lg text-muted-foreground">
              We take an engineering-first approach to AI development. Every solution is custom-built, thoroughly tested, and designed to integrate seamlessly with your existing systems. We don't believe in one-size-fits-all solutions.
            </p>
          </div>
        </div>

        {/* Values */}
        <SectionHeading
          title="Our Values"
          subtitle="The principles that guide our work"
          centered
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We stay at the cutting edge of AI technology to deliver the most advanced solutions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-muted-foreground">
                Every line of code is crafted with precision, tested rigorously, and built to last.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Partnership</h3>
              <p className="text-muted-foreground">
                We work closely with our clients as true partners in their AI journey.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Results</h3>
              <p className="text-muted-foreground">
                We measure success by the tangible impact our solutions have on your business.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
