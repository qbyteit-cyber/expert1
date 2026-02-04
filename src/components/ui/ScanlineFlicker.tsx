"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface ScanlineFlickerProps {
    text: string;
    className?: string;
    delay?: number;
}

export function ScanlineFlicker({ text, className, delay = 0 }: ScanlineFlickerProps) {
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            startAnimation();
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    const startAnimation = async () => {
        await controls.start({
            opacity: [0, 0.5, 0.2, 1, 0.8, 1],
            filter: [
                "brightness(1) contrast(1)",
                "brightness(1.5) contrast(1.2)",
                "brightness(0.8) contrast(0.9)",
                "brightness(1.2) contrast(1.1)",
                "brightness(1) contrast(1)"
            ],
            transition: {
                duration: 0.4,
                times: [0, 0.1, 0.2, 0.3, 0.4, 1],
                ease: "easeInOut"
            }
        });
    };

    return (
        <div className="relative inline-block overflow-hidden">
            <motion.div
                animate={controls}
                initial={{ opacity: 0 }}
                className={className}
            >
                {text}

                {/* Horizontal Scanline Effect */}
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={isVisible ? { y: "100%" } : {}}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 1
                    }}
                    className="absolute inset-0 w-full h-1 bg-primary/20 blur-[2px] pointer-events-none z-10"
                />

                {/* Constant Static Flicker Overlay */}
                <motion.div
                    animate={{
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{
                        duration: 0.1,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none"
                />
            </motion.div>

            {/* CRT "Turn On" Flash */}
            {isVisible && (
                <motion.div
                    initial={{ scaleY: 0, opacity: 1 }}
                    animate={{ scaleY: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                    className="absolute inset-0 bg-white/30 z-20 pointer-events-none"
                />
            )}
        </div>
    );
}
