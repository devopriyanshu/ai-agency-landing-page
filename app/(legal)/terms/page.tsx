import Container from '@/components/common/Container';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Terms of Service',
  description: 'Terms of Service for AI Agent Studio - the legal terms governing use of our services.',
  url: '/terms',
});

export default function TermsPage() {
  return (
    <div className="py-20">
      <Container size="md">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <h1>Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>

          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using AI Agent Studio's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
          </p>

          <h2>Services</h2>
          <p>
            AI Agent Studio provides custom AI agent engineering services, including but not limited to:
          </p>
          <ul>
            <li>Custom AI agent development</li>
            <li>Multi-agent system architecture</li>
            <li>RAG-based system implementation</li>
            <li>AI integration consulting</li>
          </ul>

          <h2>User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain the confidentiality of any account credentials</li>
            <li>Use our services in compliance with all applicable laws</li>
            <li>Not use our services for any unlawful or prohibited purpose</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content, features, and functionality of our website and services are owned by AI Agent Studio and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h3>Custom Development</h3>
          <p>
            For custom development projects, intellectual property rights will be specified in individual project agreements.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, AI Agent Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless AI Agent Studio from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these terms.
          </p>

          <h2>Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on our website.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at:{' '}
            <a href="mailto:legal@aiagent.studio">legal@aiagent.studio</a>
          </p>
        </article>
      </Container>
    </div>
  );
}
