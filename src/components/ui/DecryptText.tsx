"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

interface DecryptTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export function DecryptText({ text, className, delay = 0 }: DecryptTextProps) {
    const [displayText, setDisplayText] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);

    const decrypt = useCallback(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
                setIsAnimating(false);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsAnimating(true);
            decrypt();
        }, delay);
        return () => clearTimeout(timeout);
    }, [decrypt, delay]);

    return (
        <span className={className}>
            {displayText || text.split("").map(() => " ")}
        </span>
    );
}
