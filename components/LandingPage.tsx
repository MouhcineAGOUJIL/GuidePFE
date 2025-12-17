'use client'

import { motion } from 'framer-motion'
import { BookOpen, Target, Lightbulb, ChevronRight, User, CheckCircle, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react'

interface LandingPageProps {
    onStart: () => void
}

export default function LandingPage({ onStart }: LandingPageProps) {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    const stagger = {
        visible: { transition: { staggerChildren: 0.1 } }
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-primary-200 selection:text-primary-900">

            {/* 1. Header */}
            <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary-600 p-2 rounded-lg text-white">
                            <BookOpen size={24} />
                        </div>
                        <span className="text-xl font-bold text-slate-900 tracking-tight">Guide PFE Master</span>
                    </div>

                    <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                        <a href="#hero" className="hover:text-primary-600 transition-colors">Accueil</a>
                        <a href="#features" className="hover:text-primary-600 transition-colors">Le Guide</a>
                        <a href="#preview" className="hover:text-primary-600 transition-colors">Aperçu</a>
                        <a href="#stats" className="hover:text-primary-600 transition-colors">Témoignages</a>
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
                                Nouveau Guide 2024
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
                                    href="#preview"
                                    className="px-8 py-4 rounded-full font-bold text-lg text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 bg-white transition-all flex items-center justify-center"
                                >
                                    Voir la démo
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Hero Visual - Stylized Book */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative hidden lg:block perspective-1000"
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

                {/* 4. Users / Stats Section */}
                <section id="stats" className="py-24 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-6">Approuvé par la communauté étudiante</h3>
                                <p className="text-slate-300 text-lg mb-8">
                                    Ne perdez plus de temps à chercher des exemples dispersés. Notre guide centralise les meilleures pratiques utilisées par les majors de promotion.
                                </p>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-700 flex items-center justify-center text-xs font-bold">
                                                <User size={20} />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">500+</div>
                                        <div className="text-slate-400 text-sm">Étudiants guidés</div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    {["97% Satisfaction", "30+ Sections", "100% Gratuit"].map((tag, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                                            <CheckCircle size={16} className="text-green-400" />
                                            <span className="font-medium">{tag}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
                                <div className="flex gap-4 mb-6">
                                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center font-bold text-xl">S</div>
                                    <div>
                                        <div className="font-bold">Sarah M.</div>
                                        <div className="text-sm text-slate-400">Master MIAGE</div>
                                    </div>
                                </div>
                                <p className="text-lg italic text-slate-200">
                                    "L'interface livre est géniale ! C'est beaucoup plus engageant qu'un simple PDF. Les annotations contextuelles m'ont vraiment aidé à comprendre ce qu'on attendait de moi pour la partie méthodologie."
                                </p>
                                <div className="flex gap-1 mt-4 text-amber-400">
                                    {"★★★★★".split('').map((star, i) => <span key={i}>{star}</span>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Preview / CTA Section */}
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

            {/* 6. Footer */}
            <footer className="bg-white border-t border-slate-200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="bg-slate-900 p-1.5 rounded text-white">
                            <BookOpen size={16} />
                        </div>
                        <span className="font-bold text-slate-900">Guide PFE</span>
                    </div>

                    <div className="text-slate-500 text-sm">
                        © 2024 Département Informatique. Tous droits réservés.
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
