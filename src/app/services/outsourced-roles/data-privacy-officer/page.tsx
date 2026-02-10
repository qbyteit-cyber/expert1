import { RolePageTemplate } from "@/components/ui/RolePageTemplate";
import {
    EyeOff,
    ShieldCheck,
    FileText,
    Users,
    Fingerprint,
    Lock,
    Stethoscope,
    Globe
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Data Privacy Officer (DPO) | GDPR & Privacy by Design | ITIS Secure",
    description: "Expert DPO services for LifeScience and Automotive sectors. GDPR compliance through Technical and Organizational Measures (TOMs) and Privacy by Design.",
    keywords: ["Data Privacy Officer", "DPO as a Service", "GDPR Compliance", "Privacy by Design", "LifeScience Privacy", "Automotive GDPR", "TOMs"],
};

export default function DataPrivacyOfficerPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Data Privacy Officer (DPO) - ISC Specialist",
        "description": "Expert DPO services specializing in GDPR compliance and Data Protection by Design for LifeScience and Automotive industries.",
        "provider": {
            "@type": "Organization",
            "name": "ITIS Secure",
            "url": "https://itis-secure.com"
        },
        "serviceType": "Data Protection Officer as a Service",
        "areaServed": "EU",
        "keywords": "DPO, GDPR, Privacy by Design, LifeScience, Automotive"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <RolePageTemplate
                title="Service Data Privacy Officer"
                subHeadline="GDPR compliance and Data Protection by Design. We bridge the gap between complex EU privacy laws and technical implementation."
                expert={{
                    name: "ISC Privacy Unit",
                    role: "Lead DPO Group",
                    background: "Integrated focus on LifeScience and Automotive data privacy. Experts in navigating the high-stakes intersection of clinical data, vehicle telematics, and GDPR.",
                    stats: [
                        { value: "100%", label: "GDPR Alignment" },
                        { value: "12", label: "EU Jurisdictions" }
                    ]
                }}
                impact={[
                    { value: "50+", label: "DPIAs Conducted" },
                    { value: "99%", label: "Partner Trust" },
                    { value: "0", label: "Data Breaches" },
                    { value: "100%", label: "TOMs Integrated" }
                ]}
                techStack={[
                    { name: "Privacy Control Hub", icon: EyeOff },
                    { name: "Encryption Protocols", icon: Lock },
                    { name: "Identity Management", icon: Fingerprint },
                    { name: "LifeScience Compliance", icon: Stethoscope },
                    { name: "EU Data Nodes", icon: Globe }
                ]}
                responsibilities={[
                    { role: "Privacy Guardian", task: "Ensuring compliance with information security or privacy laws, rules, and regulations across all data flows." },
                    { role: "Technical Architect", task: "Implementing Technical and Organizational Measures (TOMs) based on Privacy by Design principles." },
                    { role: "Regulator Liaison", task: "Acting as the primary point of contact for Supervisory Authorities and data subjects." },
                    { role: "Vendor auditor", task: "Managing vendor DPAs and conducting technical Privacy Risk Assessments for third-party partners." }
                ]}
                maturityLevel={4}
            />
        </>
    );
}
