'use client'

import { ReactNode, forwardRef } from 'react'

interface DetailLink {
  id: string
  text: string
  position?: number
}

// Update interface at top of file
interface BookPageProps {
  page: {
    title: string
    content: ReactNode
    details?: DetailLink[]
    image?: string
    imageCaption?: string
    isTitlePage?: boolean
  }
  onDetailClick: (detailId: string) => void
  pageNumber: number
  totalPages: number
}

const BookPage = forwardRef<HTMLDivElement, BookPageProps>(({ page, onDetailClick, pageNumber, totalPages }, ref) => {
  const renderContent = () => {
    // ... existing renderContent logic stays same ...
    if (page.content instanceof Array) return page.content

    if (typeof page.content === 'string') {
      const renderWithDetails = (text: string, key: string) => {
        if (!page.details || page.details.length === 0) return text
        // ... existing details logic ...
        let segments: (string | ReactNode)[] = [text]
        page.details.forEach(detail => {
          const nextSegments: (string | ReactNode)[] = []
          segments.forEach(seg => {
            if (typeof seg === 'string') {
              const parts = seg.split(detail.text)
              parts.forEach((p, k) => {
                if (p) nextSegments.push(p)
                if (k < parts.length - 1) {
                  nextSegments.push(
                    <button
                      key={`${key}-${detail.id}-${k}`}
                      onClick={() => onDetailClick(detail.id)}
                      className="text-primary-600 underline decoration-primary-300 hover:text-primary-800 hover:bg-primary-50 px-1 -mx-1 rounded transition-all font-medium cursor-pointer"
                    >
                      {detail.text}
                    </button>
                  )
                }
              })
            } else {
              nextSegments.push(seg)
            }
          })
          segments = nextSegments
        })
        return <>{segments}</>
      }

      const renderInline = (text: string, keyPrefix: string) => {
        // ... existing inline logic ...
        const parts = text.split(/(\*\*.*?\*\*)/g)
        return parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={`${keyPrefix}-${i}`} className="font-bold text-gray-900">{renderWithDetails(part.slice(2, -2), `${keyPrefix}-${i}-b`)}</strong>
          }
          return <span key={`${keyPrefix}-${i}`}>{renderWithDetails(part, `${keyPrefix}-${i}`)}</span>
        })
      }

      const lines = page.content.split('\n')
      return (
        <div className="space-y-1">
          {lines.map((line, i) => {
            // ... existing line parsing ...
            const trimmed = line.trim()
            if (trimmed === '') return <br key={i} className="block content-[''] h-4" />

            if (line.startsWith('### ')) {
              return <h3 key={i} className="text-lg font-bold text-primary-700 mt-4 mb-2">{renderInline(line.slice(4), `l-${i}`)}</h3>
            }
            if (line.startsWith('## ')) {
              return <h2 key={i} className="text-xl font-bold text-primary-800 mt-6 mb-3 border-l-4 border-primary-400 pl-3 bg-gray-50 p-2 rounded-r">{renderInline(line.slice(3), `l-${i}`)}</h2>
            }
            if (trimmed.startsWith('- ')) {
              return (
                <div key={i} className="flex flex-row items-start mb-2 ml-4">
                  <div className="min-w-[8px] h-2 w-2 rounded-full bg-primary-400 mt-2 mr-3 opacity-80"></div>
                  <div className="text-gray-700 leading-relaxed">{renderInline(trimmed.slice(2), `l-${i}`)}</div>
                </div>
              )
            }
            if (trimmed.startsWith('> ')) {
              return (
                <div key={i} className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 text-blue-800 italic rounded-r">
                  {renderInline(trimmed.slice(2), `l-${i}`)}
                </div>
              )
            }

            return <p key={i} className="leading-relaxed text-gray-700 mb-2">{renderInline(line, `l-${i}`)}</p>
          })}
        </div>
      )
    }
    return page.content
  }

  // SPECIAL LAYOUT FOR TITLE PAGES
  if (page.isTitlePage) {
    return (
      <div ref={ref} className="bg-white h-full w-full p-12 shadow-sm relative overflow-hidden flex flex-col justify-center items-center text-center">
        {/* Paper texture overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>
        {/* Decorative Border */}
        <div className="absolute inset-8 border-4 double border-primary-100 opacity-50 pointer-events-none"></div>

        <div className="relative z-10 max-w-lg">
          <h1 className="text-6xl font-serif font-bold text-primary-900 mb-6 tracking-widest uppercase">
            {page.title.split(':')[0]}
          </h1>
          <div className="h-1 w-32 bg-primary-500 mx-auto mb-8"></div>
          <h2 className="text-3xl font-serif text-gray-700 italic leading-relaxed">
            {page.title.split(':')[1] || page.content}
          </h2>
        </div>

        <div className="mt-auto absolute bottom-12 text-sm text-gray-400 font-mono">
          Guide PFE &mdash; {page.title.split(':')[0]}
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className="bg-white h-full w-full p-8 md:p-12 shadow-sm relative overflow-hidden">
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
