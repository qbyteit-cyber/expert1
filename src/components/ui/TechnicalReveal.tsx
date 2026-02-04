"use client";

import { motion } from "framer-motion";

interface TechnicalRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export function TechnicalReveal({ text, className, delay = 0 }: TechnicalRevealProps) {
    const letters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay / 1000 },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
        },
    };

    return (
        <motion.span
            style={{ display: "inline-block", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {letters.map((letter, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                    {letter}
                </motion.span>
            ))}
            <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[0.1em] h-[0.8em] bg-primary ml-1 translate-y-[0.1em]"
            />
        </motion.span>
    );
}
