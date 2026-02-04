"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, FileText } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-blueprint py-24 px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-mono text-sm uppercase tracking-widest">Back to Dashboard</span>
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-black text-foreground tracking-tighter">
                            Privacy <span className="text-primary">Policy</span>
                        </h1>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <div className="px-3 py-1 bg-foreground/5 rounded border border-foreground/10 flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-[10px] font-mono text-foreground/60 uppercase">VDA ISA 6.0 Compliant</span>
                        </div>
                        <div className="px-3 py-1 bg-foreground/5 rounded border border-foreground/10 flex items-center gap-2">
                            <Lock className="w-3 h-3 text-secondary" />
                            <span className="text-[10px] font-mono text-foreground/60 uppercase">High Protection (AL3)</span>
                        </div>
                    </div>
                </div>

                {/* Content Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card rounded-[2rem] p-8 md:p-12 border border-foreground/10 shadow-2xl space-y-12"
                >
                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-primary mb-2">
                            <FileText className="w-5 h-5" />
                            <h2 className="font-mono text-sm uppercase tracking-[0.3em] font-bold">1. Data Controller Identification</h2>
                        </div>
                        <p className="text-foreground/70 leading-relaxed font-mono text-sm">
                            Information Security Consulting SRL (hereinafter &quot;itis-secure&quot;) operates as the Data Controller under Article 4(7) of the GDPR. We maintain a strictly hardened Information Security Management System (ISMS) to ensure the Confidentiality, Integrity, and Availability (CIA) of all processed assets.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 bg-foreground/[0.02] p-6 rounded-xl border border-foreground/5">
                            <div>
                                <h3 className="text-[10px] font-mono text-primary uppercase mb-2">Registered Offices</h3>
                                <p className="text-sm text-foreground/60">
                                    <span className="text-foreground font-bold">Sibiu Hub:</span> Str. Liliacului nr 2, Cisnadie, Sibiu<br />
                                    <span className="text-foreground font-bold">Brasov Hub:</span> Str. Zaharia Stancu 8A, ap 603, Brasov
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[10px] font-mono text-primary uppercase mb-2">DPO Contact</h3>
                                <p className="text-sm text-foreground/60">
                                    Iulian Bozdoghina<br />
                                    <a href="mailto:Iulian.Bozdoghina@itis-secure.com" className="text-primary hover:underline">Iulian.Bozdoghina@itis-secure.com</a><br />
                                    +40 741 711 770
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-primary mb-2">
                            <ShieldCheck className="w-5 h-5" />
                            <h2 className="font-mono text-sm uppercase tracking-[0.3em] font-bold">2. Scope and Compliance (VDA ISA 6.0)</h2>
                        </div>
                        <p className="text-foreground/70 leading-relaxed font-mono text-sm">
                            This policy applies to all digital interactions with the itis-secure domain. In accordance with VDA ISA 6.0 requirements for &quot;High Protection&quot; (Assessment Level 3), itis-secure implements technical and organizational measures (TOMs) specifically designed for the automotive supply chain.
                        </p>
                        <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                            <p className="text-[10px] font-mono text-red-400 uppercase leading-tight">
                                FAILURE TO ADHERE TO THESE STANDARDS CONSTITUTES A MAJOR NON-CONFORMITY IN THE CONTEXT OF TISAX® ASSESSMENTS.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-3 text-primary mb-2">
                            <Lock className="w-5 h-5" />
                            <h2 className="font-mono text-sm uppercase tracking-[0.3em] font-bold">3. Technical Protection Measures</h2>
                        </div>
                        <p className="text-foreground/70 leading-relaxed font-mono text-sm">
                            itis-secure does not implement &quot;standard&quot; web configurations. Our &quot;Digital Fortress&quot; architecture employs the following mandatory controls:
                        </p>

                        <div className="space-y-4">
                            <div className="border border-foreground/5 p-4 rounded-lg hover:bg-foreground/[0.02] transition-colors">
                                <h4 className="text-primary text-[10px] font-mono uppercase mb-1">3.1 Encryption in Transit (TLS 1.3)</h4>
                                <p className="text-sm text-foreground/60">All data transmission is enforced via TLS 1.3 (RFC 8446). Supporting legacy, insecure protocols (TLS 1.1 or lower) is strictly prohibited.</p>
                            </div>
                            <div className="border border-foreground/5 p-4 rounded-lg hover:bg-foreground/[0.02] transition-colors">
                                <h4 className="text-primary text-[10px] font-mono uppercase mb-1">3.2 HSTS (High Security)</h4>
                                <p className="text-sm text-foreground/60">We implement HSTS with a max-age of 31,536,000s, subdomains and preload, preventing protocol downgrade attacks.</p>
                            </div>
                            <div className="border border-foreground/5 p-4 rounded-lg hover:bg-foreground/[0.02] transition-colors">
                                <h4 className="text-primary text-[10px] font-mono uppercase mb-1">3.3 Advanced Security Headers</h4>
                                <p className="text-sm text-foreground/60">Enforcement of A+ rated headers including restrictive CSP, X-Frame-Options: DENY, and device-level Permissions-Policy.</p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-primary mb-2">
                            <Link href="#" className="flex items-center gap-3">
                                <FileText className="w-5 h-5" />
                                <h2 className="font-mono text-sm uppercase tracking-[0.3em] font-bold">4. Legal Basis (Art. 6 GDPR)</h2>
                            </Link>
                        </div>
                        <ul className="space-y-2">
                            {[
                                "Art. 6(1)(b): Fulfillment of contractual obligations for automotive security audits.",
                                "Art. 6(1)(c): Legal compliance (e.g., tax regulations).",
                                "Art. 6(1)(f): Legitimate interest in securing our infrastructure against cyber threats."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-foreground/60 font-mono">
                                    <span className="text-primary">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Footer / Signature */}
                    <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-end gap-6 text-foreground/40 font-mono text-[10px]">
                        <div className="space-y-1">
                            <p>LAST AUDIT DATE: 04 FEBRUARY 2026</p>
                            <p>VERSION: 1.0.0 (RELEASED)</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-primary mb-2 underline underline-offset-4">SENIOR LEAD AUDITOR | ITIS-SECURE ISMS TEAM</p>
                            <p>SYSTEM HASH: 7A48324-SECURE-DEPLOY</p>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Accent */}
                <div className="mt-12 text-center">
                    <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-foreground/20">
                        Information Security Management System • VDA ISA 6.0 • ISO 27001
                    </p>
                </div>
            </div>
        </main>
    );
}
