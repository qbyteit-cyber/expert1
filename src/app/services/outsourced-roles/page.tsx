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
    CheckCircle2,
    Search,
    Lock,
    EyeOff,
    ClipboardList,
    ShieldAlert,
    ArrowRight
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { TerminalPulse } from "@/components/ui/TerminalPulse";
import Link from "next/link";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const ROLES = [
    {
        title: "Cybersecurity Architect",
        href: "/services/outsourced-roles/cybersecurity-architect",
        icon: LayoutGrid,
        desc: "Secure infrastructure design and Zero Trust implementation."
    },
    {
        title: "Cybersecurity Manager (CISO)",
        href: "/services/outsourced-roles/cybersecurity-manager",
        icon: Shield,
        desc: "Strategic leadership and risk mitigation (CISO-as-a-Service)."
    },
    {
        title: "Internal Auditor",
        href: "/services/outsourced-roles/internal-auditor",
        icon: FileSearch,
        desc: "Pre-certification verification for ISO 27001 & TISAX."
    },
    {
        title: "Risk Management Specialist",
        href: "/services/outsourced-roles/risk-management-specialist",
        icon: ShieldAlert,
        desc: "BIA, Risk ID Cards, and Vendor Risk Assessments."
    },
    {
        title: "Data Privacy Officer (DPO)",
        href: "/services/outsourced-roles/data-privacy-officer",
        icon: EyeOff,
        desc: "Expert GDPR compliance and Privacy-by-Design."
    },
    {
        title: "ISMS Manager",
        href: "/services/outsourced-roles/isms-manager",
        icon: ClipboardList,
        desc: "Continuous maintenance and upkeep of security frameworks."
    },
    {
        title: "Compliance Officer",
        href: "/services/outsourced-roles/compliance-officer",
        icon: Scale,
        desc: "Regulatory mapping for NIS2, DORA, and beyond."
    }
];

export default function OutsourcedRolesIndex() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <SecurityMesh />
            </div>

            <div className="relative z-10">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero Section */}
                <section className="relative pt-60 pb-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded mb-8 font-mono">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                                Authority on Demand
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.9]">
                            Outsourced <br />
                            <span className="text-primary italic">Security Roles.</span>
                        </h1>
                        <p className="text-xl text-foreground/60 max-w-2xl mb-12 font-mono leading-relaxed">
                            Acquire the specific expertise you need without the overhead of full-time hiring. We provide certified professionals to lead, architect, and audit your security posture.
                        </p>
                    </div>
                </section>

                {/* Role Selection Grid */}
                <section className="py-24 px-8 border-t border-foreground/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {ROLES.map((role, i) => (
                                <Link
                                    key={i}
                                    href={role.href}
                                    className="group block bg-foreground/[0.02] border border-foreground/10 p-10 rounded-[2.5rem] hover:border-primary/50 transition-all hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-primary/5"
                                >
                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500">
                                        <role.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-display font-black text-foreground mb-4 uppercase tracking-tighter">
                                        {role.title}
                                    </h3>
                                    <p className="text-sm text-foreground/50 font-mono italic mb-8 h-12">
                                        {role.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-[10px] font-black font-mono text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Expert Profile <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Proof Section */}
                <section className="py-32 px-8 bg-foreground/[0.02]">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-8 leading-tight">
                                Boots on the Ground <br />
                                <span className="text-primary italic">Real Engagement Metrics.</span>
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { label: "Certification programs managed successfully", value: "30+" },
                                    { label: "TISAX frameworks implemented worldwide", value: "26+" },
                                    { label: "Global audit success rate", value: "100%" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex items-center gap-6 p-6 bg-background rounded-2xl border border-foreground/5">
                                        <div className="text-3xl font-black text-primary font-display">{stat.value}</div>
                                        <div className="text-xs font-mono font-bold text-foreground/40 uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="glass-card p-12 rounded-[4rem] border-primary/10">
                            <h3 className="text-2xl font-display font-black text-foreground mb-8 uppercase tracking-tighter italic text-primary">Technical Upkeep.</h3>
                            <p className="text-lg text-foreground/60 font-mono leading-relaxed mb-8">
                                We don't just draft policies; we manage the technical upkeep of security controls, actin as your delegated security arm for OEM audits and regulatory reviews.
                            </p>
                            <button
                                onClick={() => setCalculatorOpen(true)}
                                className="w-full py-5 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-xl shadow-primary/20"
                            >
                                REQUEST EXPERT ON-BOARDING
                            </button>
                        </div>
                    </div>
                </section>

                <Footer onOpenCalculator={() => setCalculatorOpen(true)} />
            </div>

            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
