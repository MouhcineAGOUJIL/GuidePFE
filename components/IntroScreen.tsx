import { motion } from 'framer-motion'
import { BookOpen, ArrowRight } from 'lucide-react'

interface IntroScreenProps {
    onStart: () => void
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[80px]"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center max-w-4xl px-6 text-center">
                {/* Floating Book Icon/Hero */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12 relative group"
                >
                    <div className="absolute inset-0 bg-primary-500 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="relative bg-gradient-to-br from-white to-gray-200 text-gray-900 p-8 rounded-2xl shadow-2xl border-4 border-white/10"
                    >
                        <BookOpen size={80} className="text-primary-600 drop-shadow-md" />
                    </motion.div>
                </motion.div>

                {/* Title & Subtitle */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 drop-shadow-sm">
                        Guide PFE
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Votre compagnon interactif pour la réussite de votre <br className="hidden md:block" />
                        <span className="text-primary-300 font-medium">Projet de Fin d'Études</span>.
                    </p>
                </motion.div>

                {/* Start Button */}
                <motion.button
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    onClick={onStart}
                    className="mt-16 group relative px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg shadow-xl shadow-primary-500/20 hover:shadow-primary-500/40 transition-all overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        Commencer la lecture
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.button>
            </div>

            {/* Footer / Credits */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 text-gray-500 text-sm font-mono tracking-wider"
            >
                DÉPARTEMENT INFORMATIQUE • PROMOTION 2024
            </motion.div>
        </div>
    )
}
