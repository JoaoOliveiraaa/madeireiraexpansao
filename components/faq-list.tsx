'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type FaqItem = {
  pergunta: string
  resposta: string
}

export function FaqList({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.pergunta}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/40 sm:px-8 sm:py-6"
            >
              <span className="text-base font-medium text-foreground sm:text-lg">
                {item.pergunta}
              </span>
              <ChevronDown
                className={cn(
                  'mt-0.5 size-5 shrink-0 text-muted-foreground transition-transform duration-300',
                  isOpen && 'rotate-180 text-primary',
                )}
              />
            </button>
            <div
              className={cn(
                'grid transition-[grid-template-rows] duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-base leading-relaxed text-muted-foreground sm:px-8 sm:pb-6">
                  {item.resposta}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
