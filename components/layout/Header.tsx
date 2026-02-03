'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Container from '@/components/common/Container';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    // If it's a hash link, smooth scroll to section
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith('/');
              const isActive = isExternal ? pathname === link.href : false;
              
              return isExternal ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    isActive ? 'text-foreground' : 'text-muted-foreground'
                  )}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground cursor-pointer"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild>
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}>
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isExternal = link.href.startsWith('/');
                const isActive = isExternal ? pathname === link.href : false;
                
                return isExternal ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-primary',
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground cursor-pointer"
                  >
                    {link.label}
                  </a>
                );
              })}
              <Button asChild className="w-full">
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}>
                  Get Started
                </a>
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
