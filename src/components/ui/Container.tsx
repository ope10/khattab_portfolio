import { cn } from '@/lib/utils'

interface ContainerProps {
  className?: string
  children: React.ReactNode
  as?: React.ElementType
}

export function Container({ className, children, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-[1200px] px-4 md:px-6 xl:px-0', className)}> 
      {children}
    </Tag>
  )
}