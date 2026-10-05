import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container className="text-center space-y-6 py-32">
        <p className="text-8xl font-black text-text-muted/20">404</p>
        <h1 className="text-3xl font-bold text-text-primary">Page not found</h1>
        <p className="text-text-secondary text-sm max-w-xs mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button href="/" variant="accent" size="lg">
          Go Home
        </Button>
      </Container>
    </div>
  )
}
