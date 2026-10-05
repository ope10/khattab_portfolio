'use client'

import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/ui/Container'

const stats = [
  { target: 4, suffix: '+', label: 'YEARS DESIGNING\nPRODUCTS' },
  { target: 8, suffix: '', label: 'PROJECTS SHIPPED' },
  { target: 2, suffix: '', label: 'DESIGN SYSTEMS\nBUILT' },
  { target: 4, suffix: '', label: 'INDUSTRIES\nSERVED' },
]

function StatCounter({
  target,
  suffix = '',
  duration = 1400,
}: {
  target: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
      setCount(target)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = performance.now()

          const step = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out cubic curve for natural decelerating count
            const easeOut = 1 - Math.pow(1 - progress, 3)
            const current = Math.floor(easeOut * target)

            setCount(current)

            if (progress < 1) {
              requestAnimationFrame(step)
            } else {
              setCount(target)
            }
          }

          requestAnimationFrame(step)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [target, duration])

  return (
    <dt
      ref={ref}
      className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-tight tabular-nums"
    >
      {count}
      {suffix}
    </dt>
  )
}

export function StatsBar() {
  return (
    <section className="w-full h-[152px] border-y border-white/10 flex items-center justify-center">
      <Container className="max-w-[948px] px-4">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center text-center w-full max-w-[270px] mx-auto h-[112px]"
            >
              {/* Stat Value Animated Counter */}
              <StatCounter target={stat.target} suffix={stat.suffix} />

              {/* Stat Label */}
              <dd className="mt-2 text-[12px] font-medium tracking-wider text-white/70 uppercase whitespace-pre-line leading-[16px]">
                {stat.label}
              </dd>

              {/* Vertical Divider */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-[-12px] top-1/2 -translate-y-1/2 h-10 w-[1px] bg-white/20" />
              )}
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}