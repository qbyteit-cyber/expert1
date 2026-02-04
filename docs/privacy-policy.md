# DATA PRIVACY AND INFORMATION SECURITY POLICY
**Entity:** Information Security Consulting SRL  
**Reference Standard:** VDA ISA 6.0 (TISAX®), ISO/IEC 27001:2022, GDPR (EU 2016/679)  
**Security Level:** High Protection (AL3)  
**Version:** 1.0.0  
**Status:** Released  

---

## 1. DATA CONTROLLER IDENTIFICATION
Information Security Consulting SRL (hereinafter "itis-secure") operates as the Data Controller under Article 4(7) of the GDPR. We maintain a strictly hardened Information Security Management System (ISMS) to ensure the Confidentiality, Integrity, and Availability (CIA) of all processed assets.

**Registered Offices:**  
- **Sibiu Hub:** Str. Liliacului nr 2, Cisnadie, Sibiu, Romania  
- **Brasov Hub:** Str. Zaharia Stancu 8A, ap 603, Brasov, Romania  

**Contact for Data Protection Officer (DPO):**  
Iulian Bozdoghina | Iulian.Bozdoghina@itis-secure.com | +40 741 711 770  

---

## 2. SCOPE AND COMPLIANCE (VDA ISA 6.0)
This policy applies to all digital interactions with the itis-secure domain. In accordance with VDA ISA 6.0 requirements for "High Protection" (Assessment Level 3), itis-secure implements technical and organizational measures (TOMs) specifically designed for the automotive supply chain. 

Failure to adhere to these standards constitutes a Major Non-Conformity in the context of TISAX® assessments.

---

## 3. TECHNICAL PROTECTION MEASURES (HARDENED INFRASTRUCTURE)
itis-secure does not implement "standard" web configurations. Our "Digital Fortress" architecture employs the following mandatory controls:

### 3.1 Encryption in Transit (TLS 1.3)
All data transmission is enforced via **TLS 1.3 (RFC 8446)**. Supporting legacy, insecure protocols (TLS 1.1 or lower) is strictly prohibited. 

### 3.2 HTTP Strict Transport Security (HSTS)
We implement HSTS with a `max-age` of 31,536,000 seconds, including subdomains and the `preload` directive. This prevents protocol downgrade attacks and unauthorized interception.

### 3.3 Advanced Security Headers
Our infrastructure enforces an A+ rated header stack, including:
- **Content-Security-Policy (CSP):** Restrictive whitelist preventing XSS and unauthorized script execution.
- **X-Frame-Options: DENY:** Mitigation of Clickjacking via total framing prevention.
- **Permissions-Policy:** Explicit disabling of hardware components (camera, microphone, geolocation) at the browser level.

### 3.4 Access Control (Annex A.9)
Access to processing systems is governed by the Principle of Least Privilege (PoLP). Administrative access requires Multi-Factor Authentication (MFA) and is logged in non-repudiable audit trails.

---

## 4. LEGAL BASIS FOR PROCESSING (ART. 6 GDPR)
Data processing at itis-secure is strictly limited to:
1. **Art. 6(1)(b):** Fulfillment of contractual obligations for automotive security audits.
2. **Art. 6(1)(c):** Legal compliance (e.g., tax regulations).
3. **Art. 6(1)(f):** Legitimate interest in securing our infrastructure against cyber threats.

---

## 5. DATA SUBJECT RIGHTS (ART. 15-22 GDPR)
Under the GDPR, individuals are granted the following rights, which itis-secure facilitates through audited procedures:
- **Right of Access (Art. 15):** Confirmation of processing and copy of personal data.
- **Right to Rectification (Art. 16):** Correction of inaccurate records.
- **Right to Erasure (Art. 17):** "Right to be forgotten" subject to legal retention periods.
- **Right to Restriction (Art. 18):** Limitation of processing under specific conditions.
- **Right to Data Portability (Art. 20):** Provision of data in a machine-readable format.
- **Right to Object (Art. 21):** Cessation of processing based on legitimate interests.

---

## 6. DATA RETENTION AND DISPOSAL
Data is retained only for the duration necessary to fulfill the purpose of processing or as mandated by statutory retention periods (e.g., VDA record-keeping requirements). Upon expiration, data is destroyed using secure erasure methods compliant with ISO/IEC 27001:2022 Control A.8.3.2.

---

## 7. REVISION AND AUDIT
This policy is reviewed annually or upon significant changes to the threat landscape or VDA ISA requirements. 

**Last Audit Date:** 04 February 2026  
**Auditor Signature:** Senior Lead Auditor | itis-secure ISMS Team
