'use client'

import { useState, Suspense } from 'react'
import { ManualHub } from '@/components/manual-hub'
import { HelpCircle } from 'lucide-react'

// Loading fallback for Suspense
function ManualHubLoading() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="animate-pulse text-[#666666]">読み込み中...</div>
    </div>
  )
}

// DAYS Daidai Manual Center - Updated
export default function Home() {
  const [isOpen, setIsOpen] = useState(true)
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 300)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Closed State - Show Open Button */}
      {!isOpen && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">DAYS Daidai</h1>
              <p className="text-sm text-[#666666]">医療プラットフォーム</p>
            </div>
            <button
              onClick={handleOpen}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#22d3ee] text-white font-medium rounded-lg hover:bg-[#06b6d4] transition-colors shadow-lg hover:shadow-xl"
            >
              <HelpCircle className="h-5 w-5" />
              マニュアルを開く
            </button>
          </div>
        </div>
      )}

      {/* Open State - Show Manual Panel */}
      {isOpen && (
        <div 
          className={`transition-all duration-300 ease-out ${
            isClosing 
              ? 'opacity-0 scale-95 translate-y-4' 
              : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          <Suspense fallback={<ManualHubLoading />}>
            <ManualHub onClose={handleClose} />
          </Suspense>
        </div>
      )}
    </main>
  )
}
