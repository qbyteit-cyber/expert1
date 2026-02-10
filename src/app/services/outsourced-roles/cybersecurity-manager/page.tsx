import { RolePageTemplate } from "@/components/ui/RolePageTemplate";
import {
    Users,
    ShieldCheck,
    BarChart3,
    FileText,
    Activity,
    Briefcase,
    Globe,
    LayoutDashboard
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CISO as a Service | Cybersecurity Manager Outsourcing | ITIS Secure",
    description: "Strategic leadership and risk mitigation by Iulian Bozdoghina. Management reviews, risk treatment plans, and continuous security improvement.",
    keywords: ["CISO as a Service", "Cybersecurity Manager", "Iulian Bozdoghina", "Risk Treatment Plan", "Management Review", "IT Infrastructure Management"],
};

export default function CybersecurityManagerPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "CISO as a Service - Iulian Bozdoghina",
        "description": "Strategic leadership and risk mitigation via Risk Treatment Plans and Management Reviews.",
        "provider": {
            "@type": "Organization",
            "name": "ITIS Secure",
            "url": "https://itis-secure.com"
        },
        "serviceType": "CISO Outsourcing & Security Management",
        "areaServed": "Global",
        "keywords": "CISO as a Service, Cybersecurity Manager, Iulian Bozdoghina, Risk Mitigation"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <RolePageTemplate
                title="Cybersecurity Manager"
                subHeadline="Strategic leadership (CISO as a Service) and executive risk mitigation. We align your tech stack with organizational survival goals."
                expert={{
                    name: "Iulian Bozdoghina",
                    role: "Lead Cybersecurity Manager",
                    background: "Extensive experience in IT Infrastructure and Application Management. A strategic leader focused on bridge-building between C-level objectives and technical execution.",
                    stats: [
                        { value: "20+", label: "Years Experience" },
                        { value: "50+", label: "C-Level Reviews" }
                    ]
                }}
                impact={[
                    { value: "100%", label: "Certification Success" },
                    { value: "35+", label: "Risk Plans Managed" },
                    { value: "€0", label: "Fines in Managed Sites" },
                    { value: "12", label: "Global Clients" }
                ]}
                techStack={[
                    { name: "JIRA", icon: Briefcase },
                    { name: "Risk Assessment Tools", icon: ShieldCheck },
                    { name: "Dashboards", icon: LayoutDashboard },
                    { name: "Reporting Engines", icon: BarChart3 },
                    { name: "Global Operations", icon: Globe }
                ]}
                responsibilities={[
                    { role: "Strategic Lead", task: "Organizing Management Reviews and providing input for continuous improvement of the ISMS." },
                    { role: "Risk Orchestrator", task: "Creating and maintaining the Risk Treatment Plan (RTP) based on identified vulnerabilities." },
                    { role: "C-Level Liaison", task: "Translating technical security posture into business value for the Steering Committee." },
                    { role: "Compliance Guardian", task: "Ensuring that todos and tasks from internal and external audits are closed on schedule." }
                ]}
                maturityLevel={4}
            />
        </>
    );
}
