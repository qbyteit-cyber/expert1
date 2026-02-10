"use client";

import { motion } from "framer-motion";

const BRANDS = [
    "BMW",
    "VOLKSWAGEN",
    "MERCEDES-BENZ",
    "AUDI",
    "PORSCHE",
    "FORD",
    "GENERAL MOTORS",
    "CONTINENTAL",
    "BOSCH"
];

export default function BrandLogoStrip() {
    return (
        <div className="w-full py-12 bg-foreground/5 border-y border-foreground/5 overflow-hidden relative group">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <motion.div
                className="flex gap-20 whitespace-nowrap"
                animate={{ x: [0, -1920] }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {[...BRANDS, ...BRANDS].map((brand, i) => (
                    <div
                        key={i}
                        className="text-2xl font-display font-black text-foreground/20 hover:text-primary transition-colors cursor-default tracking-tighter"
                    >
                        {brand}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
