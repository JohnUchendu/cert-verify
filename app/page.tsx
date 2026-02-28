"use client";

import Image from "next/image";
import { useState } from "react";

// ─── Certificate data ─────────────────────────────────────────────────────────
const certificate = {
  student: "George Bluefin",
  completionDate: "Feb. 2, 2024",
  course: "Chainalysis Investigation Specialist Certification (CISC)",
  offeredBy: "Chainalysis Academy",
  verifyUrl: "http://verify.skillljar.com/",
  certImageSrc: "/certificate.png",  // ← local image shown on screen
  certPdfSrc: "/certificate.pdf",    // ← local PDF downloaded on click
};

// ─── Icons ────────────────────────────────────────────────────────────────────
function CheckShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CertificatePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(certificate.verifyUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rows = [
    { label: "Student", value: certificate.student },
    {
      label: "Certificate Link",
      value: (
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 text-sm transition-colors"
          style={{ color: "var(--gold)", fontFamily: "'DM Sans', sans-serif" }}
        >
          <CopyIcon />
          {copied ? "Copied!" : "Copy verify URL"}
        </button>
      ),
    },
    { label: "Completion Date", value: certificate.completionDate },
    { label: "Course Completed", value: certificate.course },
    { label: "Offered By", value: certificate.offeredBy },
  ];

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>

      {/* ── Header ───────────────────────────────────────────────────────────── */}
      <header
        style={{
          background: "white",
          borderBottom: "1px solid var(--border)",
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        
        <div
          className="flex items-center gap-2 text-sm font-medium"
          style={{ color: "var(--gold)" }}
        >
          
        </div>
      </header>

      {/* ── Main ─────────────────────────────────────────────────────────────── */}
      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>

       


        {/* Title */}
        <h1
          className="font-display animate-fade-up animate-fade-up-delay-1 text-center mb-10"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 700, lineHeight: 1.2, color: "var(--ink)" }}
        >
          <span className="gold-shimmer">Certificate Validation</span>
        </h1>

        {/* ── Certificate image ─────────────────────────────────────────────── */}
        <div
          className="animate-fade-up animate-fade-up-delay-2"
          style={{
            background: "white",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 40px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
            marginBottom: "2rem",
          }}
        >
          <div style={{ height: "4px", background: "linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold))" }} />

          <div style={{ padding: "2rem" }}>
            <div
              style={{
                borderRadius: "8px",
                border: "1px solid var(--border)",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "scale(1.01)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <Image
                src={certificate.certImageSrc}
                alt="Certificate"
                width={1280}
                height={960}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* ── Validation table ─────────────────────────────────────────────── */}
        <div
          className="animate-fade-up animate-fade-up-delay-3"
          style={{
            background: "white",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 40px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              padding: "1.25rem 2rem",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
            }}
          >
            <span style={{ color: "var(--gold)" }}><CheckShieldIcon /></span>
            <h2
              className="font-display"
              style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--ink)", margin: 0 }}
            >
              Skilljar Certificate Validation Information
            </h2>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <td
                    style={{
                      padding: "1rem 2rem",
                      width: "36%",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--ink-muted)",
                      verticalAlign: "top",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.label}
                  </td>
                  <td style={{ padding: "1rem 2rem 1rem 0", fontSize: "0.95rem", color: "var(--ink)", lineHeight: 1.5 }}>
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Download button ───────────────────────────────────────────────── */}
        <div className="flex justify-center">
          <a
            href={certificate.certPdfSrc}
            download="certificate.pdf"
            className="inline-flex items-center gap-3"
            style={{
              background: "var(--ink)",
              color: "white",
              padding: "0.9rem 2.4rem",
              borderRadius: "9999px",
              fontWeight: 500,
              fontSize: "0.95rem",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
              boxShadow: "0 4px 16px rgba(26,26,46,0.18)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--gold)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--ink)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            <DownloadIcon />
            Download as PDF
          </a>
        </div>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "2rem", fontSize: "0.8rem", color: "var(--ink-muted)" }}>

        {/* Row 1: copyright + language selector */}
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <span>© {new Date().getFullYear()}</span>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1rem", justifyContent: "center" }}>
            {[
              { code: "en", label: "English" },
              { code: "es", label: "Español (Spanish)" },
              { code: "pt", label: "Português Brasileiro (Portuguese)" },
              { code: "ja", label: "日本語 (Japanese)" },
              { code: "ko", label: "한국어 (Korean)" },
              { code: "de", label: "Deutsch (German)" },
              { code: "fr", label: "Français (French)" },
            ].map((lang) => (
              <button
                key={lang.code}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", color: "var(--ink-muted)", padding: 0, transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "var(--gold)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "var(--ink-muted)")}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: logo + disclaimer */}
        <div
          style={{
            maxWidth: "860px",
            margin: "1.5rem auto 0",
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          <Image
            src="/logo.png"
            alt="Chainalysis Academy"
            width={130}
            height={32}
            style={{ objectFit: "contain", marginBottom: "1rem" }}
          />
          <p style={{ fontSize: "0.75rem", color: "var(--ink-muted)", lineHeight: 1.6, margin: 0 }}>
            Chainalysis Academy brings you the full power of our compliance and investigative
            solutions. All Chainalysis Academy Materials are protected by applicable intellectual
            property laws. You may not reproduce, distribute, transmit, display, publish, or
            broadcast any part of the Academy Materials without Chainalysis&apos; explicit permission.
          </p>
        </div>
      </footer>
    </div>
  );
}
