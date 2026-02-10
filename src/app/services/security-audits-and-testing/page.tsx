"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
    Shield,
    Lock,
    Activity,
    Cpu,
    Bug,
    Users,
    FileText,
    ChevronRight,
    Search,
    Target,
    Mail,
    Zap,
    Scale,
    Key,
    Database
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { TerminalPulse } from "@/components/ui/TerminalPulse";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const valueProps = [
    {
        icon: Zap,
        title: "Cyber Resilience Enhancement",
        description: "Strengthening your infrastructure against emerging threats."
    },
    {
        icon: Scale,
        title: "Regulatory Compliance",
        description: "ISO 27001, NIS2, DORA, TISAX® alignment and validation."
    },
    {
        icon: Target,
        title: "Offensive Testing",
        description: "Vulnerability Scans & Penetration Testing by industry experts."
    },
    {
        icon: Lock,
        title: "Data Protection",
        description: "Ensuring integrity and confidentiality of your core assets."
    },
    {
        icon: Database,
        title: "Industry-Specific Solutions",
        description: "Tailored audits for Automotive, Aerospace, and Defence."
    }
];

const coreServices = [
    {
        number: "01",
        title: "System Audits",
        focus: "ISO 27001, DORA, NIS2 GAP analysis",
        details: "Comprehensive analysis of your management systems to identify gaps and ensure full alignment with international security standards."
    },
    {
        number: "02",
        title: "Vulnerability Scans",
        focus: "Automated network scanning and risk reporting",
        details: "Rapid detection of security flaws across your technical perimeter using enterprise-grade automated tools and manual expert validation."
    },
    {
        number: "03",
        title: "Phishing Tests",
        focus: "Employee awareness and simulated campaigns",
        details: "Measuring and improving your human firewall through sophisticated, real-world simulated social engineering attacks."
    },
    {
        number: "04",
        title: "Penetration Tests",
        focus: "Real-world attack simulation and remediation",
        details: "Deep-dive offensive engagements designed to exploit vulnerabilities and provide a prioritized roadmap for technical remediation."
    }
];

const frameworks = [
    { name: "ISO 27001", image: "/iso-27001-badge.png" },
    { name: "NIS2", image: "/nis2-badge.png" }, // Assuming these exist or using text if not
    { name: "DORA", image: "/dora-badge.png" },
    { name: "TISAX", image: "/tisax-badge-alt.png" },
    { name: "GDPR", image: "/gdpr-certified-badge.png" }
];

export default function SecurityAuditsPage() {
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
                <section className="relative pt-60 pb-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded mb-8"
                        >
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">
                                Assurance & Validation
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.9]">
                            <TerminalPulse text="Security Audits" delay={500} /><br />
                            <TerminalPulse text="and Testing" delay={1500} className="text-primary" />
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.2 }}
                            className="text-xl text-foreground/60 max-w-2xl mb-12 font-mono leading-relaxed"
                        >
                            We identify weaknesses in your security and strengthen protection in line with global regulations. From technical penetration tests to complex regulatory audits.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2 }}
                            className="flex flex-col sm:flex-row gap-6"
                        >
                            <button
                                onClick={() => setCalculatorOpen(true)}
                                className="px-10 py-5 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-[0_15px_40px_rgba(8,97,242,0.3)] flex items-center gap-3"
                            >
                                BOOK AUDIT READINESS CHECK
                                <ChevronRight className="w-5 h-5" />
                            </button>
                            <a
                                href="/#contact"
                                className="px-10 py-5 bg-transparent border-2 border-foreground/10 text-foreground font-black rounded-xl hover:bg-foreground/5 transition-all flex items-center gap-3"
                            >
                                SCHEDULE A MEETING
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Value Propositions Grid */}
                <section className="py-24 px-8 border-y border-foreground/5 bg-surface/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {valueProps.map((prop, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 text-center group"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                        <prop.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-sm font-bold text-foreground mb-2">{prop.title}</h3>
                                    <p className="text-xs text-foreground/50 leading-relaxed">{prop.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Service Components (4 Pillars) */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <h2 className="text-3xl md:text-5xl font-display font-black text-foreground mb-6">Core Audit Pillars</h2>
                            <p className="text-foreground/50 font-mono">Specialized technical and organizational assessment services.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {coreServices.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-foreground/5 backdrop-blur-md p-8 rounded-2xl border border-foreground/10 hover:border-primary/30 transition-all group relative overflow-hidden"
                                >
                                    <div className="text-4xl font-display font-black text-primary/10 mb-6 group-hover:text-primary/20 transition-colors">
                                        {service.number}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-foreground mb-4">{service.title}</h3>
                                    <div className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest mb-6">
                                        {service.focus}
                                    </div>
                                    <p className="text-sm text-foreground/60 leading-relaxed font-mono">
                                        {service.details}
                                    </p>

                                    {/* Decorative corner element */}
                                    <div className="absolute top-0 right-0 w-12 h-12 bg-primary/5 rounded-bl-3xl -mr-6 -mt-6 group-hover:bg-primary/10 transition-all" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Framework focus section (Badges/Logo Grid) */}
                <section className="py-24 px-8 bg-surface/30 backdrop-blur-sm border-t border-foreground/5">
                    <div className="max-w-7xl mx-auto text-center">
                        <h3 className="text-lg font-display font-semibold text-foreground/40 mb-12 uppercase tracking-[0.3em]">
                            Supported Frameworks & Standards
                        </h3>
                        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {frameworks.map((fw, i) => (
                                <div key={i} className="flex flex-col items-center gap-4">
                                    <div className="h-16 md:h-20 flex items-center justify-center">
                                        {/* Using span/text if images don't exist, but prompt requested logos */}
                                        <img
                                            src={fw.image}
                                            alt={fw.name}
                                            className="h-full w-auto object-contain"
                                            onError={(e) => {
                                                // Fallback for missing images
                                                (e.target as any).style.display = 'none';
                                                (e.target as any).parentElement.innerHTML = `<span class="text-xl font-black font-display text-foreground">${fw.name}</span>`;
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Implementation */}
                <section className="py-32 px-8">
                    <div className="max-w-5xl mx-auto bg-primary/5 rounded-3xl p-12 md:p-20 border border-primary/20 relative overflow-hidden text-center group">
                        <div className="absolute inset-0 bg-blueprint opacity-10" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-8">
                                Ready to Validate Your <br />
                                <span className="text-primary">Technical Integrity?</span>
                            </h2>
                            <p className="text-xl text-foreground/60 mb-12 font-mono max-w-2xl mx-auto">
                                Start with our interactive readiness calculator or skip directly to a technical scoping call.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button
                                    onClick={() => setCalculatorOpen(true)}
                                    className="px-10 py-5 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-[0_15px_40px_rgba(8,97,242,0.3)]"
                                >
                                    LAUNCH CALCULATOR
                                </button>
                                <a
                                    href="/#contact"
                                    className="px-10 py-5 bg-transparent border-2 border-foreground/10 text-foreground font-black rounded-xl hover:bg-foreground/5 transition-all"
                                >
                                    CONTACT EXPERT
                                </a>
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
