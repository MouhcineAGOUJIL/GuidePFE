'use client'

import { useState, useRef, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import HTMLFlipBook from 'react-pageflip'
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'
import BookPage from './BookPage'
import CoverPage from './CoverPage'
import InstructionsSection from './InstructionsSection'
import { reportPages, instructions, coverData } from '@/data/content'

export default function BookViewer() {
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [showInstructions, setShowInstructions] = useState(false)
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null)

  const bookRef = useRef<any>(null)

  // Initialize total pages (cover + content pages)
  useEffect(() => {
    // We add 1 because the index is 0-based, so length is total
    setTotalPages(reportPages.length)
  }, [])

  const handleNextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext()
    }
  }

  const handlePrevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev()
    }
  }

  const handleDetailClick = (detailId: string) => {
    setSelectedDetail(detailId)
    setShowInstructions(true)
  }

  const closeDetail = () => {
    setSelectedDetail(null)
    setShowInstructions(false)
  }

  const onFlip = (e: any) => {
    setCurrentPage(e.data)
  }

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-300 to-gray-400 opacity-60"></div>

      {/* Instructions Overlay */}
      <AnimatePresence>
        {showInstructions && (
          <InstructionsSection
            instructions={instructions}
            selectedDetail={selectedDetail}
            onClose={closeDetail}
          />
        )}
      </AnimatePresence>

      {/* Controls Header */}
      <div className="absolute top-4 z-20 flex items-center gap-4 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-white/50">
        <button
          onClick={handlePrevPage}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
          title="Page précédente"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div className="flex items-center gap-2 px-2 font-mono text-gray-600">
          <BookOpen className="w-5 h-5" />
          <span>Page {currentPage + 1} / {totalPages}</span>
        </div>

        <button
          onClick={handleNextPage}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
          title="Page suivante"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-2"></div>

        <button
          onClick={() => setShowInstructions(true)}
          className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold hover:bg-primary-700 transition-colors shadow-md flex items-center gap-2"
        >
          Consignes
        </button>
      </div>

      {/* Book Container */}
      <div className="relative z-10 flex items-center justify-center pt-16 pb-8 h-full w-full">
        {/* @ts-ignore - react-pageflip types can be tricky */}
        <HTMLFlipBook
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onFlip}
          className="shadow-2xl"
          ref={bookRef}
        >
          {/* Cover Page */}
          <div className="demoPage">
            <CoverPage
              data={coverData}
              onDetailClick={handleDetailClick}
            />
          </div>

          {/* Content Pages */}
          {reportPages.map((page, index) => (
            <div key={index} className="demoPage">
              <BookPage
                page={page}
                onDetailClick={handleDetailClick}
                pageNumber={index + 1}
                totalPages={reportPages.length}
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  )
}

