import Link from 'next/link';
import { siteConfig } from '@/lib/constants';
import Container from '@/components/common/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              Custom AI Agent Engineering - From Simple Automations to Complex Multi-Agent Systems
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#website-agents" className="text-muted-foreground hover:text-foreground transition-colors">
                  Website Agents
                </Link>
              </li>
              <li>
                <Link href="/services#business-agents" className="text-muted-foreground hover:text-foreground transition-colors">
                  Business Agents
                </Link>
              </li>
              <li>
                <Link href="/services#marketing-agents" className="text-muted-foreground hover:text-foreground transition-colors">
                  Marketing Agents
                </Link>
              </li>
              <li>
                <Link href="/services#multi-agent" className="text-muted-foreground hover:text-foreground transition-colors">
                  Multi-Agent Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-muted-foreground hover:text-foreground transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
