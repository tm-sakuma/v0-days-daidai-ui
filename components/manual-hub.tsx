'use client'

import { useState, useMemo } from 'react'
import { X } from 'lucide-react'
import { ManualHeader } from './manual-header'
import { SidebarMenu } from './sidebar-menu'
import { VideoSection } from './video-section'
import { DocumentationSection } from './documentation-section'
import { HomeDashboard } from './home-dashboard'
import { getManualContent } from '@/lib/manual-content'

interface ManualHubProps {
  onClose?: () => void
}

export function ManualHub({ onClose }: ManualHubProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('HOME')
  const [selectedItem, setSelectedItem] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Get content for the selected menu item
  const currentContent = useMemo(() => getManualContent(selectedItem), [selectedItem])

  const handleSelectItem = (category: string, item: string) => {
    setSelectedCategory(category)
    setSelectedItem(item)
    setSelectedVideoIndex(0) // Reset video index when switching menus
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <ManualHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Main Content */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Sidebar */}
        <SidebarMenu
          selectedCategory={selectedCategory}
          selectedItem={selectedItem}
          onSelectItem={handleSelectItem}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Content Area */}
        {selectedCategory === 'HOME' ? (
          /* Home Dashboard View */
          <HomeDashboard
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onNavigate={handleSelectItem}
          />
        ) : (
          /* Manual Detail View */
          <div className="flex-1 flex flex-col md:flex-row min-w-0 overflow-hidden">
            {/* Video Section */}
            <div className="w-full md:w-[380px] lg:w-[420px] flex-shrink-0 flex flex-col border-r border-[#eaeaea] overflow-hidden">
              {/* Section Title with Current Content Name */}
              <div className="flex-shrink-0 flex items-center justify-between px-4 py-3 border-b border-[#eaeaea] bg-white">
                <h2 className="text-sm font-semibold text-[#444444]">{currentContent.title}</h2>
                <span className="text-[10px] text-[#999999]">{currentContent.videos.length} 本の動画</span>
              </div>

              {/* Video Content */}
              <VideoSection
                selectedIndex={selectedVideoIndex}
                onSelectVideo={setSelectedVideoIndex}
                videos={currentContent.videos}
              />
            </div>

            {/* Documentation Section */}
            <div className="hidden md:flex flex-1 flex-col min-w-0 overflow-hidden">
              {/* Section Header */}
              <div className="flex-shrink-0 flex items-center justify-between px-5 py-3 border-b border-[#eaeaea] bg-white">
                <h2 className="text-sm font-semibold text-[#444444]">手順解説: {currentContent.title}</h2>
                {onClose && (
                  <button
                    onClick={onClose}
                    className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-[#f0f0f0] transition-colors text-[#666666] hover:text-[#333333]"
                    title="閉じる"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Scrollable Documentation Content */}
              <div className="flex-1 overflow-y-auto">
                <DocumentationSection steps={currentContent.steps} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
