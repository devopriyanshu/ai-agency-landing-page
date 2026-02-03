import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Container from '@/components/common/Container';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="text-center space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">Page Not Found</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg">
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
