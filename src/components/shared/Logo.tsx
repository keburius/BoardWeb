import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
}

export function Logo({ className, size = 'md' }: LogoProps) {
  return (
    <span className={cn('font-semibold tracking-tight select-none', sizeMap[size], className)}>
      <span style={{ color: '#F5F5F5' }}>SecondBoard</span>
      <span style={{ color: '#1D9E75' }}>.ai</span>
    </span>
  )
}
