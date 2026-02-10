import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NIS2 Compliance Implementation | EU Cybersecurity Directive Readiness | ITIS Secure",
    description: "Professional implementation of NIS2 requirements, including risk management, incident reporting, and supply chain security for EU entities. Stay ahead of the EU Cybersecurity Directive.",
    keywords: ["NIS2", "EU Cybersecurity Directive", "NIS2 Compliance", "Essential Entities", "Important Entities", "Supply Chain Security", "TPISR", "Risk Management", "Incident Reporting"],
    openGraph: {
        title: "NIS2 Compliance: Engineering Resilience for Essential Entities | ITIS Secure",
        description: "Moving beyond simple compliance to robust cybersecurity implementation. Expert guidance for NIS2 readiness.",
        type: "website",
    }
};

export default function NIS2Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
