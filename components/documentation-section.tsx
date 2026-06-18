'use client'

import type { StepItem, VideoItem } from '@/lib/manual-content'

function NoteCard({ type, title, children }: { type: 'warning' | 'tips'; title: string; children: React.ReactNode }) {
  if (type === 'warning') {
    return (
      <div className="bg-[#fffdf5] border-l-2 border-[#f59e0b] rounded-r px-3 py-2">
        <p className="text-[11px] font-semibold text-[#b45309] mb-0.5">{title}</p>
        <p className="text-[11px] leading-relaxed text-[#78350f]">{children}</p>
      </div>
    )
  }
  return (
    <div className="bg-[#f0fdff] border-l-2 border-[#22d3ee] rounded-r px-3 py-2">
      <p className="text-[11px] font-semibold text-[#0891b2] mb-0.5">{title}</p>
      <p className="text-[11px] leading-relaxed text-[#0e7490]">{children}</p>
    </div>
  )
}

interface DocumentationSectionProps {
  steps: StepItem[]
  selectedVideo?: VideoItem | null
}

export function DocumentationSection({ steps, selectedVideo }: DocumentationSectionProps) {
  // If selected video has its own steps, show those instead
  const hasVideoSteps = selectedVideo?.steps && selectedVideo.steps.length > 0

  return (
    <div className="h-full px-5 py-5 bg-[#fafafa]">
      {hasVideoSteps ? (
        // Show video-specific steps
        <div className="space-y-5">
          <section className="space-y-3">
            <h4 className="text-[13px] font-semibold text-[#1a1a1a]">
              {selectedVideo.title}
            </h4>
            <ol className="space-y-2 text-[12px] text-[#444444] leading-relaxed">
              {selectedVideo.steps!.map((step, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded bg-[#22d3ee] text-white text-[10px] font-bold">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Show warning if exists */}
          {selectedVideo.warning && (
            <NoteCard type="warning" title="注意">
              {selectedVideo.warning}
            </NoteCard>
          )}

          {/* Show tips if exists */}
          {selectedVideo.tips && (
            <NoteCard type="tips" title="Tips">
              {selectedVideo.tips}
            </NoteCard>
          )}

          {/* Show keywords if exists */}
          {selectedVideo.keywords && selectedVideo.keywords.length > 0 && (
            <div className="pt-2">
              <p className="text-[10px] font-semibold text-[#999999] mb-2 uppercase tracking-wider">検索キーワード</p>
              <div className="flex flex-wrap gap-1.5">
                {selectedVideo.keywords.map((keyword, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[10px] bg-[#f0f0f0] text-[#666666] rounded"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : steps.length > 0 ? (
        // Show legacy steps format
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
                <div className="ml-7">
                  <NoteCard type={step.note.type} title={step.note.title}>
                    {step.note.content}
                  </NoteCard>
                </div>
              )}
            </section>
          ))}
        </div>
      ) : (
        // No steps available
        <div className="flex items-center justify-center h-full text-[#999999] text-sm">
          動画を選択すると手順解説が表示されます
        </div>
      )}
    </div>
  )
}
