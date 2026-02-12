"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import {
    Building2,
    Zap,
    Factory,
    Car,
    Stethoscope,
    Code2,
    Cpu,
    Landmark,
    Truck,
    Plane,
    ArrowRight
} from "lucide-react";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const industries = [
    {
        icon: Car,
        title: "Automotive Industry",
        headline: "Securing the Future of Connected Mobility.",
        desc: "We ensure the security of automotive systems, protect intellectual property, and support manufacturers and suppliers in achieving cyber resilience across the supply chain. From TISAX compliance to vehicle-to-everything (V2X) security.",
        image: "/Automotive-Industry.png"
    },
    {
        icon: Plane,
        title: "Aerospace & Defence",
        headline: "Mission-Critical Protection for Aerospace & Defence.",
        desc: "We provide specialized cybersecurity solutions for the aerospace and defence sectors, ensuring compliance with AS9100D and protecting critical avionics systems, ground control, and satellite communications. Our frameworks meet the highest military and civil aviation requirements.",
        image: "https://images.unsplash.com/photo-1564613271113-1d07bc3ae972?q=80&w=1200&auto=format&fit=crop"
    },
    {
        icon: Building2,
        title: "Public Administration",
        headline: "Safeguarding Citizens' Data and Government Infrastructure.",
        desc: "We protect sensitive data and critical information systems of public administration against cyberattacks and unauthorized access. We assist with compliance with legislative and security standards, ensuring public trust in digital governance.",
        image: "https://images.unsplash.com/photo-1517091314147-380d51027c49?q=80&w=1200&auto=format&fit=crop"
    },
    {
        icon: Landmark,
        title: "Public Infrastructure",
        headline: "Resilient Security for Smart Cities and Public Utilities.",
        desc: "We safeguard critical infrastructure and public utilities from cyber threats that could disrupt essential services. Our focus includes securing smart city systems, public networks, and transportation hubs against hybrid threats.",
        image: "https://images.unsplash.com/photo-1449156003053-96421817dea9?q=80&w=1200&auto=format&fit=crop"
    },
    {
        icon: Factory,
        title: "Manufacturing",
        headline: "Industrial Security for the Era of Industry 4.0.",
        desc: "We minimize the risk of cyberattacks on production lines and industrial systems. We help secure IoT and OT environments to ensure smooth manufacturing operations while bridging the gap between IT and OT security departments.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
    },
    {
        icon: Stethoscope,
        title: "Healthcare",
        headline: "Patient-First Cybersecurity for Modern Healthcare.",
        desc: "We protect healthcare facilities and patient data from breaches and cyberattacks. We assist with securing healthcare systems and ensuring compliance with regulations such as GDPR and HIPAA, focusing on non-disruptive security measures.",
        image: "https://images.unsplash.com/photo-1519494140681-891cc9379011?q=80&w=1200&auto=format&fit=crop"
    },
    {
        icon: Zap,
        title: "Energy",
        headline: "Protecting the Backbone of Global Energy Supplies.",
        desc: "We safeguard critical infrastructure from cyber threats that could disrupt energy supply. Our focus includes securing control systems (SCADA/ICS) and ensuring resilience against state-sponsored actors and ransomware.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop"
    },
    {
        icon: Cpu,
        title: "Technology Companies",
        headline: "Enterprise-Grade Security for Scalable Tech Ecosystems.",
        desc: "We secure cloud services, IT infrastructure, and intellectual property. We provide protection against DDoS attacks, ransomware, and other threats, allowing tech leaders to focus on innovation and growth.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
    },
    {
        icon: Code2,
        title: "Software House",
        headline: "Secure by Design: DevSecOps and Application Hardening.",
        desc: "We help developers secure applications from design to deployment. We perform penetration tests, code reviews, and implement secure DevOps practices to ensure that security is an enabler, not a bottleneck.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
    }
];

export default function MarketSegments() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            {/* 3D Background */}
            <div className="fixed inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
                <SecurityMesh />
            </div>

            <div className="relative z-10">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero Section */}
                <section className="px-8 pt-60 pb-32">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl"
                        >
                            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-none">
                                Market <br />
                                <span className="text-primary italic">Industries.</span>
                            </h1>
                            <p className="text-xl text-foreground/60 leading-relaxed">
                                We help organizations across various industries protect their data, systems, and infrastructure from evolving cyber threats with tailored security strategies.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Showcase Showcase Carousel Section */}
                <section className="py-24 px-8 bg-foreground/[0.02]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">Cybersecurity for Critical Industries</h2>
                            <p className="text-foreground/60 max-w-2xl mx-auto">Our specialized compliance and auditing services are tailored to the unique regulatory requirements of each sector.</p>
                        </div>

                        {/* Tab Navigation */}
                        <div className="flex justify-center mb-16">
                            <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-surface border border-foreground/5 rounded-2xl shadow-xl">
                                {industries.map((ind, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveTab(idx)}
                                        className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === idx
                                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                                            : "text-foreground/60 hover:text-primary hover:bg-primary/5"
                                            }`}
                                    >
                                        {ind.title === "Automotive Industry" ? "Automotive" : ind.title.split(' & ')[0].split(' ')[0]}
                                        <span className="hidden lg:inline ml-1">
                                            {ind.title === "Automotive Industry" ? "" : ind.title.split(' ').length > 1 ? ind.title.split(' ').slice(1).join(' ') : ""}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Active Content */}
                        <div className="relative min-h-[500px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                                >
                                    {/* Left: Image */}
                                    <div className="relative group rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl border border-foreground/5 bg-foreground/5">
                                        <img
                                            src={industries[activeTab].image}
                                            alt={industries[activeTab].title}
                                            className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                                        />
                                        <div className="absolute bottom-10 left-10">
                                            <div className="flex items-center gap-4 text-white">
                                                <div className="p-3 bg-primary/20 backdrop-blur-xl rounded-xl border border-white/10">
                                                    {(() => {
                                                        const Icon = industries[activeTab].icon;
                                                        return <Icon className="w-8 h-8 text-primary" />;
                                                    })()}
                                                </div>
                                                <span className="font-mono font-bold tracking-[0.2em] text-xs uppercase opacity-80">Premium Protection</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Content */}
                                    <div className="space-y-8 lg:pl-8">
                                        <div>
                                            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
                                                {industries[activeTab].title}
                                            </span>
                                            <h3 className="text-4xl md:text-5xl font-display font-black leading-tight">
                                                {industries[activeTab].headline}
                                            </h3>
                                        </div>
                                        <p className="text-xl text-foreground/60 leading-relaxed">
                                            {industries[activeTab].desc}
                                        </p>
                                        <div className="pt-4">
                                            <button
                                                onClick={() => setCalculatorOpen(true)}
                                                className="px-8 py-4 bg-transparent border border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all flex items-center gap-3 group"
                                            >
                                                <span>Learn More</span>
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto glass-card p-16 rounded-[3rem] text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                        <h2 className="text-4xl font-display font-black mb-6 relative z-10">Don't see your industry?</h2>
                        <p className="text-foreground/60 mb-10 max-w-xl mx-auto relative z-10">
                            Our security frameworks are adaptable to any regulated or specialized market. Contact us for a free orientation consultation.
                        </p>
                        <button
                            onClick={() => setCalculatorOpen(true)}
                            className="px-10 py-5 bg-primary text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl shadow-primary/20 relative z-10"
                        >
                            GET FREE CONSULTATION
                        </button>
                    </div>
                </section>

                <Footer onOpenCalculator={() => setCalculatorOpen(true)} />
            </div>

            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
