import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ISO 27001 Implementation & Audit Readiness | ITIS Secure",
    description: "Expert ISO 27001 ISMS implementation. Gap analysis, risk assessment, and audit preparation for global certification. Protecting your organization's CIA triad.",
    keywords: ["ISO 27001", "ISMS Implementation", "Security Audit Readiness", "Risk Assessment", "ISO 27001 Consultant", "Annex A Controls", "SOA"],
    openGraph: {
        title: "ISO 27001: Supporting Information Security Management Systems | ITIS Secure",
        description: "Professional ISMS implementation with a proven PDCA methodology.",
        type: "website",
    }
};

export default function ISO27001Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
