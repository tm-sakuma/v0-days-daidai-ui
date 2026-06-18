'use client'

import { ChevronRight, Menu, X, Home } from 'lucide-react'

interface SidebarMenuProps {
  selectedCategory: string
  selectedItem: string
  onSelectItem: (category: string, item: string) => void
  isOpen?: boolean
  onClose?: () => void
}

const menuItems = [
  {
    category: 'FRONT_OFFICE',
    label: 'FRONT OFFICE',
    items: [
      { id: 'appointment', label: '予約／受付' },
      { id: 'patient', label: '受診者管理' },
    ],
  },
  {
    category: 'BACK_OFFICE',
    label: 'BACK OFFICE',
    items: [
      { id: 'report', label: '帳票出力' },
    ],
  },
  {
    category: 'HEALTH_EXAMINATION',
    label: 'HEALTH EXAMINATION',
    items: [
      { id: 'result', label: '結果入力' },
      { id: 'questionnaire', label: '問診入力' },
    ],
  },
  {
    category: 'OPTIONS',
    label: 'OPTIONS',
    items: [
      { id: 'import', label: 'データインポート' },
      { id: 'export', label: 'データエクスポート' },
    ],
  },
  {
    category: 'ADMINISTRATION',
    label: 'ADMINISTRATION',
    items: [
      { id: 'health-info', label: '健診情報管理' },
      { id: 'master', label: 'マスター管理' },
      { id: 'system', label: 'システム設定' },
    ],
  },
]

export function SidebarMenu({
  selectedCategory,
  selectedItem,
  onSelectItem,
  isOpen = true,
  onClose,
}: SidebarMenuProps) {
  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed bottom-4 left-4 z-20">
        {!isOpen && (
          <button
            onClick={() => onClose?.()}
            className="h-10 w-10 bg-[#22d3ee] text-white rounded-full flex items-center justify-center shadow-lg"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-screen w-60 flex-shrink-0 bg-[#f5f5f5] border-r border-[#eaeaea] flex flex-col overflow-y-auto z-30 transition-transform md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button (Mobile) */}
        <div className="md:hidden flex-shrink-0 p-4 border-b border-[#eaeaea]">
          <button
            onClick={onClose}
            className="h-8 w-8 flex items-center justify-center text-[#666666] hover:text-[#1a1a1a]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-3 py-4 space-y-6">
          {/* Home Button */}
          <div>
            <button
              onClick={() => onSelectItem('HOME', 'home')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-all flex items-center gap-2.5 ${
                selectedCategory === 'HOME'
                  ? 'bg-[#e0f7fa] text-[#0891b2] font-semibold border-l-3 border-[#22d3ee] shadow-sm'
                  : 'text-[#444444] hover:bg-white hover:shadow-sm'
              }`}
            >
              <Home className={`h-4 w-4 ${selectedCategory === 'HOME' ? 'text-[#22d3ee]' : 'text-[#888888]'}`} />
              <span>ホーム</span>
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-[#e0e0e0]" />

          {menuItems.map((group) => (
            <div key={group.category}>
              <h3 className="text-[10px] font-semibold text-[#888888] uppercase tracking-wider px-3 mb-2">
                {group.label}
              </h3>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive =
                    selectedCategory === group.category &&
                    selectedItem === item.id
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelectItem(group.category, item.id)
                      }}
                      className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-all flex items-center justify-between group ${
                        isActive
                          ? 'bg-[#e0f7fa] text-[#0891b2] font-semibold border-l-3 border-[#22d3ee] shadow-sm'
                          : 'text-[#444444] hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className={`h-4 w-4 transition-all ${
                        isActive 
                          ? 'text-[#22d3ee] opacity-100' 
                          : 'text-[#cccccc] opacity-0 group-hover:opacity-100'
                      }`} />
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 md:hidden z-20"
          onClick={onClose}
        />
      )}
    </>
  )
}
