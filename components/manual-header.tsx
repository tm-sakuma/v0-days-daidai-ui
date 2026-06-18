'use client'

import { Search, Download, MessageCircle } from 'lucide-react'

interface ManualHeaderProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function ManualHeader({ searchQuery, onSearchChange }: ManualHeaderProps) {
  const handleDownloadManual = async () => {
    try {
      const response = await fetch('/api/download-manual')
      if (!response.ok) {
        console.error('Failed to download manual')
        return
      }
      const blob = await response.blob()
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'Daidai操作マニュアル.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(link.href)
    } catch (error) {
      console.error('Error downloading manual:', error)
    }
  }

  return (
    <header className="flex-shrink-0 border-b border-[#eaeaea] bg-white">
      <div className="h-16 flex items-center px-6">
        {/* Logo */}
        <div className="mr-8 flex-shrink-0">
          <h1 className="text-sm font-bold text-[#1a1a1a] tracking-tight">
            DAYS Daidai
          </h1>
          <p className="text-[10px] text-[#888888] mt-0.5">マニュアルセンター</p>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#b0b0b0]" />
            <input
              type="text"
              placeholder="マニュアル全体から検索..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#f7f7f7] border border-[#e8e8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30 focus:border-[#22d3ee] text-sm text-[#1a1a1a] placeholder:text-[#aaaaaa] transition-all"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="ml-auto pl-6 flex items-center gap-3">
          <a
            href="https://daidai-support.zendesk.com/hc/ja/requests/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#1a1a1a] text-sm font-medium rounded-lg border border-[#e8e8e8] hover:bg-[#f7f7f7] active:bg-[#eeeeee] transition-all shadow-sm hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            <span>お問い合わせ</span>
          </a>
          <button
            onClick={handleDownloadManual}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#22d3ee] text-white text-sm font-medium rounded-lg hover:bg-[#06b6d4] active:bg-[#0891b2] transition-all shadow-sm hover:shadow-md"
          >
            <Download className="h-4 w-4" />
            <span>マニュアルをダウンロード</span>
          </button>
        </div>
      </div>
    </header>
  )
}
