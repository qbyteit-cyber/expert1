"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LandingHeroTitleProps {
    className?: string;
}

export function LandingHeroTitle({ className }: LandingHeroTitleProps) {
    const [phase, setPhase] = useState<"typing" | "cycling">("typing");
    const [displayedTypingText, setDisplayedTypingText] = useState("");
    const [cycleIndex, setCycleIndex] = useState(0);

    const typingText = "Securing";
    const industries = ["Automotive", "Aerospace", "Defence"];

    // Phase 1: Typing "Securing"
    useEffect(() => {
        let isCancelled = false;
        async function runTyping() {
            // Initial delay
            await new Promise(r => setTimeout(r, 800));

            for (let i = 0; i <= typingText.length; i++) {
                if (isCancelled) return;
                setDisplayedTypingText(typingText.slice(0, i));
                await new Promise(r => setTimeout(r, 100 + Math.random() * 50));
            }

            // Short delay after typing finishes before allowing phase change
            await new Promise(r => setTimeout(r, 400));
            setPhase("cycling");
        }
        runTyping();
        return () => { isCancelled = true; };
    }, []);

    // Phase 2: Cycling Industries
    useEffect(() => {
        if (phase !== "cycling") return;

        const interval = setInterval(() => {
            setCycleIndex((prev) => (prev + 1) % industries.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [phase]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.9]">
                <span className="relative">
                    {displayedTypingText}
                    {phase === "typing" && (
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="inline-block w-[4px] h-[0.9em] bg-primary ml-1 translate-y-[0.1em]"
                        />
                    )}
                </span>
                <br />
                <span className="text-foreground/40">the Cyber Future of</span>
                <br />
                <div className="relative inline-block min-h-[1.1em] overflow-hidden align-top">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={cycleIndex}
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-100%", opacity: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                                opacity: { duration: 0.4 }
                            }}
                            className="inline-block text-primary italic"
                        >
                            {industries[cycleIndex]}
                        </motion.span>
                    </AnimatePresence>
                    <span className="text-foreground ml-4">Industry</span>
                </div>
            </h1>
        </motion.div>
    );
}
