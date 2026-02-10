import { RolePageTemplate } from "@/components/ui/RolePageTemplate";
import {
    Database,
    Shield,
    Cpu,
    Network,
    Layers,
    Lock,
    Monitor,
    Terminal
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Outsourced Cybersecurity Architect | Zero Trust Infrastructure | ITIS Secure",
    description: "Secure infrastructure design and Zero Trust implementation by expert Cristian Cerna. Maintain ISMS framework Dashboards on internal or cloud infrastructure.",
    keywords: ["Cybersecurity Architect", "Zero Trust", "Infrastructure Security", "ISMS Dashboard", "Cristian Cerna", "TISAX Architect"],
};

export default function CybersecurityArchitectPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Cybersecurity Architecture - Cristian Cerna",
        "description": "Secure infrastructure design and Zero Trust implementation focusing on cross-system communication and ISMS dashboards.",
        "provider": {
            "@type": "Organization",
            "name": "ITIS Secure",
            "url": "https://itis-secure.com"
        },
        "serviceType": "Cybersecurity Architecture Consulting",
        "areaServed": "Europe",
        "keywords": "Cybersecurity Architect, Zero Trust, ISMS Dashboard, Cristian Cerna"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <RolePageTemplate
                title="Cybersecurity Architect"
                subHeadline="Secure infrastructure design and Zero Trust implementation. We bridge the gap between complex network topology and high-integrity security mandates."
                expert={{
                    name: "Cristian Cerna",
                    role: "Lead Cybersecurity Architect",
                    background: "Specialist in Cybersecurity and cross-system communication. Expert in orchestrating secure data flows between legacy systems and modern cloud architecture.",
                    stats: [
                        { value: "15+", label: "Architectural Audits" },
                        { value: "100%", label: "Zero Trust Alignment" }
                    ]
                }}
                impact={[
                    { value: "30+", label: "Secure Frameworks Built" },
                    { value: "24/7", label: "Dashboard Monitoring" },
                    { value: "99.9%", label: "Infrastructure Uptime" },
                    { value: "0", label: "Critical Vulnerabilities" }
                ]}
                techStack={[
                    { name: "Active Directory", icon: Lock },
                    { name: "Cloud Infrastructure", icon: Network },
                    { name: "ISMS Dashboards", icon: Monitor },
                    { name: "Secure Protocols", icon: Terminal },
                    { name: "Security Layers", icon: Layers }
                ]}
                responsibilities={[
                    { role: "Technical Architect", task: "Create and maintain ISMS framework Dashboards on internal or cloud infrastructure." },
                    { role: "Infrastructure Lead", task: "Design and implement Zero Trust network micro-segmentation for hybrid environments." },
                    { role: "System Integrator", task: "Orchestrate secure cross-system communication protocols between partners and OEMs." },
                    { role: "Audit Preparation", task: "Providing technical evidence of implemented security controls for AL3 audits." }
                ]}
                maturityLevel={3}
            />
        </>
    );
}
