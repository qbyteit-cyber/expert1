import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Outsourced CISO & Security Roles | Professional Security Leadership | ITIS Secure",
    description: "On-demand access to Cybersecurity Managers, Architects, and Auditors for ISO 27001, DORA, and TISAX® compliance. Professional security leadership without the overhead.",
    keywords: ["Outsourced CISO", "vCISO", "Security Architect", "Security Auditor", "Risk Management Specialist", "CISO as a Service", "Cybersecurity Leadership"],
    openGraph: {
        title: "Outsourced CISO & Security Roles | ITIS Secure",
        description: "Professional security leadership and technical expertise on demand.",
        type: "website",
    }
};

export default function OutsourcingRolesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
