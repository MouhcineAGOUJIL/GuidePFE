'use client'

import { ReactNode, forwardRef } from 'react'

interface DetailLink {
  id: string
  text: string
  position?: number
}

interface BookPageProps {
  page: {
    title: string
    content: ReactNode
    details?: DetailLink[]
    image?: string
    imageCaption?: string
  }
  onDetailClick: (detailId: string) => void
  pageNumber: number
  totalPages: number
}

const BookPage = forwardRef<HTMLDivElement, BookPageProps>(({ page, onDetailClick, pageNumber, totalPages }, ref) => {
  const renderContent = () => {
    // ... existing content logic ...
    if (typeof page.content === 'string') {
      // Split content by paragraphs first if detectable, or just handle line breaks
      // The requirement is mostly about the list in Introduction being "one line per chapter"
      // which implies handling newlines.

      const renderPart = (text: string, keyPrefix: string) => {
        // Split by newlines and render with <br/>
        return text.split('\n').map((line, i, arr) => (
          <span key={`${keyPrefix}-${i}`}>
            {line}
            {i < arr.length - 1 && <br />}
          </span>
        ))
      }

      if (page.details && page.details.length > 0) {
        const parts: (string | DetailLink)[] = []
        let lastIndex = 0
        let content = page.content

        page.details.forEach((detail) => {
          const position = detail.position || content.indexOf(detail.text)
          if (position !== -1) {
            parts.push(content.slice(lastIndex, position))
            parts.push(detail)
            lastIndex = position + detail.text.length
          }
        })
        parts.push(content.slice(lastIndex))

        return parts.map((part, index) => {
          if (typeof part === 'string') {
            return <span key={index}>{renderPart(part, `text-${index}`)}</span>
          } else {
            return (
              <button
                key={index}
                onClick={() => onDetailClick(part.id)}
                className="text-primary-600 underline decoration-primary-300 hover:text-primary-800 hover:bg-primary-50 px-1 -mx-1 rounded transition-all font-medium cursor-pointer"
              >
                {part.text}
              </button>
            )
          }
        })
      }
      // If no details, just render the content with line breaks
      return page.content.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))
    }
    return page.content
  }

  return (
    <div ref={ref} className="bg-white h-full w-full p-8 md:p-12 shadow-sm border-r border-gray-100 relative overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>

      <div className="h-full flex flex-col relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 pb-4 border-b-2 border-primary-200">
          {page.title}
        </h1>
        {page.image && (
          <div className="mb-6 rounded-lg overflow-hidden shadow-md border border-gray-100">
            <img
              src={page.image}
              alt={page.imageCaption || page.title}
              className="w-full h-48 object-cover"
            />
            {page.imageCaption && (
              <p className="p-2 bg-gray-50 text-xs text-gray-500 italic text-center border-t border-gray-100">
                {page.imageCaption}
              </p>
            )}
          </div>
        )}
        <div className="flex-1 text-base md:text-lg text-gray-700 leading-relaxed space-y-4 font-serif text-justify overflow-y-auto pr-2 custom-scrollbar">
          {renderContent()}
        </div>
        <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center text-xs md:text-sm text-gray-400 font-mono">
          <span>Guide PFE</span>
          <span>{pageNumber} / {totalPages}</span>
        </div>
      </div>
    </div>
  )
})

BookPage.displayName = 'BookPage'

export default BookPage

