import { RolePageTemplate } from "@/components/ui/RolePageTemplate";
import {
    Search,
    FileText,
    CheckSquare,
    ClipboardCheck,
    AlertTriangle,
    BookOpen,
    Terminal,
    Award
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Internal Auditor | ISO 27001 & TISAX Internal Audits | ITIS Secure",
    description: "Expert pre-certification verification by Ernest Aduwenye. Specialized lead auditor for TISAX and ISO 27001 internal audit programs.",
    keywords: ["Internal Auditor", "ISO 27001 Audit", "TISAX Internal Audit", "Ernest Aduwenye", "Audit Reporting", "Non-conformity Management"],
};

export default function InternalAuditorPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Internal Audit - Ernest Aduwenye",
        "description": "Specialist in TISAX and ISO 27001 Internal Audit Programs, focusing on pre-certification verification.",
        "provider": {
            "@type": "Organization",
            "name": "ITIS Secure",
            "url": "https://itis-secure.com"
        },
        "serviceType": "Information Security Internal Audit",
        "areaServed": "Global",
        "keywords": "Internal Auditor, ISO 27001 Audit, TISAX, Ernest Aduwenye"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <RolePageTemplate
                title="Internal Auditor"
                subHeadline="Rigorous pre-certification verification and finding management. We find the gaps before the external auditors do."
                expert={{
                    name: "Ernest Aduwenye",
                    role: "Lead Internal Auditor",
                    background: "Specialist in TISAX and ISO 27001 Internal Audit Programs. A certified lead auditor known for surgical precision in finding and closing non-conformities.",
                    stats: [
                        { value: "45+", label: "Successful Audits" },
                        { value: "100%", label: "Audit Pass Rate" }
                    ]
                }}
                impact={[
                    { value: "500+", label: "Finds Closed" },
                    { value: "30+", label: "AL3 Programs" },
                    { value: "0", label: "Failed Certifications" },
                    { value: "100%", label: "TISAX Alignment" }
                ]}
                techStack={[
                    { name: "Axiom", icon: ClipboardCheck },
                    { name: "Audit Tools", icon: CheckSquare },
                    { name: "Compliance Engine", icon: FileText },
                    { name: "Technical Shell", icon: Terminal },
                    { name: "Standard Catalogs", icon: BookOpen }
                ]}
                responsibilities={[
                    { role: "Evaluation Lead", task: "Writing an audit report addressing all findings and communicating results to stakeholders." },
                    { role: "Verification Expert", task: "Conducting pre-certification audits for ISO 27001 and TISAX Assessment Levels 2 and 3." },
                    { role: "Non-Conformity Tracking", task: "Supporting the implementation team in closing technical gaps identified during audits." },
                    { role: "Evidence Verification", task: "Ensuring all technical artifacts meet the high-integrity threshold of accredited assessors." }
                ]}
                maturityLevel={5}
            />
        </>
    );
}
