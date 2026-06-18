'use client'

import { Search, Play, FileText, Calendar, Users, FileOutput, ClipboardList, MessageSquare, Download, Upload, Database, Settings, Shield, Clock } from 'lucide-react'
import { useMemo } from 'react'
import { searchVideos, getItemCategory, getRecentVideos, getPopularVideos } from '@/lib/manual-content'

interface HomeDashboardProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  onNavigate: (category: string, item: string) => void
}

const categories = [
  {
    id: 'FRONT_OFFICE',
    label: 'FRONT OFFICE',
    color: '#22d3ee',
    bgColor: '#f0fdff',
    items: [
      { id: 'appointment', label: '\u4E88\u7D04\uFF0F\u53D7\u4ED8', icon: Calendar },
      { id: 'patient', label: '\u53D7\u8A3A\u8005\u7BA1\u7406', icon: Users },
    ],
  },
  {
    id: 'BACK_OFFICE',
    label: 'BACK OFFICE',
    color: '#8b5cf6',
    bgColor: '#f5f3ff',
    items: [
      { id: 'report', label: '\u5E33\u7968\u51FA\u529B', icon: FileOutput },
    ],
  },
  {
    id: 'HEALTH_EXAMINATION',
    label: 'HEALTH EXAMINATION',
    color: '#10b981',
    bgColor: '#ecfdf5',
    items: [
      { id: 'result', label: '\u7D50\u679C\u5165\u529B', icon: ClipboardList },
      { id: 'questionnaire', label: '\u554F\u8A3A\u5165\u529B', icon: MessageSquare },
    ],
  },
  {
    id: 'OPTIONS',
    label: 'OPTIONS',
    color: '#f59e0b',
    bgColor: '#fffbeb',
    items: [
      { id: 'import', label: '\u30C7\u30FC\u30BF\u30A4\u30F3\u30DD\u30FC\u30C8', icon: Upload },
      { id: 'export', label: '\u30C7\u30FC\u30BF\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8', icon: Download },
    ],
  },
  {
    id: 'ADMINISTRATION',
    label: 'ADMINISTRATION',
    color: '#ef4444',
    bgColor: '#fef2f2',
    items: [
      { id: 'health-info', label: '\u5065\u8A3A\u60C5\u5831\u7BA1\u7406', icon: Database },
      { id: 'master', label: '\u30DE\u30B9\u30BF\u30FC\u7BA1\u7406', icon: Settings },
      { id: 'system', label: '\u30B7\u30B9\u30C6\u30E0\u8A2D\u5B9A', icon: Shield },
    ],
  },
]

const HELP_CENTER_TITLE = 'ヘルプセンター'
const HELP_CENTER_DESC = 'お探しの操作マニュアルを検索、または下のカテゴリーからお選びください'
const SEARCH_PLACEHOLDER = 'キーワードでマニュアルを検索...'
const CATEGORY_SECTION_TITLE = 'カテゴリーから探す'
const RECENT_MANUALS_TITLE = '最近追加されたマニュアル'
const POPULAR_VIDEOS_TITLE = 'よく見られている動画'
const VIEWS_SUFFIX = ' 回視聴'

export function HomeDashboard({ searchQuery, onSearchChange, onNavigate }: HomeDashboardProps) {
  const searchResults = useMemo(() => searchVideos(searchQuery), [searchQuery])
  const recentVideos = useMemo(() => getRecentVideos(3), [])
  const popularVideos = useMemo(() => getPopularVideos(4), [])
  const hasSearchQuery = searchQuery.trim().length > 0

  return (
    <div className="flex-1 overflow-y-auto bg-[#fafafa]">
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-b from-[#f0fdff] to-[#fafafa] px-8 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">{HELP_CENTER_TITLE}</h1>
          <p className="text-sm text-[#666666] mb-6">{HELP_CENTER_DESC}</p>
          
          {/* Large Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#aaaaaa]" />
            <input
              type="text"
              placeholder={SEARCH_PLACEHOLDER}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-[#e0e0e0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30 focus:border-[#22d3ee] text-base text-[#1a1a1a] placeholder:text-[#aaaaaa] shadow-sm transition-all"
            />
          </div>
        </div>
      </div>

      {/* Search Results */}
      {hasSearchQuery && (
        <div className="px-6 py-6">
          <h2 className="text-sm font-semibold text-[#444444] mb-4">
            「{searchQuery}」の検索結果 ({searchResults.length}件)
          </h2>
          {searchResults.length > 0 ? (
            <div className="bg-white rounded-lg border border-[#eaeaea] divide-y divide-[#f0f0f0]">
              {searchResults.map((result, index) => (
                <button
                  key={`${result.categoryId}-${result.video.id}-${index}`}
                  onClick={() => onNavigate(getItemCategory(result.categoryId), result.categoryId)}
                  className="w-full px-4 py-3 text-left hover:bg-[#fafafa] transition-colors flex items-start gap-3"
                >
                  <div className="h-10 w-10 rounded bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                    <Play className="h-4 w-4 text-white fill-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#333333] font-medium mb-1">{result.video.title}</p>
                    <div className="flex items-center gap-2 text-[10px] text-[#999999]">
                      <span className="px-1.5 py-0.5 bg-[#f0f0f0] rounded">{result.categoryTitle}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {result.video.duration}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-[#eaeaea] px-6 py-12 text-center">
              <p className="text-sm text-[#666666]">該当する動画が見つかりませんでした</p>
              <p className="text-[11px] text-[#999999] mt-1">別のキーワードでお試しください</p>
            </div>
          )}
        </div>
      )}

      {/* Category Cards - only show when not searching */}
      {!hasSearchQuery && (
      <div className="px-6 py-8">
        <h2 className="text-sm font-semibold text-[#444444] mb-4">{CATEGORY_SECTION_TITLE}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg border border-[#eaeaea] overflow-hidden hover:shadow-md transition-shadow"
            >
              <div
                className="px-4 py-3 border-b"
                style={{ backgroundColor: category.bgColor, borderColor: category.color + '30' }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-wide" style={{ color: category.color }}>
                  {category.label}
                </h3>
              </div>
              <div className="p-2">
                {category.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => onNavigate(category.id, item.id)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-left hover:bg-[#f5f5f5] transition-colors group"
                    >
                      <div
                        className="h-8 w-8 rounded-md flex items-center justify-center"
                        style={{ backgroundColor: category.bgColor }}
                      >
                        <Icon className="h-4 w-4" style={{ color: category.color }} />
                      </div>
                      <span className="text-sm text-[#333333] group-hover:text-[#1a1a1a]">{item.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      )}

      {/* Two Column Section - only show when not searching */}
      {!hasSearchQuery && (
      <div className="px-6 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recently Added */}
        <div className="bg-white rounded-lg border border-[#eaeaea] overflow-hidden">
          <div className="px-4 py-3 border-b border-[#eaeaea] flex items-center gap-2">
            <FileText className="h-4 w-4 text-[#22d3ee]" />
            <h3 className="text-sm font-semibold text-[#444444]">{RECENT_MANUALS_TITLE}</h3>
          </div>
          <div className="divide-y divide-[#f0f0f0]">
            {recentVideos.map((item, index) => (
              <button
                key={`recent-${item.categoryId}-${item.video.id}-${index}`}
                onClick={() => onNavigate(getItemCategory(item.categoryId), item.categoryId)}
                className="w-full px-4 py-3 text-left hover:bg-[#fafafa] transition-colors"
              >
                <p className="text-sm text-[#333333] mb-1">{item.video.title}</p>
                <div className="flex items-center gap-2 text-[10px] text-[#999999]">
                  <span>{item.categoryTitle}</span>
                  {item.video.addedDate && (
                    <>
                      <span>·</span>
                      <span>{item.video.addedDate}</span>
                    </>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Videos */}
        <div className="bg-white rounded-lg border border-[#eaeaea] overflow-hidden">
          <div className="px-4 py-3 border-b border-[#eaeaea] flex items-center gap-2">
            <Play className="h-4 w-4 text-[#22d3ee]" />
            <h3 className="text-sm font-semibold text-[#444444]">{POPULAR_VIDEOS_TITLE}</h3>
          </div>
          <div className="divide-y divide-[#f0f0f0]">
            {popularVideos.map((item, index) => (
              <button
                key={`popular-${item.categoryId}-${item.video.id}-${index}`}
                onClick={() => onNavigate(getItemCategory(item.categoryId), item.categoryId)}
                className="w-full px-4 py-3 text-left hover:bg-[#fafafa] transition-colors"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="h-8 w-8 rounded bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                    <Play className="h-3 w-3 text-white fill-white" />
                  </div>
                  <p className="text-sm text-[#333333]">{item.video.title}</p>
                </div>
                <p className="text-[10px] text-[#999999] ml-11">{item.categoryTitle}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      )}
    </div>
  )
}
