"use client";

import { motion } from "framer-motion";
import {
    Zap,
    ShieldCheck,
    Search,
    BarChart3,
    Clock,
    Users,
    TrendingUp,
    Lock
} from "lucide-react";

const REASONS = [
    {
        icon: Zap,
        title: "Enterprise-Proven Methodology",
        desc: "Our surgical approach is honed from 26+ successful AL3 assessments for global suppliers."
    },
    {
        icon: Search,
        title: "Audit-First Strategy",
        desc: "We build your security program from the perspective of an auditor, ensuring zero major gaps."
    },
    {
        icon: Clock,
        title: "Fixed-Timeline Pass",
        desc: "From Gap Analysis to Label in 95 days on average. We respect your RFP deadlines."
    },
    {
        icon: TrendingUp,
        title: "High Integrity ROI",
        desc: "Dual certification (ISO + TISAX) frameworks that reduce implementation costs by 30%."
    }
];

export default function WhyITISSecure() {
    return (
        <section className="py-32 px-8 bg-surface/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <span className="text-[10px] font-black font-mono text-primary uppercase tracking-[0.5em] mb-4 block">The Competitive Edge</span>
                    <h2 className="text-4xl md:text-6xl font-display font-black text-foreground italic">Why Automotive Leaders <span className="text-primary not-italic">Trust Us.</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {REASONS.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-10 rounded-[3rem] border-primary/10 hover:border-primary transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                <reason.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-display font-black text-foreground mb-4 uppercase tracking-tighter leading-tight">
                                {reason.title}
                            </h3>
                            <p className="text-xs text-foreground/50 font-mono leading-relaxed italic">
                                {reason.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
