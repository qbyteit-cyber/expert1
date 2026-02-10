import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Security Audits & Testing | Audit-Ready Implementation | ITIS Secure",
    description: "Professional security audits for DORA, TISAX®, and NIS2 compliance. Offensive testing including vulnerability scans, phishing tests, and penetration testing.",
    keywords: ["Security Audits", "Penetration Testing", "Vulnerability Scans", "DORA Audit", "TISAX Audit", "NIS2 GAP Analysis", "Phishing Tests"],
    openGraph: {
        title: "Security Audits & Testing | ITIS Secure",
        description: "Expert compliance and offensive testing services for mission-critical industries.",
        type: "website",
    }
};

export default function SecurityAuditsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
