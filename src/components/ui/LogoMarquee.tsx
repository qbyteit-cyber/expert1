"use client";

import React from "react";
import {
    ReactLogo,
    AstroLogo,
    TailwindLogo,
    JSLogo,
    NextjsLogo,
    RemixLogo,
    TSLogo,
    SvelteLogo,
    VueLogo,
} from "./Logos";

const Logos = [
    ReactLogo,
    AstroLogo,
    TailwindLogo,
    VueLogo,
    NextjsLogo,
    RemixLogo,
    JSLogo,
    TSLogo,
    SvelteLogo,
];

export default function LogoMarquee() {
    return (
        <div className="marquee-wrapper w-full opacity-60 hover:opacity-100 transition-opacity duration-700 py-12">
            <div
                className="marquee fadeout-horizontal"
                style={{ "--numItems": 9 } as React.CSSProperties}
            >
                <div className="marquee-track">
                    {Logos.map((Logo, i) => (
                        <div
                            key={i}
                            className="marquee-item"
                            style={{ "--item-position": i + 1 } as React.CSSProperties}
                        >
                            <Logo />
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="marquee fadeout-horizontal"
                style={{ "--numItems": 9, "--direction": "reverse" } as React.CSSProperties}
            >
                <div className="marquee-track">
                    {[...Logos].reverse().map((Logo, i) => (
                        <div
                            key={i}
                            className="marquee-item"
                            style={{ "--item-position": i + 1 } as React.CSSProperties}
                        >
                            <Logo />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
