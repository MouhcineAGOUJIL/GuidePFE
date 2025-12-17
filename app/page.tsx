'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import BookViewer from '@/components/BookViewer'
import LandingPage from '@/components/LandingPage'

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <main className="min-h-screen bg-gray-900">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <LandingPage onStart={() => setShowIntro(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="book-viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen flex items-center justify-center p-4 bg-gray-100"
          >
            <BookViewer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

