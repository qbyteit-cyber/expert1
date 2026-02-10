"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    ChevronRight,
    Activity,
    Zap,
    Settings,
    FileText,
    Users,
    BarChart3
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { useState } from "react";
import dynamic from "next/dynamic";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

interface RolePageTemplateProps {
    title: string;
    subHeadline: string;
    expert: {
        name: string;
        role: string;
        background: string;
        stats: { value: string; label: string }[];
    };
    impact: { value: string; label: string }[];
    techStack: { name: string; icon: any }[];
    responsibilities: { role: string; task: string }[];
    maturityLevel: number; // 0 to 5
}

export function RolePageTemplate({
    title,
    subHeadline,
    expert,
    impact,
    techStack,
    responsibilities,
    maturityLevel
}: RolePageTemplateProps) {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            <div className="fixed inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
                <SecurityMesh />
            </div>

            <div className="relative z-10 font-sans">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Split-Screen Hero */}
                <section className="relative pt-60 pb-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded mb-8 font-mono">
                                    <ShieldCheck className="w-4 h-4 text-primary" />
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                                        Expert Implementation Role
                                    </span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.95]">
                                    {title}
                                </h1>
                                <p className="text-xl text-foreground/60 leading-relaxed font-mono max-w-xl mb-12">
                                    {subHeadline}
                                </p>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setCalculatorOpen(true)}
                                        className="px-8 py-4 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-xl shadow-primary/20"
                                    >
                                        RESERVE EXPERT SLOT
                                    </button>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="glass-card p-10 rounded-[3rem] border-primary/10 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-blueprint opacity-5" />
                                    <div className="relative z-10">
                                        <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                                            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-[2px] shadow-lg shrink-0">
                                                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center text-3xl font-black text-primary font-display uppercase tracking-tighter">
                                                    {expert.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-display font-black text-foreground mb-1">{expert.name}</h3>
                                                <p className="text-primary font-mono font-bold text-sm tracking-tight mb-4">{expert.role}</p>
                                                <p className="text-foreground/50 text-xs font-mono italic leading-relaxed">{expert.background}</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            {expert.stats.map((stat, i) => (
                                                <div key={i} className="bg-foreground/5 rounded-xl p-4 border border-foreground/5">
                                                    <div className="text-2xl font-black text-foreground">{stat.value}</div>
                                                    <div className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Proven Impact Section */}
                <section className="py-32 px-8 bg-foreground/[0.02] border-y border-foreground/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-4 block">Track Record</span>
                            <h2 className="text-4xl font-display font-black text-foreground">Proven Impact</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {impact.map((item, i) => (
                                <div key={i} className="bg-background border border-foreground/10 p-8 rounded-2xl hover:border-primary/50 transition-all text-center group">
                                    <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">{item.value}</div>
                                    <div className="text-xs font-mono font-bold text-foreground/40 uppercase tracking-widest leading-tight">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Stack */}
                <section className="py-20 px-8">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.5em] shrink-0">Expert Tech Stack</div>
                        <div className="flex flex-wrap gap-12 items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                            {techStack.map((tech, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 group cursor-help">
                                    <tech.icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                                    <span className="text-[8px] font-mono font-bold text-foreground opacity-0 group-hover:opacity-100 transition-opacity">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Responsibilities Table */}
                <section className="py-32 px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-display font-black text-foreground mb-4">Roles & Responsibilities</h2>
                            <p className="text-sm text-foreground/50 font-mono italic">Defined engagement boundaries and accountability mapping.</p>
                        </div>
                        <div className="overflow-hidden rounded-[2.5rem] border border-foreground/10 bg-background shadow-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-foreground/5 border-b border-foreground/10 font-mono">
                                    <tr>
                                        <th className="px-8 py-6 text-[10px] uppercase font-black text-foreground/40">Authority Role</th>
                                        <th className="px-8 py-6 text-[10px] uppercase font-black text-foreground/40">Engagement Task</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {responsibilities.map((row, i) => (
                                        <tr key={i} className="border-b border-foreground/5 hover:bg-foreground/[0.02] transition-colors">
                                            <td className="px-8 py-8">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                                    <span className="font-bold text-foreground tracking-tight">{row.role}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-8 text-sm text-foreground/60 font-mono leading-relaxed">{row.task}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Audit Readiness Progress Bar */}
                <section className="py-32 px-8 bg-primary/5 border-y border-primary/10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h3 className="text-2xl font-display font-black text-foreground mb-4 uppercase tracking-tighter">VDA Maturity Trajectory</h3>
                            <p className="text-xs font-mono text-primary font-bold">Scaling from Incomplete (L0) to Established (L3+)</p>
                        </div>

                        <div className="relative">
                            <div className="flex justify-between mb-8">
                                {[0, 1, 2, 3, 4, 5].map((lvl) => (
                                    <div key={lvl} className={`text-[10px] font-black font-mono ${maturityLevel >= lvl ? 'text-primary' : 'text-foreground/20'}`}>
                                        L{lvl}
                                    </div>
                                ))}
                            </div>
                            <div className="h-4 bg-foreground/5 rounded-full overflow-hidden border border-foreground/10">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${(maturityLevel + 1) * 16.6}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-primary to-primary-dark shadow-[20px_0_40px_rgba(8,97,242,0.4)]"
                                />
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-12">
                                <div className="p-6 bg-background border border-foreground/5 rounded-2xl">
                                    <div className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest mb-2 font-black">Current State</div>
                                    <div className="text-sm font-bold text-red-500/70 italic">Legacy Inconsistencies</div>
                                </div>
                                <div className="p-6 bg-background border border-primary/20 rounded-2xl">
                                    <div className="text-[10px] font-mono text-primary uppercase tracking-widest mb-2 font-black">Target State</div>
                                    <div className="text-sm font-bold text-primary italic">Audit-Ready Framework</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-32 px-8">
                    <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl">
                        <div className="absolute inset-0 bg-blueprint opacity-10" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8">
                                Secure Your <br />
                                <span className="text-secondary italic">Infrastructure Lead.</span>
                            </h2>
                            <p className="text-xl text-white/70 mb-12 font-mono max-w-2xl mx-auto italic">
                                Expert {title} integration tailored for complex EU regulatory pipelines.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button
                                    onClick={() => setCalculatorOpen(true)}
                                    className="px-10 py-5 bg-white text-primary font-black rounded-xl hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3"
                                >
                                    SCHEDULE SCOPING SESSION
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer onOpenCalculator={() => setCalculatorOpen(true)} />
            </div>

            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
