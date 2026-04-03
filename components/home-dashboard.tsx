'use client'

import { Search, Play, FileText, Calendar, Users, FileOutput, ClipboardList, MessageSquare, Download, Upload, Database, Settings, Shield } from 'lucide-react'

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

const recentManuals = [
  { id: 'import', category: 'OPTIONS', title: 'CSV\u30A4\u30F3\u30DD\u30FC\u30C8\u624B\u9806\u304C\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F', date: '2024/01/15' },
  { id: 'appointment', category: 'FRONT_OFFICE', title: '\u4E88\u7D04\u30AB\u30EC\u30F3\u30C0\u30FC\u306E\u65B0\u6A5F\u80FD\u306B\u3064\u3044\u3066', date: '2024/01/12' },
  { id: 'result', category: 'HEALTH_EXAMINATION', title: '\u7D50\u679C\u5165\u529B\u306E\u4E00\u62EC\u767B\u9332\u6A5F\u80FD', date: '2024/01/10' },
]

const popularVideos = [
  { id: 'patient', category: 'FRONT_OFFICE', title: '\u53D7\u8A3A\u8005\u306E\u65B0\u898F\u767B\u9332\u65B9\u6CD5', views: 1250 },
  { id: 'appointment', category: 'FRONT_OFFICE', title: '\u4E88\u7D04\u30AB\u30EC\u30F3\u30C0\u30FC\u306E\u57FA\u672C\u64CD\u4F5C', views: 980 },
  { id: 'import', category: 'OPTIONS', title: 'CSV\u30D5\u30A1\u30A4\u30EB\u306E\u6E96\u5099\u65B9\u6CD5', views: 856 },
  { id: 'report', category: 'BACK_OFFICE', title: '\u5E33\u7968\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u9078\u629E', views: 742 },
]

const HELP_CENTER_TITLE = '\u30D8\u30EB\u30D7\u30BB\u30F3\u30BF\u30FC'
const HELP_CENTER_DESC = '\u304A\u63A2\u3057\u306E\u64CD\u4F5C\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u691C\u7D22\u3001\u307E\u305F\u306F\u4E0B\u306E\u30AB\u30C6\u30B4\u30EA\u30FC\u304B\u3089\u304A\u9078\u3073\u304F\u3060\u3055\u3044'
const SEARCH_PLACEHOLDER = '\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u691C\u7D22...'
const CATEGORY_SECTION_TITLE = '\u30AB\u30C6\u30B4\u30EA\u30FC\u304B\u3089\u63A2\u3059'
const RECENT_MANUALS_TITLE = '\u6700\u8FD1\u8FFD\u52A0\u3055\u308C\u305F\u30DE\u30CB\u30E5\u30A2\u30EB'
const POPULAR_VIDEOS_TITLE = '\u3088\u304F\u898B\u3089\u308C\u3066\u3044\u308B\u52D5\u753B'
const VIEWS_SUFFIX = ' \u56DE\u8996\u8074'

export function HomeDashboard({ searchQuery, onSearchChange, onNavigate }: HomeDashboardProps) {
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

      {/* Category Cards */}
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

      {/* Two Column Section */}
      <div className="px-6 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recently Added */}
        <div className="bg-white rounded-lg border border-[#eaeaea] overflow-hidden">
          <div className="px-4 py-3 border-b border-[#eaeaea] flex items-center gap-2">
            <FileText className="h-4 w-4 text-[#22d3ee]" />
            <h3 className="text-sm font-semibold text-[#444444]">{RECENT_MANUALS_TITLE}</h3>
          </div>
          <div className="divide-y divide-[#f0f0f0]">
            {recentManuals.map((manual, index) => (
              <button
                key={index}
                onClick={() => onNavigate(manual.category, manual.id)}
                className="w-full px-4 py-3 text-left hover:bg-[#fafafa] transition-colors"
              >
                <p className="text-sm text-[#333333] mb-1">{manual.title}</p>
                <p className="text-[10px] text-[#999999]">{manual.date}</p>
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
            {popularVideos.map((video, index) => (
              <button
                key={index}
                onClick={() => onNavigate(video.category, video.id)}
                className="w-full px-4 py-3 text-left hover:bg-[#fafafa] transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-[#1a1a1a] flex items-center justify-center">
                    <Play className="h-3 w-3 text-white fill-white" />
                  </div>
                  <p className="text-sm text-[#333333]">{video.title}</p>
                </div>
                <span className="text-[10px] text-[#999999]">{video.views.toLocaleString()}{VIEWS_SUFFIX}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
