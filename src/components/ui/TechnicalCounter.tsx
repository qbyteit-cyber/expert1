"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
    value: number;
    suffix?: string;
    duration?: number;
    label: string;
}

export function TechnicalCounter({ value, suffix = "", duration = 2000, label }: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let startTimestamp: number | null = null;
            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                setCount(Math.floor(progress * value));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [isInView, value, duration]);

    return (
        <div ref={ref} className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-display font-black text-primary mb-2 tracking-tighter">
                {count}{suffix}
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/40 text-center">
                {label}
            </div>
        </div>
    );
}
