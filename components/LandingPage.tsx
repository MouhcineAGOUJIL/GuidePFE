import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Target, Lightbulb, ChevronRight, User, CheckCircle, ArrowRight, Github, Twitter, Linkedin, BrainCircuit, Code2, Presentation, Rocket, X, Quote } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { advicePhases } from '@/data/advice'

interface LandingPageProps {
    onStart: () => void
}

export default function LandingPage({ onStart }: LandingPageProps) {
    const [activePhase, setActivePhase] = useState<string | null>(null)

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    const stagger = {
        visible: { transition: { staggerChildren: 0.1 } }
    }

    // Helper to get icon component
    const getIcon = (name: string) => {
        switch (name) {
            case 'BrainCircuit': return <BrainCircuit size={32} />;
            case 'Code2': return <Code2 size={32} />;
            case 'Presentation': return <Presentation size={32} />;
            case 'Rocket': return <Rocket size={32} />;
            default: return <Lightbulb size={32} />;
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-primary-200 selection:text-primary-900">

            {/* 1. Header */}
            <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="/images/logo.svg" alt="Logo Guide PFE" className="w-14 h-14 object-contain bg-white rounded-lg p-1" />
                        <span className="text-xl font-bold text-slate-900 tracking-tight">Guide PFE</span>
                    </div>

                    <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                        <a href="#hero" className="hover:text-primary-600 transition-colors">Accueil</a>
                        <a href="#features" className="hover:text-primary-600 transition-colors">Le Guide</a>
                        <a href="#advice" className="hover:text-primary-600 transition-colors">Conseils</a>
                    </nav>

                    <button
                        onClick={onStart}
                        className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40"
                    >
                        Accéder au Rapport
                    </button>
                </div>
            </header>

            <main className="pt-20">
                {/* 2. Hero Section */}
                <section id="hero" className="relative pt-20 pb-32 overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-50 to-transparent pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-2 gap-12 items-center">
                        {/* Hero Content - Text (Left) */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                            className="space-y-8"
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-primary-700 font-medium text-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                                </span>
                                Nouveau Guide 2025
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                                Votre Guide Interactif pour un <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">Rapport PFE Parfait</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-xl text-slate-600 leading-relaxed max-w-lg">
                                Découvrez les meilleures pratiques de rédaction et de mise en forme à travers une expérience de livre numérique immersive et interactive.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={onStart}
                                    className="group bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:translate-y-[-2px] flex items-center justify-center gap-2"
                                >
                                    Explorer le Guide
                                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <a
                                    href="#advice"
                                    className="px-8 py-4 rounded-full font-bold text-lg text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 bg-white transition-all flex items-center justify-center"
                                >
                                    Lire les Conseils
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Hero Visual - Stylized Book */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            onClick={onStart}
                            className="relative hidden lg:block perspective-1000 cursor-pointer group"
                        >
                            <div className="relative w-[450px] aspect-[3/4] mx-auto transform rotate-y-[-12deg] rotate-x-[5deg] shadow-2xl rounded-r-xl bg-white border-l-8 border-slate-200">
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-white rounded-r-xl overflow-hidden flex flex-col items-center justify-center p-8 border border-slate-100">
                                    <div className="w-full h-3/4 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center bg-slate-50">
                                        <div className="text-center">
                                            <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-2xl mx-auto flex items-center justify-center mb-4">
                                                <BookOpen size={40} />
                                            </div>
                                            <h3 className="font-serif text-2xl font-bold text-slate-800">Rapport PFE</h3>
                                            <p className="text-slate-500 mt-2 font-mono text-sm">Version Interactive</p>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-8 right-8 animate-bounce bg-white p-3 rounded-full shadow-lg border border-slate-100">
                                        <ArrowRight className="text-primary-600" />
                                    </div>
                                </div>
                                {/* Visual pages effect */}
                                <div className="absolute top-1 bottom-1 right-0 w-2 bg-slate-300 rounded-r-sm shadow-sm" style={{ transform: 'translateX(2px) translateZ(-1px)' }}></div>
                                <div className="absolute top-2 bottom-2 right-0 w-2 bg-slate-300 rounded-r-sm shadow-sm" style={{ transform: 'translateX(4px) translateZ(-2px)' }}></div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 3. Features Section */}
                <section id="features" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-primary-600 font-semibold tracking-wide uppercase mb-3">Fonctionnalités</h2>
                            <h3 className="text-4xl font-bold text-slate-900 mb-6">Tout ce dont vous avez besoin pour réussir</h3>
                            <p className="text-xl text-slate-600">Une approche pédagogique complète combinant théorie et pratique dans une interface moderne.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    icon: <BookOpen className="w-8 h-8 text-white" />,
                                    title: "Rapport Interactif",
                                    desc: "Feuilletez virtuellement un rapport modèle complet. L'expérience de lecture imite un vrai livre physique pour une immersion totale.",
                                    color: "bg-blue-500"
                                },
                                {
                                    icon: <Target className="w-8 h-8 text-white" />,
                                    title: "Consignes Détaillées",
                                    desc: "Accédez aux exigences académiques par section. Cliquez sur les éléments surlignés pour voir apparaître les explications contextuelles.",
                                    color: "bg-emerald-500"
                                },
                                {
                                    icon: <Lightbulb className="w-8 h-8 text-white" />,
                                    title: "Astuces Expert",
                                    desc: "Bénéficiez de conseils pratiques de rédaction, de structuration et de mise en forme validés par des enseignants.",
                                    color: "bg-amber-500"
                                }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-slate-100 group"
                                >
                                    <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Advice Section (Interactive Cards) */}
                <section id="advice" className="py-24 bg-slate-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 skew-x-12 transform translate-x-20 pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-primary-600 font-semibold tracking-wide uppercase mb-3">Méthodologie & Conseils</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Le Cycle de Vie du PFE</h3>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                                Chaque étape est cruciale. Cliquez sur une phase pour découvrir les clés de la réussite.
                            </p>
                        </div>

                        {/* Interactive Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {advicePhases.map((phase, idx) => (
                                <motion.div
                                    key={phase.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    onClick={() => setActivePhase(phase.id)}
                                    className={`cursor-pointer rounded-2xl p-6 bg-white border border-slate-200 hover:border-primary-300 shadow-sm hover:shadow-xl transition-all group ${activePhase === phase.id ? 'ring-2 ring-primary-500 shadow-primary-500/20' : ''}`}
                                >
                                    <div className={`w-12 h-12 ${phase.color} text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        {getIcon(phase.icon)}
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">{phase.title}</h4>
                                    <p className="text-sm text-slate-500 font-medium">{phase.subtitle}</p>
                                    <div className="mt-4 flex items-center text-primary-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                                        Lire les conseils <ArrowRight size={14} className="ml-1" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Detailed View Area */}
                        <AnimatePresence mode="wait">
                            {activePhase && (
                                <motion.div
                                    key={activePhase}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="overflow-hidden mt-8"
                                >
                                    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 relative">

                                        <button
                                            onClick={() => setActivePhase(null)}
                                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                                        >
                                            <X size={24} />
                                        </button>

                                        <div className="flex items-center gap-4 mb-8">
                                            <div className={`w-14 h-14 ${advicePhases.find(p => p.id === activePhase)?.color} text-white rounded-xl flex items-center justify-center shadow-lg`}>
                                                {getIcon(advicePhases.find(p => p.id === activePhase)?.icon || '')}
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold text-slate-900">{advicePhases.find(p => p.id === activePhase)?.title}</h3>
                                                <p className="text-slate-500 text-lg">{advicePhases.find(p => p.id === activePhase)?.subtitle}</p>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <ReactMarkdown
                                                components={{
                                                    h2: ({ children }) => {
                                                        const text = children?.toString() || '';
                                                        const isStep = /^\d+\./.test(text);
                                                        return (
                                                            <div className="flex items-start gap-4 mt-10 mb-6 group">
                                                                {isStep && (
                                                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                                        {text.split('.')[0]}
                                                                    </div>
                                                                )}
                                                                <h2 className="text-2xl font-bold text-slate-800 pt-2 relative">
                                                                    {isStep ? text.replace(/^\d+\.\s*/, '') : children}
                                                                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-500 rounded-full opacity-30"></span>
                                                                </h2>
                                                            </div>
                                                        );
                                                    },
                                                    h3: ({ children }) => (
                                                        <h3 className="text-xl font-semibold text-primary-700 mt-8 mb-4 flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-primary-400" />
                                                            {children}
                                                        </h3>
                                                    ),
                                                    p: ({ children }) => (
                                                        <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                                                            {children}
                                                        </p>
                                                    ),
                                                    ul: ({ children }) => (
                                                        <ul className="space-y-3 mb-6 ml-2">
                                                            {children}
                                                        </ul>
                                                    ),
                                                    li: ({ children }) => (
                                                        <li className="flex items-start gap-3 text-slate-700">
                                                            <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400 mt-2.5" />
                                                            <span className="flex-1">{children}</span>
                                                        </li>
                                                    ),
                                                    blockquote: ({ children }) => (
                                                        <div className="my-8 relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-primary-500 p-6 shadow-sm">
                                                            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
                                                                <Quote className="w-32 h-32 text-primary-600" />
                                                            </div>
                                                            <div className="relative z-10 font-medium text-slate-800 italic">
                                                                {children}
                                                            </div>
                                                        </div>
                                                    ),
                                                    strong: ({ children }) => (
                                                        <strong className="font-bold text-primary-700 bg-primary-50 px-1 rounded">
                                                            {children}
                                                        </strong>
                                                    ),
                                                }}
                                            >
                                                {advicePhases.find(p => p.id === activePhase)?.content || ''}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>


                {/* 6. Preview / CTA Section */}
                <section id="preview" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Prêt à perfectionner votre rapport ?</h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Accédez immédiatement au guide interactif et commencez à structurer votre réussite.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="inline-block relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-200"></div>
                            <button
                                onClick={onStart}
                                className="relative bg-white text-slate-900 hover:text-primary-600 px-10 py-5 rounded-full font-bold text-xl transition-all flex items-center gap-3 shadow-xl"
                            >
                                Ouvrir le Guide Interactif
                                <BookOpen className="w-6 h-6" />
                            </button>
                        </motion.div>

                        <p className="mt-6 text-sm text-slate-500">
                            Aucune inscription requise • Accès immédiat
                        </p>
                    </div>
                </section>
            </main>

            {/* 7. Footer */}
            <footer className="bg-white border-t border-slate-200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <img src="/images/logo.svg" alt="Logo Guide PFE" className="w-8 h-8 object-contain" />
                        <span className="font-bold text-slate-900">Guide PFE</span>
                    </div>

                    <div className="text-slate-500 text-sm">

                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Github size={20} /></a>
                        <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
