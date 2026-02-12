"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { useEffect, useState } from "react";

interface MissionCriticalLandingProps {
    onOpenCalculator: () => void;
}

const STATS = [
    { label: "Client Contracts Secured", value: "€847M+" },
    { label: "Automotive Clients", value: "10+" },
    { label: "Years Zero Non-Conformities", value: "5" },
    { label: "Avg. Implementation", value: "95 days" }
];

const heroSlides = [
    { title: "Automotive", image: "/Automotive-Industry.png" },
    { title: "Aerospace", image: "/Aerospace&Defence.png" },
    { title: "Defence", image: "/Aerospace&Defence.png" }
];

export default function MissionCriticalLanding({ onOpenCalculator }: MissionCriticalLandingProps) {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen pt-32 pb-20 px-8 flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded mb-8 font-mono"
                        >
                            <ShieldCheck className="w-4 h-4 text-primary" />
                            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                                Enterprise-Grade TISAX & ISO 27001 Compliance
                            </span>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-[0.9]">
                            Securing <br />
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={activeSlide}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="text-primary italic block"
                                >
                                    {heroSlides[activeSlide].title}.
                                </motion.span>
                            </AnimatePresence>
                        </h1>

                        <div className="space-y-6 mb-12">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl text-foreground font-medium leading-snug"
                            >
                                Direct technical authority for TISAX®, Aerospace and Defence security assessments.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg text-foreground/60 leading-relaxed max-w-xl"
                            >
                                We don't speak marketing. We create audit-proof high-integrity ecosystems, that scale with your business.
                            </motion.p>
                        </div>

                        {/* Call to Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-6"
                        >
                            <button
                                onClick={onOpenCalculator}
                                className="relative px-10 py-5 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 group uppercase tracking-widest text-[13px] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                <span className="relative">BOOK FREE GAP ASSESSMENT</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
                            </button>
                            <a
                                href="/resources"
                                className="px-10 py-5 bg-foreground/5 backdrop-blur-md border border-foreground/10 text-foreground font-black rounded-xl hover:bg-foreground/10 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-[13px]"
                            >
                                <Zap className="w-5 h-5 text-primary" />
                                Download TISAX Checklist
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Carousel Slider */}
                    <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-foreground/5 bg-foreground/5 hidden lg:block">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSlide}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={heroSlides[activeSlide].image}
                                    alt={heroSlides[activeSlide].title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Carousel Indicators */}
                        <div className="absolute bottom-8 left-8 flex gap-2">
                            {heroSlides.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${activeSlide === idx ? "w-8 bg-primary" : "w-1.5 bg-white/30"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 w-full pt-12 border-t border-foreground/5 mt-24">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="flex flex-col"
                        >
                            <div className="text-3xl md:text-5xl font-display font-black text-foreground mb-2 italic">
                                {stat.value}
                            </div>
                            <div className="text-[10px] font-mono font-bold text-foreground/30 uppercase tracking-[0.2em] leading-tight">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Cyber Scanline effect */}
            <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
        </section>
    );
}
