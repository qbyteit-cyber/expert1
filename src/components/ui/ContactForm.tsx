"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2, ShieldCheck } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "2737653e-178b-49b4-ad00-ab8feac7a6ef");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                e.currentTarget.reset();
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setErrorMessage("Unable to send message. Please try again or contact us directly.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Connection error. Please verify your internet connection and retry.");
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/10 rounded-2xl mb-8">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-[10px] font-black font-mono text-primary uppercase tracking-widest">Enterprise Scoping Qualification</span>
            </div>

            <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-[10px] font-black font-mono text-foreground/40 uppercase tracking-widest mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-foreground/20 font-mono text-sm"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-[10px] font-black font-mono text-foreground/40 uppercase tracking-widest mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-foreground/20 font-mono text-sm"
                            placeholder="john@company.com"
                        />
                    </div>
                </div>

                {/* Company & Role Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="company" className="block text-[10px] font-black font-mono text-foreground/40 uppercase tracking-widest mb-2">
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-foreground/20 font-mono text-sm"
                            placeholder="Your Company"
                        />
                    </div>
                    <div>
                        <label htmlFor="revenue" className="block text-[10px] font-black font-mono text-foreground/40 uppercase tracking-widest mb-2">
                            Annual Revenue (approx.)
                        </label>
                        <select
                            id="revenue"
                            name="revenue"
                            className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground font-mono text-sm appearance-none"
                        >
                            <option value="" className="bg-background">Select range</option>
                            <option value="under5m" className="bg-background">Under €5M</option>
                            <option value="5m-20m" className="bg-background">€5M - €20M</option>
                            <option value="20m-100m" className="bg-background">€20M - €100M</option>
                            <option value="100m-plus" className="bg-background">€100M +</option>
                        </select>
                    </div>
                </div>

                {/* Service & Timeline Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="service" className="block text-[10px] font-black font-mono text-foreground/40 uppercase tracking-widest mb-2">
                            Target Certification
                        </label>
                        <select
                            id="service"
                            name="service"
                            className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground font-mono text-sm appearance-none"
                        >
                            <option value="" className="bg-background">Select standard</option>
                            <option value="TISAX" className="bg-background">TISAX® AL2/AL3</option>
                            <option value="ISO27001" className="bg-background">ISO 27001:2022</option>
                            <option value="TPISR" className="bg-background">TPISR (Ford/GM/etc)</option>
                            <option value="GDPR" className="bg-background">Automotive GDPR</option>
                            <option value="DUAL" className="bg-background">Dual Cert (ISO + TISAX)</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="timeline" className="block text-[10px] font-black font-mono text-foreground/40 uppercase tracking-widest mb-2">
                            Project Timeline
                        </label>
                        <select
                            id="timeline"
                            name="timeline"
                            className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground font-mono text-sm appearance-none"
                        >
                            <option value="" className="bg-background">Select deadline</option>
                            <option value="urgent" className="bg-background">Immediate (&lt; 3 months)</option>
                            <option value="standard" className="bg-background">Standard (3-6 months)</option>
                            <option value="planning" className="bg-background">Strategic Planning (&gt; 6 months)</option>
                        </select>
                    </div>
                </div>

                {/* Current Status Row */}
                <div>
                    <label htmlFor="status" className="block text-[10px] font-black font-mono text-foreground/40 uppercase tracking-widest mb-2">
                        Current Compliance Status
                    </label>
                    <select
                        id="status"
                        name="status"
                        className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground font-mono text-sm appearance-none"
                    >
                        <option value="" className="bg-background">Select status</option>
                        <option value="none" className="bg-background">No existing framework</option>
                        <option value="legacy" className="bg-background">Legacy ISMS (needs update)</option>
                        <option value="failed" className="bg-background">Prior audit non-conformities found</option>
                        <option value="maintaining" className="bg-background">Currently certified (looking to switch)</option>
                    </select>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-[10px] font-black font-mono text-foreground/40 uppercase tracking-widest mb-2">
                        Specific Scope Details *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-foreground/20 font-mono text-sm resize-none"
                        placeholder="Please describe your current systems, number of sites, and specific OEM requirements..."
                    />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400"
                    >
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-xs font-mono">Message sent successfully! A Lead Auditor will contact you within 24 hours.</span>
                    </motion.div>
                )}

                {status === "error" && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
                    >
                        <AlertCircle className="w-5 h-5" />
                        <span className="text-xs font-mono">{errorMessage}</span>
                    </motion.div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-8 py-5 bg-primary text-white font-black rounded-xl hover:scale-[1.02] transition-all hover:shadow-[0_15px_40px_rgba(8,97,242,0.3)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 uppercase tracking-widest text-[12px]"
                >
                    {status === "loading" ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing Application...
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Request Scoping Session
                        </>
                    )}
                </button>
            </motion.form>
        </div>
    );
}
