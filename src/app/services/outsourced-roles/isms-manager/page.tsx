import { RolePageTemplate } from "@/components/ui/RolePageTemplate";
import {
    Database,
    FileText,
    Settings,
    Shield,
    Activity,
    LayoutDashboard,
    ClipboardList,
    Workflow
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ISMS Manager | Information Security Management | ITIS Secure",
    description: "Expert ISMS Management and maintenance. We handle the technical upkeep of your security documentation and framework based on ISO 27001 standards.",
    keywords: ["ISMS Manager", "Information Security Management System", "ISO 27001 ISMS", "Security Documentation", "Compliance Upkeep"],
};

export default function ISMSManagerPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "ISMS Manager",
        "description": "Expert maintenance and upkeep of Information Security Management Systems (ISMS) in accordance with ISO 27001.",
        "provider": {
            "@type": "Organization",
            "name": "ITIS Secure",
            "url": "https://itis-secure.com"
        },
        "serviceType": "ISMS Outsourcing",
        "areaServed": "Global",
        "keywords": "ISMS Manager, ISO 27001, Security Documentation"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <RolePageTemplate
                title="ISMS Manager"
                subHeadline="Continuous maintenance and technical upkeep of your Information Security Management System. We keep your documentation audit-ready 365 days a year."
                expert={{
                    name: "ISC Management Hub",
                    role: "Lead ISMS Operators",
                    background: "Specialists in long-term ISMS lifecycle management. We turn static paper policies into dynamic, living technical frameworks that evolve with your infrastructure.",
                    stats: [
                        { value: "50+", label: "Systems Managed" },
                        { value: "365", label: "Readiness" }
                    ]
                }}
                impact={[
                    { value: "100%", label: "Recertification Rate" },
                    { value: "1000+", label: "Docs Maintained" },
                    { value: "Level 3", label: "Maturity Baseline" },
                    { value: "0", label: "Documentation Gaps" }
                ]}
                techStack={[
                    { name: "SharePoint/Confluence", icon: Database },
                    { name: "ISMS Dashboards", icon: LayoutDashboard },
                    { name: "Policy Engines", icon: FileText },
                    { name: "Task Management", icon: ClipboardList },
                    { name: "Workflow Automation", icon: Workflow }
                ]}
                responsibilities={[
                    { role: "Documentation Lead", task: "Maintaining the ISMS documentation and ensuring it aligns with current technical controls and standards." },
                    { role: "Continuous Improvement", task: "Coordinating internal reviews to identify and remediate framework maturity gaps." },
                    { role: "Internal Controller", task: "Monitoring the implementation of security policies across all organizational departments." },
                    { role: "Audit Coordinator", task: "Serving as the central point for information during external certification audits." }
                ]}
                maturityLevel={3}
            />
        </>
    );
}
