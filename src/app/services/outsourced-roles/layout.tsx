import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Outsourced Security Roles | Expert CISO, DPO & Auditor Services | ITIS Secure",
    description: "Acquire senior-level security expertise on-demand. From Cybersecurity Architects to Data Privacy Officers, we provide the leadership required for global compliance.",
    openGraph: {
        title: "Outsourced Security Roles: Leadership on Demand | ITIS Secure",
        description: "Professional, certified experts (CISO, Architect, Auditor) to lead your organization's security and compliance posture.",
        type: "website",
    }
};

export default function OutsourcedRolesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
