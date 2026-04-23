'use client'

import { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import { Play, Check } from 'lucide-react'
import type { VideoItem } from '@/lib/manual-content'

interface VideoSectionProps {
  selectedIndex: number
  onSelectVideo: (index: number) => void
  videos: VideoItem[]
  faqVideos?: VideoItem[]
}

export function VideoSection({ selectedIndex, onSelectVideo, videos, faqVideos = [] }: VideoSectionProps) {
  const allVideos = useMemo(() => [...videos, ...faqVideos], [videos, faqVideos])
  const faqStartIndex = videos.length
  const [completed, setCompleted] = useState<Set<number>>(new Set())
  const selectedVideo = allVideos[selectedIndex] || allVideos[0]
  const playerRef = useRef<HTMLDivElement>(null)
  const playerInstanceRef = useRef<any>(null)
  const [isApiReady, setIsApiReady] = useState(false)
  const selectedIndexRef = useRef(selectedIndex)
  
  // Keep selectedIndex ref updated
  useEffect(() => {
    selectedIndexRef.current = selectedIndex
  }, [selectedIndex])
  
  // Track video titles to detect actual content changes
  const videosKey = videos.map(v => v.title).join(',')
  const faqKey = faqVideos.map(v => v.title).join(',')
  const prevKeyRef = useRef(`${videosKey}|${faqKey}`)
  
  useEffect(() => {
    const currentKey = `${videosKey}|${faqKey}`
    if (prevKeyRef.current !== currentKey) {
      prevKeyRef.current = currentKey
      setCompleted(new Set())
    }
  }, [videosKey, faqKey])
  
  // Cleanup player on unmount
  useEffect(() => {
    return () => {
      if (playerInstanceRef.current) {
        try {
          playerInstanceRef.current.destroy()
        } catch (e) {
          // ignore
        }
        playerInstanceRef.current = null
      }
    }
  }, [])

  // YouTube IFrame API の読み込み
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    // API already loaded
    if (window.YT && window.YT.Player) {
      setIsApiReady(true)
      return
    }
    
    // Set up callback for when API is ready
    const originalCallback = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      originalCallback?.()
      setIsApiReady(true)
    }
    
    // Load script if not already loading
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag)
    }
    
    return () => {
      window.onYouTubeIframeAPIReady = originalCallback
    }
  }, [])

  // Initialize player function
  const initializePlayer = useCallback((youtubeId: string) => {
    if (!playerRef.current || !window.YT?.Player) return
    
    // Destroy existing player if any
    if (playerInstanceRef.current) {
      try {
        playerInstanceRef.current.destroy()
      } catch (e) {
        // ignore
      }
      playerInstanceRef.current = null
    }
    
    playerInstanceRef.current = new window.YT.Player(playerRef.current, {
      height: '100%',
      width: '100%',
      videoId: youtubeId,
      events: {
        onStateChange: (event: any) => {
          if (event.data === window.YT.PlayerState.PLAYING) {
            setCompleted(prev => {
              const next = new Set(prev)
              next.add(selectedIndexRef.current)
              return next
            })
          }
        }
      }
    })
  }, [])

  // Initialize or update player when API is ready or video changes
  useEffect(() => {
    if (!isApiReady) return
    
    const youtubeId = selectedVideo?.youtubeUrl ? getYouTubeId(selectedVideo.youtubeUrl) : null
    
    // If no video ID, destroy existing player to stop playback
    if (!youtubeId) {
      if (playerInstanceRef.current) {
        try {
          playerInstanceRef.current.destroy()
        } catch (e) {
          // ignore
        }
        playerInstanceRef.current = null
      }
      return
    }
    
    // If player exists, load new video; otherwise initialize
    if (playerInstanceRef.current && typeof playerInstanceRef.current.cueVideoById === 'function') {
      try {
        playerInstanceRef.current.cueVideoById(youtubeId)
      } catch (e) {
        // Player might be in bad state, reinitialize
        initializePlayer(youtubeId)
      }
    } else {
      initializePlayer(youtubeId)
    }
  }, [isApiReady, selectedIndex, selectedVideo, initializePlayer])

  function toggleCompleted(index: number, e: React.MouseEvent) {
    e.stopPropagation()
    setCompleted(prev => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  const getYouTubeId = (url: string): string | null => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/)
    return match ? match[1] : null
  }

  const youtubeId = selectedVideo?.youtubeUrl ? getYouTubeId(selectedVideo.youtubeUrl) : null

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Video Player Area */}
      <div className="flex-shrink-0 p-4 pb-3">
        <div className="w-full rounded-lg overflow-hidden bg-[#1a1a1a] shadow-sm">
          <div className="relative w-full pb-[56.25%]">
            {youtubeId ? (
              <div
                ref={playerRef}
                className="absolute inset-0 w-full h-full"
                id={`youtube-player-${selectedIndex}`}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]">
                <div className="flex flex-col items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer">
                    <Play className="h-6 w-6 text-white fill-white ml-0.5" />
                  </div>
                  <div className="text-center px-4">
                    <p className="text-white text-sm font-medium">
                      Step {selectedIndex + 1}: {selectedVideo?.title}
                    </p>
                    <p className="text-white/50 text-xs mt-1">{selectedVideo?.duration}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Caution Section */}
      {selectedVideo?.caution && (
        <div className="flex-shrink-0 px-4 pb-3">
          <div className="bg-[#fffbf0] border-l-4 border-[#f59e0b] rounded p-3">
            <p className="text-[12px] font-semibold text-[#d97706] mb-1">注意</p>
            <p className="text-[12px] text-[#92400e]">{selectedVideo.caution}</p>
          </div>
        </div>
      )}

      {/* Video List - Scrollable */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <p className="text-[10px] font-semibold text-[#999999] mb-2.5 uppercase tracking-wider">動画一覧</p>
        <div className="space-y-1">
          {videos.map((video, index) => {
            const isSelected = selectedIndex === index
            const isDone = completed.has(index)
            return (
              <div
                key={video.id}
                className={`group w-full px-3 py-2.5 rounded-md border transition-all flex items-center gap-3 cursor-pointer ${
                  isSelected
                    ? 'border-[#22d3ee] bg-[#f0fdff]'
                    : 'border-[#eaeaea] bg-white hover:border-[#d0d0d0]'
                }`}
                onClick={() => onSelectVideo(index)}
              >
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isSelected
                    ? 'bg-[#22d3ee] text-white'
                    : isDone
                    ? 'bg-[#22d3ee]/20 text-[#0891b2]'
                    : 'bg-[#f0f0f0] text-[#666666]'
                }`}>
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm leading-tight ${
                    isSelected ? 'font-medium text-[#0e7490]' : isDone ? 'text-[#888888]' : 'text-[#333333]'
                  }`}>
                    {video.title}
                  </p>
                  <p className="text-[10px] text-[#aaaaaa] mt-0.5">{video.duration}</p>
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={(e) => { e.stopPropagation(); toggleCompleted(index, e) }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      e.stopPropagation()
                      toggleCompleted(index, e as unknown as React.MouseEvent)
                    }
                  }}
                  className="flex-shrink-0 cursor-pointer"
                  title={isDone ? '未完了にする' : '完了にする'}
                >
                  {isDone ? (
                    <div className="w-5 h-5 rounded-full bg-[#22d3ee] flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-[#d8d8d8] group-hover:border-[#22d3ee] transition-colors" />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* FAQ Video List */}
        {faqVideos.length > 0 && (
          <>
            <p className="text-[10px] font-semibold text-[#999999] mb-2.5 mt-4 uppercase tracking-wider">FAQ動画</p>
            <div className="space-y-1">
              {faqVideos.map((video, index) => {
                const actualIndex = faqStartIndex + index
                const isSelected = selectedIndex === actualIndex
                const isDone = completed.has(actualIndex)
                return (
                  <div
                    key={`faq-${video.id}`}
                    className={`group w-full px-3 py-2.5 rounded-md border transition-all flex items-center gap-3 cursor-pointer ${
                      isSelected
                        ? 'border-[#fbbf24] bg-[#fefce8]'
                        : 'border-[#eaeaea] bg-white hover:border-[#d0d0d0]'
                    }`}
                    onClick={() => onSelectVideo(actualIndex)}
                  >
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isSelected
                        ? 'bg-[#fbbf24] text-white'
                        : isDone
                        ? 'bg-[#fbbf24]/20 text-[#b45309]'
                        : 'bg-[#f0f0f0] text-[#666666]'
                    }`}>
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm leading-tight ${
                        isSelected ? 'font-medium text-[#92400e]' : isDone ? 'text-[#888888]' : 'text-[#333333]'
                      }`}>
                        {video.title}
                      </p>
                      <p className="text-[10px] text-[#aaaaaa] mt-0.5">{video.duration}</p>
                    </div>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={(e) => { e.stopPropagation(); toggleCompleted(actualIndex, e) }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          e.stopPropagation()
                          toggleCompleted(actualIndex, e as unknown as React.MouseEvent)
                        }
                      }}
                      className="flex-shrink-0 cursor-pointer"
                      title={isDone ? '未完了にする' : '完了にする'}
                    >
                      {isDone ? (
                        <div className="w-5 h-5 rounded-full bg-[#fbbf24] flex items-center justify-center">
                          <Check className="h-3 w-3 text-white" strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-[#d8d8d8] group-hover:border-[#fbbf24] transition-colors" />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
