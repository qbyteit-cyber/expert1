"use client";

import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
    ShieldCheck,
    Lock,
    Users,
    Activity,
    ChevronRight,
    CheckCircle2,
    Database,
    Zap,
    BarChart3,
    ArrowRight,
    AlertTriangle,
    FileText,
    Monitor,
    Shield,
    Globe,
    Search,
    RefreshCcw,
    Scale,
    Network,
    FileSpreadsheet,
    Building2,
    Factory,
    Stethoscope,
    ZapOff,
    Coins,
    Server,
    Truck
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { TerminalPulse } from "@/components/ui/TerminalPulse";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const PILLARS = [
    {
        id: "PLAN",
        title: "Governance & Risk Management",
        pillar: "Pillar 1",
        desc: "Foundational phase focusing on gap analysis and strategic scoping.",
        items: [
            "Comprehensive NIS2 GAP Analysis",
            "Definition of ISMS Scope for NIS2",
            "Information Security Requirements Analysis",
            "Risk Assessment Framework Setup"
        ],
        icon: Target
    },
    {
        id: "DO",
        title: "Technical Hardening",
        pillar: "Pillar 2",
        desc: "Operational implementation of mandatory security controls.",
        items: [
            "Encryption of Data in Transit & Rest",
            "Modern Identity & Access Management (IAM)",
            "Network Segmentation Implementation",
            "Business Continuity Hardware Redundancy"
        ],
        icon: Zap
    },
    {
        id: "CHECK",
        title: "Incident Response & Reporting",
        pillar: "Pillar 3",
        desc: "Establishing the surveillance and reporting capability.",
        items: [
            "72-hour Notification Workflow Design",
            "Real-time Incident Reporting Dashboards",
            "Management Review Cycle Establishment",
            "Control Monitoring & Auditing"
        ],
        icon: Activity
    },
    {
        id: "ACT",
        title: "Continuous Improvement",
        pillar: "Pillar 4",
        desc: "Ensuring long-term resilience and legal alignment.",
        items: [
            "Corrective & Preventive Action (CAPA) Procedures",
            "Ongoing Compliance with EU Privacy Laws",
            "Regular Vulnerability Disclosure Programs",
            "Supply Chain Security Re-assessments"
        ],
        icon: RefreshCcw
    }
];

const ENTITY_CATEGORIES = {
    high: {
        title: "High Criticality Sectors",
        sectors: ["Energy", "Health", "Finance", "Transport", "Water", "Public Admin", "Space"],
        entity: "Essential Entity",
        requirements: [
            "Strict supervisory and enforcement measures",
            "Mandatory on-site and off-site inspections",
            "Random audits and data requests",
            "Active oversight of risk management implementation"
        ],
        fines: "Up to €10 Million or 2% of global turnover"
    },
    other: {
        title: "Other Critical Sectors",
        sectors: ["Manufacturing", "Food", "Digital Providers", "Waste Management", "Chemicals", "Postal/Courier"],
        entity: "Important Entity",
        requirements: [
            "Ex-post supervisory measures",
            "Audits triggered by evidence of non-compliance",
            "Less intensive oversight compared to Essential",
            "Full implementation of Art. 21 risk management"
        ],
        fines: "Up to €7 Million or 1.4% of global turnover"
    }
};

function Target(props: any) {
    return <Search {...props} />;
}

export default function NIS2Page() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);
    const [selectedEntitySector, setSelectedEntitySector] = useState<'high' | 'other' | null>(null);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            {/* EU Themed Background */}
            <div className="fixed inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
                <SecurityMesh />
            </div>

            <div className="relative z-10 font-sans">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero Section */}
                <section className="relative pt-60 pb-32 px-8 overflow-hidden">
                    <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[1200px] h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
                                    <Globe className="w-4 h-4 text-blue-500" />
                                    <span className="text-[10px] font-mono font-black text-blue-500 uppercase tracking-[0.3em]">
                                        EU Cybersecurity Directive 2022/2555
                                    </span>
                                </div>

                                <h1 className="text-5xl md:text-8xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.9]">
                                    NIS2: Engineering <br />
                                    <span className="text-primary italic">Resilience.</span>
                                </h1>

                                <p className="text-xl text-foreground/60 leading-relaxed font-mono max-w-xl mb-12">
                                    Moving beyond simple compliance to robust cybersecurity implementation. We help <span className="text-foreground font-bold underline decoration-primary decoration-2 underline-offset-4">Essential</span> and <span className="text-foreground font-bold underline decoration-primary decoration-2 underline-offset-4">Important</span> entities meet the new EU standards.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <button
                                        onClick={() => setCalculatorOpen(true)}
                                        className="px-8 py-4 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-xl shadow-primary/20"
                                    >
                                        BOOK NIS2 SCOPING SESSION
                                    </button>
                                    <a
                                        href="#classifier"
                                        className="px-8 py-4 bg-foreground/5 border border-foreground/10 text-foreground font-black rounded-xl hover:bg-foreground/10 transition-all flex items-center gap-2"
                                    >
                                        ENTITY CLASSIFIER
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="relative hidden lg:block"
                            >
                                <div className="glass-card p-12 rounded-[3rem] border-primary/20 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-blueprint opacity-5" />
                                    <div className="relative z-10 space-y-8">
                                        <div className="flex items-center justify-between border-b border-foreground/5 pb-6">
                                            <span className="text-[10px] font-mono font-bold text-foreground/40 uppercase tracking-widest">Compliance Node</span>
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <div key={i} className="w-1 h-3 bg-primary/20 rounded-full" />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-4 font-mono">
                                            <div className="flex items-center gap-4 text-primary">
                                                <div className="w-6 h-6 rounded-full border border-primary flex items-center justify-center text-[10px]">&gt;</div>
                                                <span className="text-xs font-bold leading-tight">ARTICLE 21: RISK MGMT MEASURES</span>
                                            </div>
                                            <div className="flex items-center gap-4 text-foreground/40">
                                                <div className="w-6 h-6 rounded-full border border-foreground/10 flex items-center justify-center text-[10px]">&gt;</div>
                                                <span className="text-xs font-bold leading-tight">ARTICLE 23: REPORTING OBLIGATIONS</span>
                                            </div>
                                            <div className="flex items-center gap-4 text-foreground/40">
                                                <div className="w-6 h-6 rounded-full border border-foreground/10 flex items-center justify-center text-[10px]">&gt;</div>
                                                <span className="text-xs font-bold leading-tight">SUPPLY CHAIN RESILIENCE (TPISR)</span>
                                            </div>
                                        </div>
                                        <div className="pt-6 border-t border-foreground/5">
                                            <p className="text-[10px] text-foreground/30 uppercase tracking-widest italic mb-2">Technical Readiness</p>
                                            <div className="w-full h-1 bg-foreground/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "68%" }}
                                                    transition={{ duration: 2, delay: 1 }}
                                                    className="h-full bg-primary"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Four Pillars / PDCA Section */}
                <section className="py-32 px-8 bg-foreground/[0.02]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-4 block underline decoration-primary decoration-4 underline-offset-8">Implementation Framework</span>
                            <h2 className="text-4xl md:text-6xl font-display font-black text-foreground tracking-tighter">
                                The Four Pillars of NIS2 Readiness
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {PILLARS.map((pillar, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group bg-background border border-foreground/10 p-10 rounded-[2.5rem] hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 h-full flex flex-col"
                                >
                                    <div className="mb-8 flex justify-between items-start">
                                        <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                            <pillar.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-[10px] font-mono font-black text-primary/40 group-hover:text-primary transition-colors">{pillar.id}</span>
                                    </div>
                                    <div className="flex-grow">
                                        <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest mb-2 block">{pillar.pillar}</span>
                                        <h3 className="text-xl font-bold mb-4 leading-tight">{pillar.title}</h3>
                                        <p className="text-sm text-foreground/50 font-mono mb-8 leading-relaxed italic">{pillar.desc}</p>
                                        <ul className="space-y-3">
                                            {pillar.items.map((item, idx) => (
                                                <li key={idx} className="flex gap-3 text-xs font-mono text-foreground/70 group-hover:text-foreground transition-colors">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Supply Chain Security (TPISR Integration) */}
                <section className="py-32 px-8 overflow-hidden relative">
                    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/2 rounded-full blur-[100px] -mr-400 -mb-400" />

                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative z-10 p-1 bg-gradient-to-br from-primary/20 to-transparent rounded-[3rem]"
                                >
                                    <div className="bg-background rounded-[2.9rem] p-12 overflow-hidden relative">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-primary/20" />
                                        <div className="flex items-center gap-6 mb-12">
                                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                                                <Network className="w-8 h-8 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-display font-black uppercase tracking-tighter">TPISR Integration</h4>
                                                <p className="text-xs font-mono text-primary font-bold">Third-Party Information Security Requirements</p>
                                            </div>
                                        </div>
                                        <div className="space-y-8 relative">
                                            {[
                                                { label: "Vendor Risk Assessment", val: "Critical" },
                                                { label: "Business Impact Analysis", val: "Mandatory" },
                                                { label: "Supply Chain Mapping", val: "Encrypted" }
                                            ].map((node, i) => (
                                                <div key={i} className="flex justify-between items-center bg-foreground/5 p-4 rounded-xl border border-foreground/5">
                                                    <span className="text-sm font-mono font-bold">{node.label}</span>
                                                    <span className="text-[10px] font-black uppercase text-primary border border-primary/20 px-2 py-0.5 rounded italic">{node.val}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                                {/* Decorative elements */}
                                <div className="absolute -top-10 -left-10 w-32 h-32 border border-primary/10 rounded-full animate-[ping_10s_linear_infinity]" />
                            </div>

                            <div>
                                <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-8">Supply Chain Resilience</h2>
                                <p className="text-lg text-foreground/70 font-mono leading-relaxed mb-8">
                                    NIS2 mandates stricter security for your supply chain. We leverage our <span className="text-primary font-bold">TPISR expertise</span> to provide comprehensive security audits for your critical partners.
                                </p>
                                <div className="bg-foreground/5 border-l-4 border-primary p-6 rounded-r-2xl italic font-mono text-sm text-foreground/60">
                                    "Organizations must assess the cybersecurity practices of their direct suppliers and service providers as part of their risk management." - Art. 21(2)(d)
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interactive Entity Classifier */}
                <section id="classifier" className="py-32 px-8 bg-foreground/5 border-y border-foreground/10 scroll-mt-24">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-4 block">Compliance Diagnostic</span>
                            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-6">Interactive Entity Classifier</h2>
                            <p className="text-foreground/50 font-mono text-sm max-w-xl mx-auto">Identify your obligations under the NIS2 directive based on your sector and organizational criticality.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <button
                                onClick={() => setSelectedEntitySector('high')}
                                className={`p-10 rounded-[2rem] border-2 transition-all duration-500 text-left group relative overflow-hidden ${selectedEntitySector === 'high'
                                        ? "bg-primary text-white border-primary shadow-2xl shadow-primary/30"
                                        : "bg-background border-foreground/10 hover:border-primary/40 text-foreground"
                                    }`}
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <ZapOff className="w-40 h-40 rotate-12" />
                                </div>
                                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${selectedEntitySector === 'high' ? 'bg-white/20' : 'bg-primary/10'}`}>
                                    <Stethoscope className={selectedEntitySector === 'high' ? 'text-white' : 'text-primary'} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 font-display uppercase tracking-tight">High Criticality</h3>
                                <p className={`text-sm font-mono leading-relaxed ${selectedEntitySector === 'high' ? 'text-white/70' : 'text-foreground/50'}`}>
                                    Energy, Health, Finance, Transport, Water, Public Admin, Space.
                                </p>
                            </button>

                            <button
                                onClick={() => setSelectedEntitySector('other')}
                                className={`p-10 rounded-[2rem] border-2 transition-all duration-500 text-left group relative overflow-hidden ${selectedEntitySector === 'other'
                                        ? "bg-primary text-white border-primary shadow-2xl shadow-primary/30"
                                        : "bg-background border-foreground/10 hover:border-primary/40 text-foreground"
                                    }`}
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Truck className="w-40 h-40 -rotate-12" />
                                </div>
                                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${selectedEntitySector === 'other' ? 'bg-white/20' : 'bg-primary/10'}`}>
                                    <Factory className={selectedEntitySector === 'other' ? 'text-white' : 'text-primary'} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 font-display uppercase tracking-tight">Other Critical</h3>
                                <p className={`text-sm font-mono leading-relaxed ${selectedEntitySector === 'other' ? 'text-white/70' : 'text-foreground/50'}`}>
                                    Manufacturing, Food, Digital Providers, Waste, Chemicals, Postal.
                                </p>
                            </button>
                        </div>

                        <AnimatePresence mode="wait">
                            {selectedEntitySector && (
                                <motion.div
                                    key={selectedEntitySector}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="bg-background border border-foreground/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
                                >
                                    <div className="bg-primary px-8 py-4 flex justify-between items-center text-white">
                                        <div className="flex items-center gap-2">
                                            <AlertTriangle className="w-4 h-4" />
                                            <span className="text-xs font-mono font-black uppercase tracking-widest">Classification Results</span>
                                        </div>
                                        <span className="text-[10px] font-mono text-white/60">Art 3. NIS2 DIRECTIVE</span>
                                    </div>
                                    <div className="p-10 md:p-16">
                                        <div className="grid md:grid-cols-2 gap-16">
                                            <div>
                                                <h4 className="text-[10px] font-mono font-black text-primary uppercase tracking-[0.3em] mb-4">Entity Status</h4>
                                                <div className="text-4xl font-display font-black text-foreground mb-8">
                                                    {ENTITY_CATEGORIES[selectedEntitySector].entity}
                                                </div>
                                                <div className="space-y-4">
                                                    {ENTITY_CATEGORIES[selectedEntitySector].requirements.map((req, i) => (
                                                        <div key={i} className="flex gap-4 group">
                                                            <div className="w-5 h-5 rounded-full border border-primary/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:border-primary transition-all">
                                                                <CheckCircle2 className="w-3 h-3 text-primary group-hover:text-white" />
                                                            </div>
                                                            <span className="text-sm text-foreground/60 italic font-mono leading-tight">{req}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-3xl text-center group">
                                                    <Coins className="w-12 h-12 text-red-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                                                    <h4 className="text-[10px] font-mono font-black text-red-500 uppercase tracking-widest mb-2">Non-Compliance Fines</h4>
                                                    <div className="text-3xl font-display font-black text-foreground leading-none">
                                                        {ENTITY_CATEGORIES[selectedEntitySector].fines}
                                                    </div>
                                                </div>
                                                <p className="mt-8 text-[10px] text-center text-foreground/30 font-mono uppercase tracking-widest">Reference: Art 34 of Directive (EU) 2022/2555</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>

                {/* ISO 27001 Foundation / Evidence Management */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
                            <div className="bg-foreground/5 border border-foreground/10 rounded-[3rem] p-12 flex flex-col justify-between group hover:border-primary/30 transition-all">
                                <div>
                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                                        <Scale className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-display font-black text-foreground mb-6">ISO 27001 Mapping</h3>
                                    <p className="text-lg text-foreground/50 font-mono leading-relaxed mb-8">
                                        Our <span className="text-foreground font-bold">ISO 27001 implementation</span> provides the normative foundation for NIS2. We map Annex A controls directly to Article 21 requirements to ensure zero duplication of effort.
                                    </p>
                                </div>
                                <div className="p-4 bg-background border border-foreground/10 rounded-2xl flex items-center justify-between">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                            <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                        </div>
                                        <span className="text-xs font-mono font-bold">ISO 27001:2022 Foundation</span>
                                    </div>
                                    <div className="h-4 w-[1px] bg-foreground/10" />
                                    <span className="text-[10px] font-mono font-black text-primary uppercase">92% Requirement Coverage</span>
                                </div>
                            </div>

                            <div className="bg-foreground/5 border border-foreground/10 rounded-[3rem] p-12 flex flex-col justify-between group hover:border-primary/30 transition-all">
                                <div>
                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                                        <FileSpreadsheet className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-display font-black text-foreground mb-6">Evidence Management</h3>
                                    <p className="text-lg text-foreground/50 font-mono leading-relaxed mb-8">
                                        We provide centralized "Control of Evidence and Records" specifically designed for NIS2 audits. From logging to board-level reporting, our technical stack captures every auditor-requested artifact.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-background/50 p-4 rounded-xl border border-foreground/5">
                                        <div className="text-[10px] font-mono font-black text-foreground/30 uppercase tracking-widest mb-1">Live Logs</div>
                                        <div className="flex gap-1 h-2">
                                            {[...Array(8)].map((_, i) => (
                                                <div key={i} className="flex-1 bg-primary/20 rounded-full h-full" />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-background/50 p-4 rounded-xl border border-foreground/5">
                                        <div className="text-[10px] font-mono font-black text-foreground/30 uppercase tracking-widest mb-1">Reports</div>
                                        <div className="text-sm font-bold text-primary italic">Automated PDF</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-32 px-8">
                    <div className="max-w-5xl mx-auto rounded-[3.5rem] p-1 md:p-1.5 bg-gradient-to-br from-primary to-primary-dark">
                        <div className="bg-background rounded-[3.4rem] p-12 md:p-20 text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/[0.03]" />
                            <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-8">
                                    Architect Your <br />
                                    <span className="text-primary italic">NIS2 Compliance Engine.</span>
                                </h2>
                                <p className="text-xl text-foreground/60 mb-12 font-mono max-w-2xl mx-auto italic leading-relaxed">
                                    The EU directive isn't just a list of rules—it's a technical mandate for national security. Start your scoping session today.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <button
                                        onClick={() => setCalculatorOpen(true)}
                                        className="px-12 py-5 bg-primary text-white font-black rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3"
                                    >
                                        BOOK NIS2 SCOPING SESSION
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                    <button className="px-12 py-5 bg-transparent border-2 border-foreground/10 text-foreground font-black rounded-2xl hover:bg-foreground/5 transition-all">
                                        TECHNICAL READINESS CHECKLIST
                                    </button>
                                </div>
                                <div className="mt-8 pt-8 border-t border-foreground/5 text-[10px] font-mono font-black text-foreground/30 uppercase tracking-[0.4em]">
                                    Essential and Important Entities Implementation
                                </div>
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
