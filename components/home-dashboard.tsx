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
      { id: 'appointment', label: '予約／受付', icon: Calendar },
      { id: 'patient', label: '受診者管理', icon: Users },
    ],
  },
  {
    id: 'BACK_OFFICE',
    label: 'BACK OFFICE',
    color: '#8b5cf6',
    bgColor: '#f5f3ff',
    items: [
      { id: 'report', label: '帳票出力', icon: FileOutput },
    ],
  },
  {
    id: 'HEALTH_EXAMINATION',
    label: 'HEALTH EXAMINATION',
    color: '#10b981',
    bgColor: '#ecfdf5',
    items: [
      { id: 'result', label: '結果入力', icon: ClipboardList },
      { id: 'questionnaire', label: '問診入力', icon: MessageSquare },
    ],
  },
  {
    id: 'OPTIONS',
    label: 'OPTIONS',
    color: '#f59e0b',
    bgColor: '#fffbeb',
    items: [
      { id: 'import', label: 'データインポート', icon: Upload },
      { id: 'export', label: 'データエクスポート', icon: Download },
    ],
  },
  {
    id: 'ADMINISTRATION',
    label: 'ADMINISTRATION',
    color: '#ef4444',
    bgColor: '#fef2f2',
    items: [
      { id: 'health-info', label: '健診情報管理', icon: Database },
      { id: 'master', label: 'マスター管理', icon: Settings },
      { id: 'system', label: 'システム設定', icon: Shield },
    ],
  },
]

const recentManuals = [
  { id: 'import', category: 'OPTIONS', title: 'CSVインポート手順が更新されました', date: '2024/01/15' },
  { id: 'appointment', category: 'FRONT_OFFICE', title: '予約カレンダーの新機能について', date: '2024/01/12' },
  { id: 'result', category: 'HEALTH_EXAMINATION', title: '結果入力の一括登録機能', date: '2024/01/10' },
]

const popularVideos = [
  { id: 'patient', category: 'FRONT_OFFICE', title: '受診者の新規登録方法', views: 1250 },
  { id: 'appointment', category: 'FRONT_OFFICE', title: '予約カレンダーの基本操作', views: 980 },
  { id: 'import', category: 'OPTIONS', title: 'CSVファイルの準備方法', views: 856 },
  { id: 'report', category: 'BACK_OFFICE', title: '帳票テンプレートの選択', views: 742 },
]

export function HomeDashboard({ searchQuery, onSearchChange, onNavigate }: HomeDashboardProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-[#fafafa]">
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-b from-[#f0fdff] to-[#fafafa] px-8 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">ヘルプセンター</h1>
          <p className="text-sm text-[#666666] mb-6">お探しの操作マニュアルを検索、または下のカテゴリーからお選びください</p>
          
          {/* Large Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#aaaaaa]" />
            <input
              type="text"
              placeholder="キーワードでマニュアルを検索..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-[#e0e0e0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30 focus:border-[#22d3ee] text-base text-[#1a1a1a] placeholder:text-[#aaaaaa] shadow-sm transition-all"
            />
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="px-6 py-8">
        <h2 className="text-sm font-semibold text-[#444444] mb-4">カテゴリーから探す</h2>
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
            <h3 className="text-sm font-semibold text-[#444444]">最近追加されたマニュアル</h3>
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
            <h3 className="text-sm font-semibold text-[#444444]">よく見られている動画</h3>
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
                <span className="text-[10px] text-[#999999]">{video.views.toLocaleString()} 回視聴</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
