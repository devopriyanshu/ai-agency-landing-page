import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'space-y-4',
      centered && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
