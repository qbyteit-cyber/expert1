import { RolePageTemplate } from "@/components/ui/RolePageTemplate";
import {
    Scale,
    BookOpen,
    Globe,
    Search,
    Zap,
    CheckCircle2,
    FileSearch,
    History
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Compliance Officer | Regulatory Mapping & Monitoring | ITIS Secure",
    description: "Expert compliance monitoring for NIS2, DORA, and GDPR. We translate complex legal mandates into actionable technical requirements for your engineers.",
    keywords: ["Compliance Officer", "Regulatory Monitoring", "NIS2 Compliance", "DORA Implementation", "Legal Tech Mapping", "Regulatory Alignment"],
};

export default function ComplianceOfficerPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Compliance Officer",
        "description": "Professional regulatory mapping and monitoring services specializing in NIS2, DORA, and GDPR.",
        "provider": {
            "@type": "Organization",
            "name": "ITIS Secure",
            "url": "https://itis-secure.com"
        },
        "serviceType": "Regulatory Compliance Outsourcing",
        "areaServed": "Global",
        "keywords": "Compliance Officer, NIS2, DORA, GDPR, Regulatory Mapping"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <RolePageTemplate
                title="Compliance Officer"
                subHeadline="Regulatory mapping and continuous compliance monitoring. We translate legal entropy into clear technical engineering mandates."
                expert={{
                    name: "ISC Regulatory Unit",
                    role: "Lead Compliance Strategists",
                    background: "Experts in translating EU cyber-regulations (NIS2, DORA, CRA) into practical technical checklists. We maintain the bridge between Brussels and your dev team.",
                    stats: [
                        { value: "100%", label: "Legal Alignment" },
                        { value: "24h", label: "Alert Response" }
                    ]
                }}
                impact={[
                    { value: "0", label: "Regulatory Fines" },
                    { value: "100%", label: "NIS2 Readiness" },
                    { value: "Real-time", label: "Legal Tracking" },
                    { value: "5+", label: "Frameworks Mapped" }
                ]}
                techStack={[
                    { name: "Legal Discovery Tools", icon: Search },
                    { name: "Regulation Catalogs", icon: BookOpen },
                    { name: "Jurisdiction Tracking", icon: Globe },
                    { name: "Change Log History", icon: History },
                    { name: "Technical Blueprints", icon: Zap }
                ]}
                responsibilities={[
                    { role: "Mandate Explorer", task: "Monitoring new laws (NIS2, DORA, GDPR) and translating them into technical requirements for the IT team." },
                    { role: "Integrity Monitor", task: "Verifying that technical implementations meet the specific legal threshold of the relevant jurisdiction." },
                    { role: "Policy Synchronizer", task: "Ensuring that internal security policies remain compliant with evolving regulatory landscapes." },
                    { role: "Risk Liaison", task: "Reporting regulatory risks to the CISO and Management Body for strategic decision making." }
                ]}
                maturityLevel={4}
            />
        </>
    );
}
