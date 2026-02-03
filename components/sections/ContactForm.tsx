'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { industries } from '@/lib/constants';
import { ContactFormData } from '@/types';
import { Loader2, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    company: '',
    industry: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        company: '',
        industry: '',
        description: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name *</Label>
        <Input
          id="fullName"
          type="text"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="john@example.com"
        />
      </div>

      {/* Company */}
      <div className="space-y-2">
        <Label htmlFor="company">Company / Project Name *</Label>
        <Input
          id="company"
          type="text"
          required
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          placeholder="Acme Inc."
        />
      </div>

      {/* Industry */}
      <div className="space-y-2">
        <Label htmlFor="industry">Industry / Use Case *</Label>
        <Select
          required
          value={formData.industry}
          onValueChange={(value) => setFormData({ ...formData, industry: value })}
        >
          <SelectTrigger id="industry">
            <SelectValue placeholder="Select an industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Description of AI Agent Needed *</Label>
        <Textarea
          id="description"
          required
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Tell us about your project and what you're looking to build..."
          rows={5}
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Inquiry'
        )}
      </Button>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 rounded-lg">
          <CheckCircle2 className="w-5 h-5" />
          <p>Thank you! We'll get back to you within 24 hours.</p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 rounded-lg">
          <p>{errorMessage || 'Something went wrong. Please try again.'}</p>
        </div>
      )}
    </form>
  );
}
