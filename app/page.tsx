"use client";

import Image from "next/image";








// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CertificatePage() {
 
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
