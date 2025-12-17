'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface Instruction {
  id: string
  title: string
  content: string
  category: string
}

interface InstructionsSectionProps {
  instructions: Instruction[]
  selectedDetail: string | null
  onClose: () => void
}

export default function InstructionsSection({
  instructions,
  selectedDetail,
  onClose,
}: InstructionsSectionProps) {
  const filteredInstructions = selectedDetail
    ? instructions.filter(inst => inst.id === selectedDetail)
    : instructions

  const categories = Array.from(new Set(instructions.map(inst => inst.category)))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold">📋 Consignes et Détails</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {selectedDetail ? (
            // Show selected detail
            <div className="space-y-6">
              {filteredInstructions.map((instruction) => (
                <motion.div
                  key={instruction.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-600"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {instruction.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {instruction.title}
                  </h3>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {instruction.content}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // Show all instructions grouped by category
            <div className="space-y-8">
              {categories.map((category) => {
                const categoryInstructions = instructions.filter(
                  inst => inst.category === category
                )
                return (
                  <div key={category} className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-primary-200 pb-2">
                      {category}
                    </h3>
                    <div className="space-y-4">
                      {categoryInstructions.map((instruction) => (
                        <motion.div
                          key={instruction.id}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="bg-gray-50 rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer border-l-4 border-primary-500"
                        >
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">
                            {instruction.title}
                          </h4>
                          <p className="text-gray-600 line-clamp-2">
                            {instruction.content.substring(0, 150)}...
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 border-t border-gray-200 text-center text-sm text-gray-600">
          Cliquez sur les liens dans le rapport pour voir les détails spécifiques
        </div>
      </motion.div>
    </motion.div>
  )
}

