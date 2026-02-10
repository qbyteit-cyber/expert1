"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
    Shield,
    Users,
    FileSearch,
    LayoutGrid,
    Zap,
    TrendingDown,
    Scale,
    RefreshCcw,
    ChevronRight,
    CheckCircle2
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { TerminalPulse } from "@/components/ui/TerminalPulse";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const SECURITY_ROLES = [
    {
        title: "Cybersecurity Manager",
        subtitle: "(CISO/CSO as a Service)",
        icon: Shield,
        responsibilities: [
            "Strategic security leadership and roadmap",
            "Information security policy development",
            "Board-level reporting & risk communication",
            "Incident response management oversight"
        ]
    },
    {
        title: "Cybersecurity Architect",
        subtitle: "Technical Design & Ops",
        icon: LayoutGrid,
        responsibilities: [
            "Secure infrastructure & cloud design",
            "Zero Trust architecture implementation",
            "Technical hardening & security controls",
            "Security tool stack optimization"
        ]
    },
    {
        title: "Cybersecurity Auditor",
        subtitle: "Compliance & Assurance",
        icon: FileSearch,
        responsibilities: [
            "Internal audit execution & planning",
            "ISO 27001 & TISAX® gap analysis",
            "Vendor security assessments",
            "Continuous compliance monitoring"
        ]
    },
    {
        title: "Risk Management Specialist",
        subtitle: "Analysis & Governance",
        icon: Users,
        responsibilities: [
            "IT risk assessment & threat modeling",
            "Business Impact Analysis (BIA)",
            "Third-party risk management",
            "Compliance reporting & documentation"
        ]
    }
];

const VALUE_PROPS = [
    {
        icon: Zap,
        title: "Expertise on Demand",
        description: "Immediate access to Senior-level talent (CISM, CISSP, CISA) without long recruitment cycles."
    },
    {
        icon: TrendingDown,
        title: "Cost Efficiency",
        description: "Professional results at a fraction of the cost of a full-time executive suite and overheads."
    },
    {
        icon: Scale,
        title: "Impartiality",
        description: "Independent viewpoints for audits and risk assessments across your organization's departments."
    },
    {
        icon: RefreshCcw,
        title: "Continuity",
        description: "Guaranteed coverage for critical security functions without the risk of vacancies or turnover."
    }
];

export default function OutsourcingRolesPage() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            {/* 3D Background */}
            <div className="fixed inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
                <SecurityMesh />
            </div>

            <div className="relative z-10">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero Section */}
                <section className="relative pt-60 pb-32 px-8 text-center md:text-left">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 rounded mb-8"
                        >
                            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                            <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-widest">
                                Professional Expertise
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.9]">
                            <TerminalPulse text="Outsourcing" delay={500} /><br />
                            <TerminalPulse text="Security Roles" delay={1500} className="text-secondary" />
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.2 }}
                            className="text-xl text-foreground/60 max-w-2xl mb-12 font-mono leading-relaxed mx-auto md:mx-0"
                        >
                            Acquire the specific expertise you need without the overhead of full-time hiring. We provide certified professionals to lead, architect, and audit your security posture.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
                        >
                            <a
                                href="/#contact"
                                className="px-10 py-5 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-[0_15px_40px_rgba(8,97,242,0.3)] flex items-center gap-3"
                            >
                                FIND YOUR SECURITY EXPERT
                                <ChevronRight className="w-5 h-5" />
                            </a>
                            <button
                                className="px-10 py-5 bg-transparent border-2 border-foreground/10 text-foreground font-black rounded-xl hover:bg-foreground/5 transition-all flex items-center gap-3"
                            >
                                DOWNLOAD ROLES SPECIFICATION
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* Role Grid Section */}
                <section className="py-24 px-8 border-y border-foreground/5 bg-surface/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {SECURITY_ROLES.map((role, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-foreground/5 backdrop-blur-md p-8 rounded-2xl border border-foreground/10 hover:border-secondary/30 transition-all group overflow-hidden"
                                >
                                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                                        <role.icon className="w-6 h-6 text-secondary" />
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-foreground mb-1">
                                        {role.title}
                                    </h3>
                                    <div className="text-[10px] font-mono font-bold text-secondary/60 uppercase tracking-widest mb-8">
                                        {role.subtitle}
                                    </div>

                                    <div className="space-y-4">
                                        <div className="text-[10px] font-mono font-bold text-foreground/40 uppercase tracking-widest">
                                            Key Responsibilities
                                        </div>
                                        <ul className="space-y-3">
                                            {role.responsibilities.map((resp, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-foreground/60 leading-tight">
                                                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Value Propositions Section */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <h2 className="text-3xl md:text-5xl font-display font-black text-foreground mb-6">Why Outsource?</h2>
                            <p className="text-foreground/50 font-mono">The strategic advantages of security leadership as a service.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                            {VALUE_PROPS.map((prop, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex flex-col items-center text-center group"
                                >
                                    <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <prop.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-4">{prop.title}</h3>
                                    <p className="text-sm text-foreground/50 leading-relaxed font-mono px-4">
                                        {prop.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Conversion Path Section */}
                <section className="py-32 px-8">
                    <div className="max-w-5xl mx-auto bg-foreground/5 rounded-3xl p-12 md:p-20 border border-secondary/10 relative overflow-hidden text-center group">
                        <div className="absolute inset-0 bg-blueprint opacity-10" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-8">
                                Secure Your Leadership <br />
                                <span className="text-secondary">On Demand.</span>
                            </h2>
                            <p className="text-xl text-foreground/60 mb-12 font-mono max-w-2xl mx-auto">
                                Bridge the expertise gap today. Let's discuss your organization's specific security leadership requirements.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <a
                                    href="/#contact"
                                    className="px-10 py-5 bg-secondary text-black font-black rounded-xl hover:scale-105 transition-all shadow-[0_15px_40px_rgba(201,160,99,0.3)]"
                                >
                                    CONTACT SECURITY EXPERT
                                </a>
                                <button
                                    onClick={() => setCalculatorOpen(true)}
                                    className="px-10 py-5 bg-transparent border-2 border-foreground/10 text-foreground font-black rounded-xl hover:bg-foreground/5 transition-all"
                                >
                                    READINESS CHECKLIST
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer onOpenCalculator={() => setCalculatorOpen(true)} />
            </div>

            {/* Readiness Calculator Modal */}
            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
