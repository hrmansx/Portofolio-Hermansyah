import { createContext, useContext, useState, useEffect, useRef } from "react";

type Language = "id" | "en";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
}>({ language: "id", setLanguage: () => undefined });

const useLanguage = () => useContext(LanguageContext);
const copy = (language: Language, id: string, en: string) =>
  language === "id" ? id : en;

function useWindowWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return w;
}
import fotoSaya from "@/imports/Foto_Saya.jpeg";
import imgCBT from "@/imports/image-8.png";
import imgPustaka48 from "@/imports/image-9.png";
import imgPPDB from "@/imports/image-10.png";
import imgAutoPrime from "@/imports/image-11.png";
import imgLaundry from "@/imports/image-12.png";
import imgAbsensi from "@/imports/image-7.png";
import imgAdlyTenda from "@/imports/image-13.png";
import imgSandikta from "@/imports/image-14.png";
import certBnspPreview from "@/imports/certificate-bnsp-preview.jpg";
import certCiscoPreview from "@/imports/certificate-cisco-preview.jpg";
import certToeflPreview from "@/imports/certificate-toefl-preview.jpg";

/* ─── palette ─── */
const C = {
  cream: "#f8f7ff",        // putih keunguan — bersih tapi berkarakter
  sand: "#eeedf8",         // lavender sangat muda
  tan: "#dddaf0",          // lavender soft
  ink: "#13111f",          // hitam keunguan — lebih kaya dari hitam biasa
  inkMid: "#2e2a45",
  inkSoft: "#706d8a",
  coral: "#6c4fff",        // ungu electric — primary accent
  coralLight: "#ede9ff",   // ungu pucat
  violet: "#e8417a",       // pink magenta — secondary accent
  violetLight: "#fde9f1",  // pink pucat
  green: "#00b37e",        // hijau mint — tertiary
  greenLight: "#e0f7ef",
  border: "#dddaf0",
};

const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const sectionPadding = (isMobile: boolean) =>
  isMobile ? "80px 20px" : "96px 24px";

const sectionHeadingGap = (isMobile: boolean) => (isMobile ? 36 : 52);

const NAV = [
  { id: "Tentang", en: "About", href: "about" },
  { id: "Pengalaman", en: "Experience", href: "experience" },
  { id: "Keahlian", en: "Skills", href: "skills" },
  { id: "Sertifikasi", en: "Certificates", href: "certificates" },
  { id: "Proyek", en: "Projects", href: "projects" },
  { id: "Kontak", en: "Contact", href: "contact" },
];

const PROJECTS = [
  {
    id: "01",
    title: "NexDigi CBT – Sistem Ujian Berbasis Komputer Modern & Real-time",
    titleEn: "NexDigi CBT – Modern Real-time Computer-Based Testing System",
    tag: "Web Development",
    desc: "Sistem NexDigi CBT adalah platform ujian berbasis komputer (Computer Based Test) yang dirancang untuk kebutuhan institusi pendidikan dalam menyelenggarakan ujian secara efisien, aman, dan transparan. Dibangun dengan arsitektur modern yang memisahkan backend (API) dan frontend untuk performa maksimal.",
    descEn: "NexDigi CBT is a computer-based testing platform designed for educational institutions to conduct exams efficiently, securely, and transparently. It uses a modern architecture that separates the backend API and frontend for optimal performance.",
    tech: ["Web Dev", "API", "Real-time"],
    accent: C.coral,
    accentLight: C.coralLight,
    img: imgCBT,
  },
  {
    id: "02",
    title: "Pustaka48 – Sistem Informasi E-Library SMAN 48 Jakarta",
    titleEn: "Pustaka48 – E-Library Information System for SMAN 48 Jakarta",
    tag: "Web Development",
    desc: "Pustaka48 adalah platform perpustakaan digital berbasis web yang dirancang khusus untuk mendigitalisasi layanan literasi di SMAN 48 Jakarta. Sistem ini mengintegrasikan pengelolaan koleksi buku fisik dan buku digital (E-Book) dalam satu platform yang aman dan responsif.",
    descEn: "Pustaka48 is a web-based digital library created to modernize literacy services at SMAN 48 Jakarta. It combines physical book and e-book management in one secure and responsive platform.",
    tech: ["Web Dev", "E-Library", "Dashboard"],
    accent: C.violet,
    accentLight: C.violetLight,
    img: imgPustaka48,
  },
  {
    id: "03",
    title: "Sistem Informasi PPDB Online — SMA Nusantara",
    titleEn: "Online Student Admission System — SMA Nusantara",
    tag: "Web Development",
    desc: "Sistem informasi berbasis web yang dirancang untuk mendigitalisasi proses pendaftaran siswa baru secara efisien dan transparan. Aplikasi ini memudahkan calon siswa dalam melakukan pendaftaran secara mandiri serta membantu pihak sekolah dalam mengelola data pendaftar secara terpusat.",
    descEn: "A web-based information system that digitizes the student admission process efficiently and transparently. It enables independent registration and helps schools manage applicant data centrally.",
    tech: ["Web Dev", "PPDB", "Dashboard"],
    accent: C.green,
    accentLight: C.greenLight,
    img: imgPPDB,
  },
  {
    id: "04",
    title: "AutoPrime – Premium Automotive Management System",
    titleEn: "AutoPrime – Premium Automotive Management System",
    tag: "Web Development",
    desc: "Proyek ini bertujuan untuk mendigitalisasi pengalaman berbelanja mobil premium. Dengan estetika desain dark mode yang mewah (Obsidian & Gold), AutoPrime menawarkan antarmuka intuitif bagi pelanggan untuk mengeksplorasi unit kendaraan impian, serta kontrol penuh bagi admin untuk mengelola stok, merek, kategori, hingga konten situs secara real-time.",
    descEn: "AutoPrime digitizes the premium car shopping experience through an elegant Obsidian and Gold interface. Customers can explore available vehicles while administrators manage inventory, brands, categories, and site content in real time.",
    tech: ["Web Dev", "Dark Mode", "Admin Panel"],
    accent: C.coral,
    accentLight: C.coralLight,
    img: imgAutoPrime,
  },
  {
    id: "05",
    title: "Laundry Kasir Apps",
    titleEn: "Laundry Cashier App",
    tag: "Mobile Apps",
    desc: "Aplikasi Point of Sales (POS) dan sistem manajemen cerdas yang dirancang khusus untuk memodernisasi operasional bisnis laundry. Dibangun dengan fokus pada kecepatan pelayanan kasir, akurasi data, dan keandalan sinkronisasi — hadir sebagai solusi all-in-one untuk laundry skala UMKM hingga profesional.",
    descEn: "A Point of Sale and smart management application designed to modernize laundry operations. It focuses on faster cashier service, data accuracy, and reliable synchronization for small businesses and professional laundries.",
    tech: ["Mobile", "POS", "Real-time"],
    accent: C.violet,
    accentLight: C.violetLight,
    img: imgLaundry,
  },
  {
    id: "06",
    title: "Sistem Absensi Sekolah",
    titleEn: "School Attendance System",
    tag: "Web Development",
    desc: "Platform web modern yang dikembangkan untuk memodernisasi manajemen kehadiran di lingkungan sekolah. Menghadirkan integrasi QR Code di mana data kehadiran siswa tercatat secara real-time, dilengkapi dashboard admin dan fitur ekspor laporan (PDF/Excel) untuk rekapitulasi absensi yang efisien.",
    descEn: "A modern web platform for school attendance management. QR Code integration records student attendance in real time, supported by an admin dashboard and PDF or Excel report exports.",
    tech: ["Web Dev", "QR Code", "Dashboard"],
    accent: C.green,
    accentLight: C.greenLight,
    img: imgAbsensi,
  },
  {
    id: "07",
    title: "Website Company Profile Adly Tenda",
    titleEn: "Adly Tenda Company Profile Website",
    tag: "Web Development",
    desc: "Platform web profesional yang dikembangkan untuk memodernisasi layanan penyewaan tenda premium dan perlengkapan event. Menghadirkan katalog digital interaktif di mana spesifikasi layanan seperti Tenda VIP, Roder, hingga Sarnafil dapat dieksplorasi secara mendetail oleh calon klien.",
    descEn: "A professional website that modernizes premium tent and event equipment rental services. Its interactive catalog helps prospective clients explore VIP, Roder, and Sarnafil tent specifications in detail.",
    tech: ["Web Dev", "Company Profile", "Catalog"],
    accent: C.coral,
    accentLight: C.coralLight,
    img: imgAdlyTenda,
  },
  {
    id: "08",
    title: "E-Library Sandikta",
    titleEn: "Sandikta E-Library",
    tag: "Web Development",
    desc: "E-library Sandikta adalah platform perpustakaan digital berbasis web yang dirancang untuk mendigitalisasi ekosistem literasi dan mempermudah akses buku bagi komunitas pendidikan. Dibangun dengan fokus pada keamanan dokumen, kemudahan manajemen konten, dan pengalaman pengguna yang modern serta responsif.",
    descEn: "Sandikta E-Library is a web-based digital library that expands book access for the education community. It focuses on document security, convenient content management, and a modern responsive experience.",
    tech: ["Web Dev", "E-Library", "Admin"],
    accent: C.violet,
    accentLight: C.violetLight,
    img: imgSandikta,
  },
];

const SKILLS = [
  { label: "PHP / Laravel", level: "Menengah", levelEn: "Intermediate", accent: C.coral },
  { label: "HTML / CSS / JavaScript", level: "Menengah", levelEn: "Intermediate", accent: C.green },
  { label: "React / Next.js", level: "Menengah", levelEn: "Intermediate", accent: C.violet },
  { label: "MySQL / Database Design", level: "Menengah", levelEn: "Intermediate", accent: C.coral },
  { label: "UI / UX & Figma", level: "Menengah", levelEn: "Intermediate", accent: C.violet },
  { label: "System Analysis & UML", level: "Menengah", levelEn: "Intermediate", accent: C.green },
];

const CERTIFICATES = [
  {
    title: "Sertifikat Kompetensi — Software Development",
    titleEn: "Professional Competency Certificate — Software Development",
    issuer: "BNSP · LSP Universitas Bina Sarana Informatika",
    issuerEn: "BNSP · Professional Certification Institute of Universitas Bina Sarana Informatika",
    detail: "Kompeten sebagai Pengembang Perangkat Lunak dengan kualifikasi Analis Program.",
    detailEn: "Certified as a Software Developer with a Program Analyst qualification.",
    meta: "Berlaku 3 tahun · 15 September 2025",
    metaEn: "Valid for 3 years · September 15, 2025",
    badge: "BNSP",
    accent: C.coral,
    accentLight: C.coralLight,
    preview: certBnspPreview,
  },
  {
    title: "PCAP: Programming Essentials in Python",
    titleEn: "PCAP: Programming Essentials in Python",
    issuer: "Cisco Networking Academy · OpenEDG Python Institute",
    issuerEn: "Cisco Networking Academy · OpenEDG Python Institute",
    detail: "Pemrograman Python, algoritma, struktur data, modul, exception, dan object-oriented programming.",
    detailEn: "Python programming, algorithms, data structures, modules, exceptions, and object-oriented programming.",
    meta: "Statement of Achievement",
    badge: "Cisco",
    accent: C.green,
    accentLight: C.greenLight,
    preview: certCiscoPreview,
  },
  {
    title: "TOEFL Prediction Test",
    titleEn: "TOEFL Prediction Test",
    issuer: "Lembaga Bahasa Universitas Bina Sarana Informatika",
    issuerEn: "Language Center of Universitas Bina Sarana Informatika",
    detail: "Listening 41 · Structure and Written Expression 67 · Reading 66.",
    detailEn: "Listening 41 · Structure and Written Expression 67 · Reading 66.",
    meta: "Skor 580 · 28 Agustus 2026",
    metaEn: "Score 580 · August 28, 2026",
    badge: "TOEFL 580",
    accent: C.violet,
    accentLight: C.violetLight,
    preview: certToeflPreview,
  },
];

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label={copy(language, "Pilih bahasa", "Choose language")}
      style={{
        display: "inline-flex",
        padding: 3,
        borderRadius: 99,
        border: `1px solid ${C.border}`,
        backgroundColor: "#fff",
      }}
    >
      {(["id", "en"] as Language[]).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          aria-pressed={language === option}
          style={{
            minWidth: 32,
            padding: "5px 8px",
            border: "none",
            borderRadius: 99,
            backgroundColor: language === option ? C.coral : "transparent",
            color: language === option ? "#fff" : C.inkSoft,
            fontFamily: "'DM Mono', monospace",
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

/* ─── Nav ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isMobile = useWindowWidth() < 900;
  const { language } = useLanguage();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setOpen(false);
      return;
    }

    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobile, open]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled || open ? "rgba(248,247,255,0.96)" : "transparent",
        backdropFilter: scrolled || open ? "blur(14px)" : "none",
        borderBottom: scrolled || open ? `1px solid ${C.border}` : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      <nav
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 24px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "space-between" : "center",
          position: "relative",
        }}
      >
        {isMobile && (
          <a
            href="#"
            aria-label={copy(language, "Kembali ke bagian atas", "Back to top")}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, color: C.ink, textDecoration: "none" }}
          >
            <span
              className="font-display"
              style={{
                width: 34,
                height: 34,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                background: `linear-gradient(135deg, ${C.coral} 0%, ${C.violet} 100%)`,
                color: "#fff",
                fontSize: 20,
                fontWeight: 700,
                boxShadow: "0 6px 16px rgba(108,79,255,0.24)",
              }}
            >
              H
            </span>
            <span className="font-display" style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.02em" }}>
              Hermansyah
            </span>
          </a>
        )}

        {!isMobile && (
          <div style={{ position: "absolute", left: 24 }}>
            <LanguageToggle />
          </div>
        )}

        {!isMobile && (
          <ul style={{ display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0 }}>
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={`#${n.href}`}
                  className="font-mono-label"
                  style={{
                    textDecoration: "none",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: C.inkSoft,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = C.ink)}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = C.inkSoft)}
                >
                  {language === "id" ? n.id : n.en}
                </a>
              </li>
            ))}
          </ul>
        )}

        {!isMobile && (
          <a
            href="#contact"
            className="font-mono-label"
            style={{
              textDecoration: "none",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#fff",
              backgroundColor: C.coral,
              padding: "10px 22px",
              borderRadius: 3,
              transition: "background 0.2s, transform 0.15s",
              position: "absolute",
              right: 24,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#5535ee";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = C.coral;
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            {copy(language, "Rekrut Saya", "Hire Me")}
          </a>
        )}

        {/* burger — hanya tampil di mobile */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <LanguageToggle />
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? copy(language, "Tutup menu navigasi", "Close navigation menu") : copy(language, "Buka menu navigasi", "Open navigation menu")}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
            >
              <div style={{ width: 24, height: 2, backgroundColor: C.ink, marginBottom: 5, transition: "all 0.3s", transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
              <div style={{ width: 24, height: 2, backgroundColor: C.ink, marginBottom: 5, opacity: open ? 0 : 1, transition: "all 0.3s" }} />
              <div style={{ width: 24, height: 2, backgroundColor: C.ink, transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
            </button>
          </div>
        )}
      </nav>

      {/* mobile dropdown */}
      {isMobile && open && (
        <div
          id="mobile-navigation"
          style={{
            position: "fixed",
            top: 68,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(180deg, ${C.cream} 0%, ${C.sand} 100%)`,
            borderTop: `1px solid ${C.border}`,
            padding: "20px 24px 32px",
            overflowY: "auto",
          }}
        >
          <div style={{ maxWidth: 480, margin: "0 auto" }}>
            {NAV.map((n) => (
              <a
                key={n.href}
                href={`#${n.href}`}
                onClick={() => setOpen(false)}
                className="font-mono-label"
                style={{ display: "block", padding: "15px 0", textDecoration: "none", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: C.inkSoft, borderBottom: `1px solid ${C.border}` }}
              >
                {language === "id" ? n.id : n.en}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="font-mono-label"
              style={{
                display: "block",
                marginTop: 20,
                textAlign: "center",
                padding: "14px",
                textDecoration: "none",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#fff",
                backgroundColor: C.coral,
                borderRadius: 4,
                boxShadow: "0 10px 24px rgba(108,79,255,0.2)",
              }}
            >
              {copy(language, "Rekrut Saya", "Hire Me")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  const isMobile = useWindowWidth() < 768;
  const { language } = useLanguage();
  return (
    <section
      style={{
        minHeight: isMobile ? "auto" : "100vh",
        backgroundColor: C.cream,
        display: "flex",
        alignItems: "center",
        padding: isMobile ? "96px 20px 72px" : "112px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* bg blobs */}
      <div style={{ position: "absolute", top: "8%", right: "5%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, #c4b8ff55 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "3%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, #f9a8d455 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "40%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, #6ee7b755 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1140, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        {/* avatar pill + badge — stack vertikal di mobile */}
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 10 : 14, marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, backgroundColor: "#fff", border: `1px solid ${C.border}`, borderRadius: 99, padding: "6px 14px 6px 6px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", alignSelf: "flex-start" }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", overflow: "hidden", flexShrink: 0, backgroundColor: C.tan }}>
              <img src={fotoSaya} alt="Hermansyah" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: C.ink, lineHeight: 1.2 }}>Hermansyah</div>
              <div className="font-mono-label" style={{ fontSize: 9, letterSpacing: "0.1em", color: C.inkSoft }}>IT Graduate · UBSI</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", backgroundColor: C.green, flexShrink: 0, animation: "pulse 2s infinite" }} />
            <span className="font-mono-label" style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: C.green }}>
              {copy(language, "Terbuka untuk peluang kerja", "Available for work")}
            </span>
          </div>
        </div>

        <h1
          className="font-display"
          style={{
            fontSize: isMobile ? "clamp(2.25rem, 11.5vw, 3.5rem)" : "clamp(3.2rem, 9vw, 8.5rem)",
            fontWeight: 300,
            lineHeight: isMobile ? 0.98 : 0.92,
            letterSpacing: "-0.03em",
            color: C.ink,
            marginBottom: isMobile ? 24 : 32,
            overflowWrap: "break-word",
          }}
        >
          Hermansyah
          <br />
          <em style={{ color: C.coral, fontStyle: "italic" }}>IT Graduate</em>
          <br />
          &amp; Web Developer
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 60px", maxWidth: 680, marginBottom: isMobile ? 36 : 44 }}>
          <p style={{ fontSize: isMobile ? 15 : 16, lineHeight: 1.7, color: C.inkSoft, fontWeight: 300, gridColumn: "1 / -1", textAlign: isMobile ? "left" : "justify" }}>
            {copy(
              language,
              "Lulusan Teknologi Informasi Universitas Bina Sarana Informatika yang berfokus membangun solusi web fungsional, responsif, dan bermakna.",
              "An Information Technology graduate from Universitas Bina Sarana Informatika, focused on building functional, responsive, and meaningful web solutions."
            )}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", flexWrap: "wrap", gap: 12, alignItems: isMobile ? "stretch" : "center" }}>
          <a
            href="#projects"
            style={{
              textDecoration: "none",
              backgroundColor: C.ink,
              color: "#fff",
              padding: "14px 32px",
              borderRadius: 3,
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = C.coral;
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = C.ink;
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            {copy(language, "Lihat Karya →", "View Projects →")}
          </a>
          <a
            href="#contact"
            style={{
              textDecoration: "none",
              color: C.inkSoft,
              padding: "14px 28px",
              border: `1.5px solid ${C.border}`,
              borderRadius: 3,
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = C.ink;
              (e.currentTarget as HTMLElement).style.color = C.ink;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = C.border;
              (e.currentTarget as HTMLElement).style.color = C.inkSoft;
            }}
          >
            {copy(language, "Hubungi Saya", "Contact Me")}
          </a>
          <a
            href={assetUrl("Hermansyah-CV.pdf")}
            download
            style={{
              textDecoration: "none",
              color: C.coral,
              padding: "14px 28px",
              border: `1.5px solid ${C.coral}`,
              borderRadius: 3,
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              transition: "all 0.2s",
              display: "inline-block",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = C.coralLight;
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            {copy(language, "Unduh CV ↓", "Download CV ↓")}
          </a>
        </div>

      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        @keyframes sway {
          0%   { transform: rotate(-2deg); }
          25%  { transform: rotate(3deg); }
          50%  { transform: rotate(-1deg); }
          75%  { transform: rotate(4deg); }
          100% { transform: rotate(-2deg); }
        }
        @keyframes swayRope {
          0%   { transform: translateX(-50%) rotate(-1deg); transform-origin: top center; }
          25%  { transform: translateX(-50%) rotate(1.5deg); transform-origin: top center; }
          50%  { transform: translateX(-50%) rotate(-0.5deg); transform-origin: top center; }
          75%  { transform: translateX(-50%) rotate(2deg); transform-origin: top center; }
          100% { transform: translateX(-50%) rotate(-1deg); transform-origin: top center; }
        }
      `}</style>
    </section>
  );
}

/* ─── About ─── */
function About() {
  const isMobile = useWindowWidth() < 768;
  const { language } = useLanguage();
  const [lanyardAngle, setLanyardAngle] = useState(0);
  const [lanyardOffset, setLanyardOffset] = useState({ x: 0, y: 0 });
  const [isDraggingLanyard, setIsDraggingLanyard] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const ropeBaseLength = 52;
  const ropeLength = Math.sqrt(
    lanyardOffset.x ** 2 + (ropeBaseLength + lanyardOffset.y) ** 2
  );
  const ropeAngle =
    Math.atan2(lanyardOffset.x, ropeBaseLength + lanyardOffset.y) * (180 / Math.PI);

  const releaseLanyard = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    setIsDraggingLanyard(false);
    setLanyardAngle(0);
    setLanyardOffset({ x: 0, y: 0 });
  };

  return (
    <section
      id="about"
      style={{ backgroundColor: C.sand, padding: sectionPadding(isMobile) }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 64, alignItems: "center" }}>
          <div>
            <span className="font-mono-label" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.coral, display: "block", marginBottom: 16 }}>
              — {copy(language, "Tentang Saya", "About Me")}
            </span>
            <h2 className="font-display" style={{ fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 300, lineHeight: 1.05, color: C.ink, letterSpacing: "-0.02em", marginBottom: 28 }}>
              {copy(language, "Passion untuk", "A passion for")}{" "}
              <em style={{ color: C.violet, fontStyle: "italic" }}>{copy(language, "teknologi", "technology")}</em>{" "}
              &amp; {copy(language, "inovasi", "innovation")}
            </h2>
            <p style={{ fontSize: isMobile ? 15 : 16, lineHeight: 1.8, color: C.inkSoft, fontWeight: 300, marginBottom: 20, textAlign: isMobile ? "left" : "justify" }}>
              {language === "id" ? (
                <>Saya adalah <strong style={{ color: C.ink, fontWeight: 500 }}>Hermansyah</strong>, lulusan Teknologi Informasi dari Universitas Bina Sarana Informatika (2026). Lahir di Campago, 17 November 2002, kini berdomisili di Jatiasih, Kota Bekasi. Saya memiliki semangat tinggi dalam dunia web development dan teknologi digital, serta aktif berkontribusi bersama <strong style={{ color: C.coral, fontWeight: 500 }}>Nexus Digital Creative</strong>.</>
              ) : (
                <>I am <strong style={{ color: C.ink, fontWeight: 500 }}>Hermansyah</strong>, an Information Technology graduate from Universitas Bina Sarana Informatika (2026). Born in Campago on November 17, 2002, I am currently based in Jatiasih, Bekasi. I am passionate about web development and digital technology, and actively contribute to <strong style={{ color: C.coral, fontWeight: 500 }}>Nexus Digital Creative</strong>.</>
              )}
            </p>
            <p style={{ fontSize: isMobile ? 15 : 16, lineHeight: 1.8, color: C.inkSoft, fontWeight: 300, textAlign: isMobile ? "left" : "justify" }}>
              {language === "id" ? (
                <>Di luar dunia coding, saya juga aktif sebagai <strong style={{ color: C.violet, fontWeight: 600 }}>Redaktur Pelaksana</strong> di portal berita <strong style={{ color: C.ink, fontWeight: 500 }}>RianSA</strong>, serta punya pengalaman langsung di dunia F&amp;B bersama <strong style={{ color: C.green, fontWeight: 500 }}>CV YC Indonesia</strong> sebagai penjaga booth di berbagai bazar dan event. Pengalaman ini mengajarkan saya arti kerja keras, pelayanan, dan komunikasi yang baik.</>
              ) : (
                <>Beyond coding, I work as a <strong style={{ color: C.violet, fontWeight: 600 }}>Managing Editor</strong> at <strong style={{ color: C.ink, fontWeight: 500 }}>RianSA</strong> and have hands-on F&amp;B experience with <strong style={{ color: C.green, fontWeight: 500 }}>CV YC Indonesia</strong> at bazaars and events. These experiences strengthened my work ethic, customer service, and communication skills.</>
              )}
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
              {[
                "Jatiasih, Kota Bekasi",
                "IT Graduate",
                copy(language, "Lulusan Baru 2026", "Fresh Graduate 2026"),
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-mono-label"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "7px 14px",
                    border: `1px solid ${C.tan}`,
                    borderRadius: 2,
                    color: C.inkSoft,
                    backgroundColor: C.cream,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="lanyard-rig"
            role="button"
            tabIndex={0}
            aria-label={copy(language, "Kartu identitas Hermansyah. Geser untuk mengayunkan lanyard.", "Hermansyah ID card. Drag to swing the lanyard.")}
            title={copy(language, "Geser untuk mengayunkan", "Drag to swing")}
            onPointerDown={(e) => {
              dragStart.current = { x: e.clientX, y: e.clientY };
              setIsDraggingLanyard(true);
              e.currentTarget.setPointerCapture(e.pointerId);
            }}
            onPointerMove={(e) => {
              if (!isDraggingLanyard) return;
              const maxX = isMobile ? 58 : 90;
              const maxY = isMobile ? 78 : 110;
              const x = Math.max(-maxX, Math.min(maxX, e.clientX - dragStart.current.x));
              const y = Math.max(-10, Math.min(maxY, e.clientY - dragStart.current.y));
              setLanyardOffset({ x, y });
              setLanyardAngle(Math.max(-18, Math.min(18, x / 6)));
            }}
            onPointerUp={releaseLanyard}
            onPointerCancel={releaseLanyard}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                setLanyardAngle(-12);
                setLanyardOffset({ x: -42, y: 14 });
              }
              if (e.key === "ArrowRight") {
                e.preventDefault();
                setLanyardAngle(12);
                setLanyardOffset({ x: 42, y: 14 });
              }
            }}
            onKeyUp={(e) => {
              if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                setLanyardAngle(0);
                setLanyardOffset({ x: 0, y: 0 });
              }
            }}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              paddingTop: 40,
              cursor: isDraggingLanyard ? "grabbing" : "grab",
              touchAction: "none",
              userSelect: "none",
              transformOrigin: "50% 0",
              animation: isDraggingLanyard || lanyardOffset.x !== 0 || lanyardOffset.y !== 0 ? "none" : "sway 4s ease-in-out infinite",
              outlineColor: C.coral,
              outlineOffset: 8,
              borderRadius: 14,
            }}
          >

            {/* lanyard string */}
            <div style={{
              position: "absolute",
              top: 0,
              left: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 2,
              transform: `translateX(-50%) rotate(${ropeAngle}deg)`,
              transformOrigin: "top center",
              transition: isDraggingLanyard ? "none" : "all 0.65s cubic-bezier(0.22, 1.45, 0.36, 1)",
            }}>
              {/* clip metal */}
              <div style={{
                width: 18,
                height: 10,
                backgroundColor: "#b8a990",
                borderRadius: "3px 3px 0 0",
                border: "1.5px solid #a09080",
                marginBottom: 0,
              }} />
              {/* rope */}
              <div style={{
                width: 3,
                height: Math.max(34, ropeLength - 10),
                background: `repeating-linear-gradient(180deg, ${C.coral} 0px, ${C.coral} 6px, ${C.tan} 6px, ${C.tan} 12px)`,
                borderRadius: 2,
                boxShadow: "0 1px 3px rgba(19,17,31,0.18)",
              }} />
            </div>

            {/* ID card */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "min(260px, 85vw)",
                borderRadius: 14,
                backgroundColor: "#fff",
                boxShadow: "0 24px 64px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.08)",
                overflow: "hidden",
                border: `1px solid ${C.border}`,
                marginTop: 8,
                transformOrigin: "top center",
                transform: `translate3d(${lanyardOffset.x}px, ${lanyardOffset.y}px, 0) rotate(${lanyardAngle}deg)`,
                transition: isDraggingLanyard ? "none" : "transform 0.65s cubic-bezier(0.22, 1.45, 0.36, 1)",
                willChange: "transform",
              }}
            >
              {/* card top stripe */}
              <div style={{
                height: 10,
                background: `linear-gradient(90deg, ${C.coral} 0%, ${C.violet} 100%)`,
              }} />

              {/* hole for lanyard */}
              <div style={{
                position: "absolute",
                top: 16,
                left: "50%",
                transform: "translateX(-50%)",
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: C.sand,
                border: "2px solid #c8bfb4",
                zIndex: 3,
              }} />

              {/* card header */}
              <div style={{
                background: `linear-gradient(135deg, ${C.coralLight} 0%, ${C.violetLight} 100%)`,
                padding: "28px 20px 16px",
                textAlign: "center",
                borderBottom: `1px solid ${C.border}`,
              }}>
                <div className="font-mono-label" style={{ fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: C.coral, marginBottom: 12 }}>
                  Universitas Bina Sarana Informatika
                </div>
                {/* photo */}
                <div style={{
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  overflow: "hidden",
                  margin: "0 auto 12px",
                  border: `3px solid #fff`,
                  boxShadow: `0 0 0 3px ${C.coral}40`,
                  backgroundColor: C.tan,
                }}>
                  <img
                    src={fotoSaya}
                    alt="Hermansyah"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                  />
                </div>
                <div className="font-display" style={{ fontSize: 18, fontWeight: 700, color: C.ink, letterSpacing: "-0.01em" }}>
                  HERMANSYAH
                </div>
                <div className="font-mono-label" style={{ fontSize: 9, color: C.coral, letterSpacing: "0.1em", marginTop: 3 }}>
                  {copy(language, "Teknologi Informasi", "Information Technology")}
                </div>
              </div>

              {/* card body */}
              <div style={{ padding: "16px 20px 20px", backgroundColor: "#fff" }}>
                {[
                  { label: copy(language, "TTL", "Born"), value: "Campago, 17-11-2002" },
                  { label: copy(language, "Lulus", "Grad."), value: "2026" },
                  { label: "Email", value: "hermansyah171102@gmail.com" },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                    <span className="font-mono-label" style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: C.inkSoft, width: 38, flexShrink: 0, paddingTop: 1 }}>{label}</span>
                    <span className="font-mono-label" style={{ fontSize: 11, color: C.ink, fontWeight: 500, lineHeight: 1.4 }}>{value}</span>
                  </div>
                ))}

                {/* barcode decorative */}
                <div style={{ marginTop: 14, display: "flex", gap: 1.5, justifyContent: "center", alignItems: "flex-end" }}>
                  {[4,2,5,3,6,2,4,1,5,3,2,6,3,5,2,4,3,6,2,5,3,4,2,5].map((h, i) => (
                    <div key={i} style={{ width: 2, height: h * 3, backgroundColor: C.ink, borderRadius: 1, opacity: 0.7 }} />
                  ))}
                </div>
                <div className="font-mono-label" style={{ fontSize: 12, fontWeight: 600, textAlign: "center", color: C.ink, marginTop: 6, letterSpacing: "0.1em" }}>
                  085265385019
                </div>
              </div>
            </div>

            {/* shadow on floor */}
            <div style={{
              position: "absolute",
              bottom: -12,
              left: "50%",
              transform: `translateX(calc(-50% + ${lanyardOffset.x * 0.75}px)) scale(${Math.max(0.72, 1 - lanyardOffset.y / 500)})`,
              width: 180,
              height: 16,
              background: "radial-gradient(ellipse, rgba(0,0,0,0.10) 0%, transparent 70%)",
              borderRadius: "50%",
              transformOrigin: "top center",
              transition: isDraggingLanyard ? "none" : "transform 0.65s cubic-bezier(0.22, 1.45, 0.36, 1)",
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Experience ─── */
function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const isMobile = useWindowWidth() < 768;
  const { language } = useLanguage();

  const experiences = [
    {
      company: "Nexus Digital Creative",
      url: "https://nexdigicreative.com",
      role: "Web Development & Digital Specialist",
      roleEn: "Web Development & Digital Specialist",
      period: "2024 — Sekarang",
      periodEn: "2024 — Present",
      type: "Full-time",
      typeEn: "Full-time",
      location: "Kota Bekasi",
      accent: C.coral,
      accentLight: C.coralLight,
      logo: "NDC",
      desc: "Bekerja di agensi digital kreatif terpercaya yang melayani bisnis dan institusi pendidikan dalam transformasi digital modern.",
      descEn: "Working at a trusted creative digital agency that helps businesses and educational institutions with modern digital transformation.",
      points: [
        "Mengembangkan 8+ website profesional untuk klien dari berbagai industri (pendidikan, otomotif, event, dll)",
        "Membangun sistem CBT, E-Library, PPDB, Absensi QR Code, dan aplikasi kasir laundry",
        "Mengelola konten social media Instagram & TikTok untuk brand awareness klien",
        "Merancang identitas visual dan materi grafis brand klien",
        "Menangani proyek web development dari requirement hingga deployment",
      ],
      pointsEn: [
        "Developed 8+ professional websites for education, automotive, event, and other industries",
        "Built CBT, E-Library, student admission, QR attendance, and laundry cashier systems",
        "Managed Instagram and TikTok content to improve client brand awareness",
        "Designed visual identities and graphic materials for client brands",
        "Handled web projects from requirements and development through deployment",
      ],
      tags: ["Web Development", "Mobile Apps", "UI Design", "Social Media", "Graphic Design"],
      tagsEn: ["Web Development", "Mobile Apps", "UI Design", "Social Media", "Graphic Design"],
    },
    {
      company: "CV YC Indonesia",
      url: "#",
      role: "Penjaga Booth & Staff F&B",
      roleEn: "Booth Attendant & F&B Staff",
      period: "2023 — 2024",
      periodEn: "2023 — 2024",
      type: "Part-time",
      typeEn: "Part-time",
      location: "Bazar & Event, Indonesia",
      accent: C.green,
      accentLight: C.greenLight,
      logo: "YC",
      desc: "Bergabung di CV YC Indonesia yang bergerak di bidang Food & Beverage. Bertugas menjaga booth saat bazar dan event berlangsung, melayani pelanggan secara langsung dengan ramah dan profesional.",
      descEn: "Worked with CV YC Indonesia in the Food and Beverage sector, managing booths at bazaars and events while serving customers in a friendly and professional manner.",
      points: [
        "Menjaga dan mengelola booth F&B di berbagai bazar dan event",
        "Melayani pelanggan secara langsung dan memastikan kepuasan mereka",
        "Mengelola stok produk dan kebutuhan booth selama event berlangsung",
        "Berkoordinasi dengan tim untuk kelancaran operasional setiap hari",
        "Membangun kemampuan komunikasi dan pelayanan pelanggan secara nyata",
      ],
      pointsEn: [
        "Managed F&B booths at various bazaars and events",
        "Served customers directly and maintained customer satisfaction",
        "Managed product inventory and booth supplies throughout events",
        "Coordinated with the team to ensure smooth daily operations",
        "Developed practical communication and customer service skills",
      ],
      tags: ["F&B", "Customer Service", "Event Management", "Booth Operation", "Teamwork"],
      tagsEn: ["F&B", "Customer Service", "Event Management", "Booth Operations", "Teamwork"],
    },
    {
      company: "RianSA – Portal Berita",
      url: "https://riansa.top",
      role: "Redaktur Pelaksana & Penulis Artikel",
      roleEn: "Managing Editor & Article Writer",
      period: "2025 — Sekarang",
      periodEn: "2025 — Present",
      type: "Kontributor",
      typeEn: "Contributor",
      location: "Online · riansa.top",
      accent: C.violet,
      accentLight: C.violetLight,
      logo: "RSA",
      desc: "Berkontribusi sebagai Redaktur Pelaksana di portal berita RianSA — mengelola alur kerja redaksi, memastikan kualitas konten, dan menulis artikel yang dipublikasikan.",
      descEn: "Contributing as Managing Editor at RianSA news portal by overseeing editorial workflows, maintaining content quality, and writing published articles.",
      points: [
        "Menulis dan menerbitkan artikel berita berkualitas tinggi di portal riansa.top",
        "Mengelola alur kerja redaksi dan memastikan standar penerbitan terpenuhi",
        "Memimpin koordinasi tim penulis agar setiap artikel berjalan sesuai jadwal",
        "Menyeimbangkan kreativitas penulis dengan kebutuhan strategis perusahaan media",
      ],
      pointsEn: [
        "Wrote and published high-quality news articles on riansa.top",
        "Managed editorial workflows and maintained publishing standards",
        "Led writer coordination to keep each article on schedule",
        "Balanced editorial creativity with the strategic needs of a media company",
      ],
      tags: ["Jurnalisme", "Penulisan Artikel", "Redaksi", "Content Management", "Editorial"],
      tagsEn: ["Journalism", "Article Writing", "Editorial", "Content Management", "Publishing"],
    },
  ];

  const exp = experiences[activeIdx];

  return (
    <section id="experience" style={{ backgroundColor: C.cream, padding: sectionPadding(isMobile) }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div style={{ marginBottom: sectionHeadingGap(isMobile) }}>
          <span className="font-mono-label" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.coral, display: "block", marginBottom: 16 }}>
            — {copy(language, "Pengalaman", "Experience")}
          </span>
          <h2 className="font-display" style={{ fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 300, lineHeight: 1.05, color: C.ink, letterSpacing: "-0.02em" }}>
            {copy(language, "Pengalaman", "Professional")}{" "}
            <em style={{ color: C.violet, fontStyle: "italic" }}>{copy(language, "Kerja", "Experience")}</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "280px 1fr", gap: 0, border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden" }}>
          {/* sidebar list */}
          <div style={{ backgroundColor: C.sand, borderRight: isMobile ? "none" : `1px solid ${C.border}`, borderBottom: isMobile ? `1px solid ${C.border}` : "none" }}>
              {experiences.map((e, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                aria-pressed={activeIdx === i}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: isMobile ? "18px 20px" : "24px 28px",
                  border: "none",
                  borderBottom: `1px solid ${C.border}`,
                  backgroundColor: activeIdx === i ? "#fff" : "transparent",
                  cursor: "pointer",
                  borderLeft: activeIdx === i ? `3px solid ${C.coral}` : "3px solid transparent",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    backgroundColor: activeIdx === i ? C.coralLight : C.tan,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}>
                    <span className="font-mono-label" style={{ fontSize: 9, fontWeight: 700, color: activeIdx === i ? C.coral : C.inkSoft, letterSpacing: "0.05em" }}>
                      {e.logo}
                    </span>
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: C.ink, lineHeight: 1.3 }}>{e.company}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* detail panel */}
          <div style={{ backgroundColor: "#fff", padding: isMobile ? "24px 20px" : "36px 40px" }}>
            {/* header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
              <div style={{ minWidth: 0, flex: 1 }}>
                <h3 className="font-display" style={{ fontSize: isMobile ? 20 : 26, fontWeight: 400, color: C.ink, marginBottom: 6, letterSpacing: "-0.01em", wordBreak: "break-word" }}>
                  {language === "id" ? exp.role : exp.roleEn}
                </h3>
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5 }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600, color: C.coral }}>{exp.company}</span>
                  <span style={{ fontSize: 12, color: C.inkSoft }}>↗</span>
                </a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "flex-start" : "flex-end", gap: 6, width: isMobile ? "100%" : "auto" }}>
                <span
                  className="font-mono-label"
                  style={{ fontSize: 10, padding: "5px 12px", borderRadius: 99, backgroundColor: exp.accentLight, color: exp.accent, letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  {language === "id" ? exp.type : exp.typeEn}
                </span>
                <span className="font-mono-label" style={{ fontSize: 10, color: C.inkSoft, letterSpacing: "0.08em" }}>
                  {copy(language, "Lokasi", "Location")} · {exp.location}
                </span>
              </div>
            </div>

            <div style={{ height: 1, backgroundColor: C.border, marginBottom: 24 }} />

            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.inkSoft, fontWeight: 300, marginBottom: 24 }}>
              {language === "id" ? exp.desc : exp.descEn}
            </p>

            {/* bullet points */}
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
              {(language === "id" ? exp.points : exp.pointsEn).map((pt, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: C.coral, marginTop: 7, flexShrink: 0 }} />
                  <span style={{ fontSize: 14, lineHeight: 1.7, color: C.inkMid, fontWeight: 400 }}>{pt}</span>
                </li>
              ))}
            </ul>

            {/* tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {(language === "id" ? exp.tags : exp.tagsEn).map((t) => (
                <span
                  key={t}
                  className="font-mono-label"
                  style={{
                    fontSize: 10,
                    padding: "6px 14px",
                    borderRadius: 99,
                    border: `1px solid ${C.border}`,
                    color: C.inkSoft,
                    backgroundColor: C.sand,
                    letterSpacing: "0.06em",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── Skills ─── */
function Skills() {
  const isMobile = useWindowWidth() < 768;
  const { language } = useLanguage();
  return (
    <section id="skills" style={{ backgroundColor: C.cream, padding: sectionPadding(isMobile) }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: sectionHeadingGap(isMobile), flexWrap: "wrap", gap: 20 }}>
          <div>
            <span className="font-mono-label" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.coral, display: "block", marginBottom: 16 }}>
              — {copy(language, "Keahlian", "Skills")}
            </span>
            <h2 className="font-display" style={{ fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 300, lineHeight: 1.05, color: C.ink, letterSpacing: "-0.02em" }}>
              {copy(language, "Keahlian", "Skills")} &amp;{" "}
              <em style={{ color: C.violet, fontStyle: "italic" }}>{copy(language, "Perangkat", "Tools")}</em>
            </h2>
          </div>
          <p style={{ fontSize: 15, color: C.inkSoft, maxWidth: 300, fontWeight: 300, lineHeight: 1.7 }}>
            {copy(
              language,
              "Teknologi dan metode yang saya gunakan dalam pengembangan sistem informasi berbasis web.",
              "Technologies and methods I use to develop web-based information systems."
            )}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: isMobile ? 36 : 44 }}>
          {SKILLS.map(({ label, level, levelEn, accent }) => (
            <div
              key={label}
              style={{
                backgroundColor: C.sand,
                borderRadius: 6,
                padding: "24px 26px",
                border: `1px solid ${C.border}`,
                borderLeft: `4px solid ${accent}`,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <span style={{ fontSize: 15, fontWeight: 500, color: C.ink }}>{label}</span>
                <span className="font-mono-label" style={{ flexShrink: 0, fontSize: 9, color: accent, backgroundColor: "#fff", border: `1px solid ${C.border}`, borderRadius: 99, padding: "5px 9px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>{language === "id" ? level : levelEn}</span>
              </div>
            </div>
          ))}
        </div>

        {/* tag cloud */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "Git", "MySQL", "Python", "Canva", "PlantUML", "draw.io", "Black Box Testing"].map((t) => (
            <span
              key={t}
              className="font-mono-label"
              style={{
                fontSize: 11,
                padding: "8px 16px",
                borderRadius: 99,
                border: `1px solid ${C.border}`,
                color: C.inkSoft,
                backgroundColor: "#fff",
                letterSpacing: "0.04em",
                transition: "all 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = C.coralLight;
                (e.currentTarget as HTMLElement).style.borderColor = C.coral;
                (e.currentTarget as HTMLElement).style.color = C.coral;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#fff";
                (e.currentTarget as HTMLElement).style.borderColor = C.border;
                (e.currentTarget as HTMLElement).style.color = C.inkSoft;
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Certificates ─── */
function Certificates() {
  const isMobile = useWindowWidth() < 768;
  const { language } = useLanguage();

  return (
    <section id="certificates" style={{ backgroundColor: C.sand, padding: isMobile ? "80px 20px 40px" : "96px 24px 48px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: sectionHeadingGap(isMobile), flexWrap: "wrap", gap: 20 }}>
            <div>
              <span className="font-mono-label" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.coral, display: "block", marginBottom: 16 }}>
                — {copy(language, "Sertifikasi", "Certifications")}
              </span>
              <h2 className="font-display" style={{ fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 300, lineHeight: 1.05, color: C.ink, letterSpacing: "-0.02em" }}>
                {copy(language, "Kompetensi yang", "Verified")}{" "}
                <em style={{ color: C.violet, fontStyle: "italic" }}>{copy(language, "Terverifikasi", "Competencies")}</em>
              </h2>
            </div>
            <p style={{ fontSize: 15, color: C.inkSoft, maxWidth: 340, fontWeight: 300, lineHeight: 1.7 }}>
              {copy(
                language,
                "Sertifikasi profesional dan pencapaian akademik sebagai bukti kompetensi teknis dan kemampuan bahasa.",
                "Professional certifications and academic achievements that demonstrate technical and language proficiency."
              )}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))", gap: 22 }}>
            {CERTIFICATES.map((certificate) => (
              <article
                key={certificate.title}
                style={{
                  backgroundColor: "#fff",
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 10px 30px rgba(19,17,31,0.05)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: isMobile ? 220 : 240,
                    padding: 14,
                    border: "none",
                    backgroundColor: certificate.accentLight,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={certificate.preview}
                    alt={`${copy(language, "Preview", "Preview")} ${language === "id" ? certificate.title : certificate.titleEn}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: 4,
                      boxShadow: "0 8px 24px rgba(19,17,31,0.14)",
                      transition: "transform 0.35s ease",
                    }}
                  />
                </div>

                <div style={{ padding: isMobile ? "22px 20px 24px" : "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <span
                    className="font-mono-label"
                    style={{
                      alignSelf: "flex-start",
                      fontSize: 9,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "5px 10px",
                      borderRadius: 99,
                      backgroundColor: certificate.accentLight,
                      color: certificate.accent,
                      marginBottom: 14,
                    }}
                  >
                    {certificate.badge}
                  </span>
                  <h3 className="font-display" style={{ fontSize: 22, lineHeight: 1.15, fontWeight: 500, color: C.ink, marginBottom: 9 }}>
                    {language === "id" ? certificate.title : certificate.titleEn}
                  </h3>
                  <p style={{ fontSize: 12, lineHeight: 1.55, color: certificate.accent, fontWeight: 600, marginBottom: 12 }}>
                    {language === "id" ? certificate.issuer : certificate.issuerEn}
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.inkSoft, fontWeight: 300, marginBottom: 18 }}>
                    {language === "id" ? certificate.detail : certificate.detailEn}
                  </p>
                  <div style={{ marginTop: "auto", paddingTop: 16, borderTop: `1px solid ${C.border}` }}>
                    <span className="font-mono-label" style={{ display: "block", fontSize: 9, lineHeight: 1.5, color: C.inkSoft, letterSpacing: "0.06em" }}>
                      {language === "id" ? certificate.meta : certificate.metaEn}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
    </section>
  );
}

/* ─── Projects ─── */
function Projects() {
  const [active, setActive] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const isMobile = useWindowWidth() < 768;
  const { language } = useLanguage();
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <section id="projects" style={{ backgroundColor: C.sand, padding: isMobile ? "40px 20px 80px" : "48px 24px 96px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div style={{ marginBottom: sectionHeadingGap(isMobile) }}>
          <span className="font-mono-label" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.coral, display: "block", marginBottom: 16 }}>
            — {copy(language, "Proyek", "Projects")}
          </span>
          <h2 className="font-display" style={{ fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 300, lineHeight: 1.05, color: C.ink, letterSpacing: "-0.02em" }}>
            {copy(language, "Karya", "Selected")}{" "}
            <em style={{ color: C.violet, fontStyle: "italic" }}>{copy(language, "Terpilih", "Projects")}</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {visibleProjects.map((p, i) => (
            <div
              key={p.id}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                backgroundColor: active === i ? "#fff" : C.cream,
                borderRadius: 8,
                overflow: "hidden",
                border: `1px solid ${active === i ? p.accent : C.border}`,
                cursor: "default",
                transition: "all 0.25s ease",
                transform: active === i ? "translateY(-4px)" : "none",
                boxShadow: active === i ? `0 16px 40px ${p.accent}22` : "none",
              }}
            >
              <div style={{ width: "100%", height: isMobile ? 190 : 220, overflow: "hidden", backgroundColor: p.accentLight }}>
                <img
                  src={p.img}
                  alt={language === "id" ? p.title : p.titleEn}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    transform: active === i ? "scale(1.06)" : "scale(1)",
                  }}
                />
              </div>

              <div style={{ padding: isMobile ? "22px 20px 24px" : "26px 28px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span
                    className="font-mono-label"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: "5px 10px",
                      borderRadius: 99,
                      backgroundColor: p.accentLight,
                      color: p.accent,
                    }}
                  >
                    {p.tag}
                  </span>
                </div>

                <h3 className="font-display" style={{ fontSize: isMobile ? 22 : 26, fontWeight: 400, color: C.ink, marginBottom: 10, letterSpacing: "-0.01em", wordBreak: "break-word" }}>
                  {language === "id" ? p.title : p.titleEn}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: C.inkSoft, fontWeight: 300, marginBottom: 20, textAlign: isMobile ? "left" : "justify" }}>
                  {language === "id" ? p.desc : p.descEn}
                </p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono-label"
                      style={{
                        fontSize: 10,
                        padding: "4px 10px",
                        borderRadius: 2,
                        backgroundColor: C.sand,
                        color: C.inkSoft,
                        border: `1px solid ${C.border}`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: isMobile ? 32 : 44 }}>
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
            style={{
              padding: "13px 22px",
              borderRadius: 4,
              border: `1.5px solid ${C.coral}`,
              backgroundColor: showAll ? C.coralLight : "#fff",
              color: C.coral,
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            {showAll
              ? copy(language, "Tampilkan lebih sedikit", "Show fewer projects")
              : copy(language, "Lihat 4 proyek lainnya", "View 4 more projects")}
          </button>
        </div>

      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);
  const isMobile = useWindowWidth() < 768;
  const { language } = useLanguage();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      copy(language, `Pesan dari ${form.name} via Portofolio`, `Message from ${form.name} via Portfolio`)
    );
    const body = encodeURIComponent(
      copy(
        language,
        `Nama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.msg}`,
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.msg}`
      )
    );
    window.location.href = `mailto:hermansyah171102@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", msg: "" });
    setTimeout(() => setSent(false), 3500);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 4,
    border: `1.5px solid ${C.border}`,
    backgroundColor: "#fff",
    color: C.ink,
    fontSize: isMobile ? 16 : 15,
    fontFamily: "'Outfit', system-ui, sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ backgroundColor: C.cream, padding: sectionPadding(isMobile) }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* top banner */}
        <div
          style={{
            background: `linear-gradient(135deg, #1a1040 0%, #2d1060 50%, #1a1040 100%)`,
            borderRadius: 12,
            padding: isMobile ? "36px 24px" : "60px 64px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 28 : 60,
            marginBottom: isMobile ? 40 : 64,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: -60, right: -60, width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle, ${C.violet}44 0%, transparent 70%)` }} />
          <div style={{ position: "absolute", bottom: -40, left: -40, width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle, ${C.coral}33 0%, transparent 70%)` }} />
          <div>
            <span className="font-mono-label" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.coral, display: "block", marginBottom: 16 }}>
              — {copy(language, "Mari Terhubung", "Let's Connect")}
            </span>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 300, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.02em", marginBottom: 20 }}>
              {copy(language, "Punya proyek", "Have an")} <em style={{ color: C.coral, fontStyle: "italic" }}>{copy(language, "menarik", "exciting project")}</em>? {copy(language, "Mari berkolaborasi.", "Let's collaborate.")}
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#a8a09a", fontWeight: 300, textAlign: isMobile ? "left" : "justify" }}>
              {copy(
                language,
                "Saya terbuka untuk freelance, full-time, maupun kolaborasi kreatif. Kirim pesan dan saya akan segera merespons.",
                "I am open to freelance, full-time opportunities, and creative collaborations. Send a message and I will get back to you."
              )}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, justifyContent: "center" }}>
            {[
              { label: "Email", val: "hermansyah171102@gmail.com", href: "mailto:hermansyah171102@gmail.com" },
              { label: "LinkedIn", val: "linkedin.com/in/herman-syah-7b46b72a8", href: "https://www.linkedin.com/in/herman-syah-7b46b72a8" },
              { label: "Instagram", val: "@hermansyah.17", href: "https://www.instagram.com/hermansyah.17" },
              { label: "WhatsApp", val: "+62 852-6538-5019", href: "https://wa.me/6285265385019" },
            ].map(({ label, val, href }) => (
              <div key={label} style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 5 : 16, alignItems: "flex-start" }}>
                <span className="font-mono-label" style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: C.coral, width: isMobile ? "auto" : 64, flexShrink: 0 }}>{label}</span>
                <a href={href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, color: "#c8c0b8", overflowWrap: "anywhere", minWidth: 0, textDecoration: "none" }}>{val}</a>
              </div>
            ))}
          </div>
        </div>

        {/* form */}
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h3 className="font-display" style={{ fontSize: 32, fontWeight: 300, color: C.ink, marginBottom: 36, textAlign: "center", letterSpacing: "-0.01em" }}>
            {copy(language, "Kirim", "Send a")} <em style={{ color: C.coral, fontStyle: "italic" }}>{copy(language, "Pesan", "Message")}</em>
          </h3>
          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16 }}>
              <div>
                <label htmlFor="contact-name" className="font-mono-label" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.inkSoft, display: "block", marginBottom: 8 }}>{copy(language, "Nama", "Name")}</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder={copy(language, "Nama lengkap", "Full name")}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = C.coral)}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = C.border)}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="font-mono-label" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.inkSoft, display: "block", marginBottom: 8 }}>Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="hello@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = C.coral)}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = C.border)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="font-mono-label" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.inkSoft, display: "block", marginBottom: 8 }}>{copy(language, "Pesan", "Message")}</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder={copy(language, "Ceritakan tentang proyek Anda...", "Tell me about your project...")}
                value={form.msg}
                onChange={(e) => setForm({ ...form, msg: e.target.value })}
                required
                rows={5}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) => ((e.target as HTMLElement).style.borderColor = C.coral)}
                onBlur={(e) => ((e.target as HTMLElement).style.borderColor = C.border)}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: sent ? C.green : C.coral,
                color: "#fff",
                padding: "16px 32px",
                border: "none",
                borderRadius: 4,
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.25s ease",
                transform: "translateY(0)",
              }}
              onMouseEnter={(e) => {
                if (!sent) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#5535ee";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!sent) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = C.coral;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }
              }}
            >
              {sent
                ? copy(language, "Aplikasi Email Dibuka", "Email App Opened")
                : copy(language, "Kirim via Email", "Send via Email")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const isMobile = useWindowWidth() < 768;
  return (
    <footer style={{ background: "linear-gradient(135deg, #1a1040 0%, #2d1060 100%)", padding: isMobile ? "32px 20px" : "32px 40px" }}>
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "center",
          textAlign: isMobile ? "center" : "left",
          gap: 16,
        }}
      >
        <span className="font-mono-label" style={{ fontSize: 10, letterSpacing: "0.1em", color: "#a09ab8" }}>
          © 2026 Hermansyah
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 16 : 20, justifyContent: isMobile ? "center" : "flex-end", paddingRight: isMobile ? 0 : 8 }}>
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/herman-syah-7b46b72a8" },
            { label: "Instagram", href: "https://www.instagram.com/hermansyah.17" },
            { label: "Email", href: "mailto:hermansyah171102@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-label"
              style={{
                textDecoration: "none",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#a09ab8",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#a09ab8")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─── Root ─── */
export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "id";
    return localStorage.getItem("portfolio-language") === "en" ? "en" : "id";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
    document.title =
      language === "id"
        ? "Hermansyah — Web Developer & Lulusan TI"
        : "Hermansyah — Web Developer & IT Graduate";
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div style={{ minHeight: "100%", backgroundColor: C.cream }}>
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Certificates />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
