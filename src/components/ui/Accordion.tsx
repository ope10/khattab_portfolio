'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className={cn('flex w-full flex-col gap-[10px]', className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i

        return (
          <div key={i} className="w-full border-b border-white/60 pb-4">
            <button
              id={`accordion-btn-${i}`}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between py-3 text-left transition-colors"
            >
              <span
                className={cn(
                  'text-[20px] font-medium leading-[28px] transition-colors',
                  isOpen ? 'text-[#C1FA51]' : 'text-white hover:text-white/80'
                )}
              >
                {item.question}
              </span>
              <span
                className={cn(
                  'ml-4 flex-shrink-0 text-white transition-transform duration-200',
                  isOpen && '-rotate-90 text-[#C1FA51]'
                )} 
              >
                <Image
                  src="/images/tools/Container (1).svg"
                  alt="Toggle icon"
                  width={16}
                  height={16}
                />
              </span>
            </button> 

            <div
              id={`accordion-panel-${i}`}
              role="region"
              aria-labelledby={`accordion-btn-${i}`}
              className={cn(
                'overflow-hidden transition-all duration-300 ease-in-out',
                isOpen ? 'max-h-[300px] pt-1 pb-2 opacity-100' : 'max-h-0 opacity-0' 
              )}
            >
              <p className="text-[16px] max-w-[519px] tracking-[-0.2px] leading-[24px] text-[#E5E5E7]">
                {item.answer}
              </p> 
            </div>
          </div>
        )
      })}
    </div>
  )
}