import Container from '@/components/common/Container';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Privacy Policy',
  description: 'Privacy policy for AI Agent Studio - how we collect, use, and protect your information.',
  url: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="py-20">
      <Container size="md">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <h1>Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>

          <h2>Introduction</h2>
          <p>
            At AI Agent Studio, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul>
            <li>Fill out contact forms</li>
            <li>Subscribe to our newsletter</li>
            <li>Request information about our services</li>
            <li>Communicate with us via email or other channels</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain information about your device, including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Referring URLs</li>
            <li>Pages viewed and time spent on pages</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Analyze usage patterns and trends</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We may use third-party service providers to help us operate our website and deliver our services. These providers have access to your personal information only to perform specific tasks on our behalf and are obligated to protect your information.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Object to processing of your personal information</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:privacy@aiagent.studio">privacy@aiagent.studio</a>
          </p>
        </article>
      </Container>
    </div>
  );
}
