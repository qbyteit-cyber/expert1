import { RolePageTemplate } from "@/components/ui/RolePageTemplate";
import {
    ShieldAlert,
    BarChart,
    Zap,
    FileText,
    Network,
    Search,
    Brain,
    FileSearch
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Risk Management Specialist | BIA & Vendor Risk | ITIS Secure",
    description: "Expert Business Impact Analysis (BIA) and Risk ID Cards implementation. Support procurement with vendor risk assessments and dynamic risk management.",
    keywords: ["Risk Management Specialist", "BIA", "Business Impact Analysis", "Risk ID Card", "Vendor Risk Assessment", "Automotive Risk Management"],
};

export default function RiskManagementSpecialistPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Risk Management Specialist",
        "description": "Expert in Business Impact Analysis (BIA) and dynamic risk management using Risk ID Cards.",
        "provider": {
            "@type": "Organization",
            "name": "ITIS Secure",
            "url": "https://itis-secure.com"
        },
        "serviceType": "Enterprise Risk Management",
        "areaServed": "Global",
        "keywords": "Risk Management, BIA, Vendor Risk, Risk ID Cards"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <RolePageTemplate
                title="Risk Management Specialist"
                subHeadline="Advanced Business Impact Analysis (BIA) and dynamic risk orchestration. We turn uncertainty into calculated, mitigated technical paths."
                expert={{
                    name: "ISC Risk Hub",
                    role: "Specialized Analysis Unit",
                    background: "Specialists in deep supply chain risk analysis. Utilizing 'Risk ID Cards' and automated BIA workflows for the automotive and financial sectors.",
                    stats: [
                        { value: "100+", label: "Vendor Audits" },
                        { value: "15min", label: "Risk Triage" }
                    ]
                }}
                impact={[
                    { value: "200+", label: "BIA Reports" },
                    { value: "26+", label: "TISAX Frameworks" },
                    { value: "Critical", label: "Infrastructure Ready" },
                    { value: "0", label: "Unmitigated Risks" }
                ]}
                techStack={[
                    { name: "Risk Assessment ID Cards", icon: Zap },
                    { name: "Predictive Analytics", icon: Brain },
                    { name: "Vendor Matrix", icon: Network },
                    { name: "Scoping Tools", icon: FileSearch },
                    { name: "BI Reporting", icon: BarChart }
                ]}
                responsibilities={[
                    { role: "Analysis Lead", task: "Support Procurement with Vendor Risk Assessments and BIA for Third-Party partners." },
                    { role: "Resilience Architect", task: "Implementing Business Impact Analysis (BIA) to define critical infrastructure recovery priorities." },
                    { role: "Strategic Mitigator", task: "Integration of 'Risk Assessment ID Cards' for dynamic, real-time risk management." },
                    { role: "Audit Interface", task: "Providing evidence of systematic risk handling for ISO 27001 and DORA compliance." }
                ]}
                maturityLevel={3}
            />
        </>
    );
}
