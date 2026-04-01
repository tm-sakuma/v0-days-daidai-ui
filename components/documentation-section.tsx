'use client'

import type { StepItem } from '@/lib/manual-content'

function NoteCard({ type, title, children }: { type: 'warning' | 'tips'; title: string; children: React.ReactNode }) {
  if (type === 'warning') {
    return (
      <div className="bg-[#fffdf5] border-l-2 border-[#f59e0b] rounded-r px-3 py-2 ml-7">
        <p className="text-[11px] font-semibold text-[#b45309] mb-0.5">{title}</p>
        <p className="text-[11px] leading-relaxed text-[#78350f]">{children}</p>
      </div>
    )
  }
  return (
    <div className="bg-[#f0fdff] border-l-2 border-[#22d3ee] rounded-r px-3 py-2 ml-7">
      <p className="text-[11px] font-semibold text-[#0891b2] mb-0.5">{title}</p>
      <p className="text-[11px] leading-relaxed text-[#0e7490]">{children}</p>
    </div>
  )
}

interface DocumentationSectionProps {
  steps: StepItem[]
}

export function DocumentationSection({ steps }: DocumentationSectionProps) {
  return (
    <div className="h-full px-5 py-5 bg-[#fafafa]">
      <div className="space-y-6">
        {steps.map((step, index) => (
          <section key={index} className="space-y-2.5">
            <h4 className="text-[13px] font-semibold text-[#1a1a1a] flex items-center gap-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-[#22d3ee] text-white text-[10px] font-bold">
                {index + 1}
              </span>
              {step.title}
            </h4>
            <ul className="space-y-1.5 ml-7 text-[12px] text-[#444444] leading-relaxed">
              {step.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {step.note && (
              <NoteCard type={step.note.type} title={step.note.title}>
                {step.note.content}
              </NoteCard>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
