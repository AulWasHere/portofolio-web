"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ClickSpark from "@/components/ClickSpark";

export default function Home() {
  const posterScrollRef = useRef<HTMLDivElement>(null);
  const scrollPoster = (dir: 'left' | 'right') => {
    posterScrollRef.current?.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' });
  };
  const posterItems = ['/poster/10.png','/poster/21.5 crew.png','/poster/Aulia Rumi Siregar_Pandangan Al-Quran_Mengelola Waktu dan prioritas.png','/poster/AWAY MADURA.png','/poster/AWAYDAYS TANGERANG.png','/poster/bagaimana jika 2.jpg','/poster/belongs old.png','/poster/CHAPTER 1 BLNKG.png','/poster/CHAPTER 1 DPN.png','/poster/CHOOSE YOU.png','/poster/DS ATAS BAWAH.png','/poster/elang jawa selalu.png','/poster/FOREVER CHANTING FOREVER STANDING.png','/poster/GONZALES.png','/poster/i\'m ready.png','/poster/IBU KOTA PERIANGAN.png','/poster/kaos putih lemon.png','/poster/kaos putih.png','/poster/KEMEJA PDL HITAM UTY.png','/poster/KOLASE DIGDAYASEMBADA - MENCINTAI KOTA DAN KLUB TANPA SYARAT.png','/poster/MENOLAK LUPA TRAGEDI 1.png','/poster/MF ULTRAS.png','/poster/NAMOY NOBAR IND v ARB.png','/poster/POSTER RETRO CAMPING.png','/poster/POSTINGAN 12 TV RUSAK.png','/poster/POSTINGAN 13 GAGAK.png','/poster/POSTINGAN 19 BUNGA.png','/poster/POSTINGAN 21 SAKIT KEPALA.png','/poster/PRICELIST FREE FIRE.png','/poster/PSMS IS DOPAMINE.png','/poster/SENT TO ME FROM HEAVEN SALLY CINNAMON.png','/poster/snapgram 2.png','/poster/snapgram 3.png','/poster/STIKER 3.png','/poster/STIKER AWAY HITAM.png','/poster/SVC_Aulia Rumi Siregar_Katalisator Menuju Indonesia Emas 2045 Melalui Era Digitalisasi..png','/poster/TES LOGO 4.png','/poster/TES LOGO 6.png','/poster/wastu 2.png','/poster/wastu 3.png','/poster/YOFALAB DESAIN 1.png','/poster/YOFALAB DESAIN 2.png','/poster/YOFALAB DESAIN 3.png'];

  const sosmedItems = ['/sosmed/1.png','/sosmed/2.png','/sosmed/3.png','/sosmed/312.png','/sosmed/4.png','/sosmed/49 TH PSS.png','/sosmed/5.png','/sosmed/a.png','/sosmed/a1.png','/sosmed/a2.png','/sosmed/a3.png','/sosmed/a4.png','/sosmed/a5.png','/sosmed/a6.png','/sosmed/a7.png','/sosmed/a8.png','/sosmed/a9.png','/sosmed/AWAY KEDIRI.png','/sosmed/AWAY VS PERSITA.png','/sosmed/b.png','/sosmed/bagaimana jika 1.png','/sosmed/c.png','/sosmed/d.png','/sosmed/e.png','/sosmed/f.png','/sosmed/feed-ig-bang-farros_01.jpg','/sosmed/g.png','/sosmed/h.png','/sosmed/i.png','/sosmed/j.png','/sosmed/k.png','/sosmed/l.png','/sosmed/m.png','/sosmed/NAMOY NOBAR IND v ARB.png','/sosmed/o.png','/sosmed/ORIGINAL MAGUWO 1.png','/sosmed/p.png','/sosmed/q.png','/sosmed/r.png','/sosmed/RUMAH 1.png','/sosmed/s.png','/sosmed/snapgram 1.png','/sosmed/t.png','/sosmed/u.png','/sosmed/v.png','/sosmed/VOL 1.png','/sosmed/vs arema.png','/sosmed/VS BARITO PUTERA.png','/sosmed/VS BORNEO.png','/sosmed/VS MALUT.png','/sosmed/VS PERSEKAT.png','/sosmed/VS PERSIKU.png','/sosmed/VS SEMEN PADANG.png','/sosmed/w.png','/sosmed/x.png','/sosmed/y.png','/sosmed/z.png'];
  
  

  
  const webProjects = [
    {
      id: "bbqride",
      title: "BBQ RIDE BANDUNG 2026",
      tech: "Laravel, Flutter, MySQL",
      image: "/website/1.png",
      images: [
        "/website/1.png",
        "/website/2.png",
        "/website/3.png",
        "/website/4.png",
        "/website/5.png",
        "/website/6.png",
        "/website/7.png",
        "/website/8.png"
      ],
      desc: "Sistem Manajemen Akses Pengunjung dan Digitalisasi Katalog Pameran untuk event BBQ Ride Bandung. Dibangun dengan arsitektur REST API yang mengintegrasikan Dashboard Web (Admin) dan Aplikasi Mobile (Petugas & Pengunjung).",
      features: [
        "Smart Crowd Control: Pemindaian tiket QR Code terintegrasi dengan indikator kapasitas venue secara real-time (Aman, Padat, Overload).",
        "Katalog Digital Interaktif: Menampilkan spesifikasi teknis dan dokumentasi visual motor kustom pameran.",
        "Dashboard Admin: Monitoring statistik pengunjung dan manajemen tiket secara dinamis.",
        "Interactive Scheduler: Live countdown timer dan jadwal acara (rundown) interaktif."
      ]
    }
  ,
    {
      id: "kasir",
      title: "MODERN WEB POS (POINT OF SALE)",
      tech: "HTML5, Tailwind CSS, Vanilla JS",
      image: "/website/kasir1.png",
      images: [
        "/website/kasir1.png",
        "/website/kasir2.png",
        "/website/kasir3.png",
        "/website/kasir4.png",
        "/website/kasir5.png"
      ],
      desc: "Aplikasi Kasir (Point of Sale) interaktif bergaya modern yang dirancang khusus untuk mempercepat proses transaksi ritel dan UMKM. Dibangun sepenuhnya menggunakan arsitektur Frontend murni (Client-side) yang memanfaatkan LocalStorage API untuk manajemen state, menghasilkan aplikasi yang sangat responsif, ringan, dan dapat berjalan mulus tanpa ketergantungan pada server (Offline-capable).",
      features: [
        "Smart Cart & Checkout: Manajemen keranjang belanja real-time dengan kalkulasi otomatis untuk subtotal, hitungan uang kembalian, dan dukungan flow pembayaran QRIS.",
        "Live Inventory System (CRUD): Dashboard Admin interaktif untuk manajemen katalog produk (Tambah, Edit, Hapus) yang terhubung langsung dengan ketersediaan stok di layar kasir.",
        "Dynamic Receipt Generator: Pembuatan struk transaksi digital secara dinamis yang mencatat detail pesanan, waktu transaksi (real-time), dan otomatis memformat mata uang (IDR).",
        "Sales History & Reporting: Pencatatan riwayat seluruh transaksi secara persisten dengan fitur rekapitulasi dan pencetakan laporan penjualan (Print-ready/PDF)."
      ]
    }
  ];
    const [selectedWeb, setSelectedWeb] = useState<typeof webProjects[0] | null>(null);

  const [sosmedIndex, setSosmedIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const handleDownloadCV = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };
  const nextSosmed = () => setSosmedIndex(i => (i + 1) % sosmedItems.length);
  const prevSosmed = () => setSosmedIndex(i => (i - 1 + sosmedItems.length) % sosmedItems.length);

  // Fitur Anti-Copy
  useEffect(() => {
    window.scrollTo(0, 0);
      const handleContextMenu = (e: MouseEvent) => { e.preventDefault(); };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return (
    <ClickSpark sparkColor="#E63946" sparkSize={16} sparkRadius={30} sparkCount={12} duration={600} easing="ease-out" extraScale={1.3}>
    <div className="font-sans text-[#000000]">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Ticker */}
      <div className="w-full bg-[#F3722C] border-b-[3px] border-[#000000] overflow-hidden py-2 select-none">
        <div className="flex whitespace-nowrap animate-marquee gap-8 text-[#ffffff] uppercase font-bold tracking-wider items-center">

            <span className="flex items-center gap-2"><img src="/skills/graphic-design.png" className="w-6 h-6" alt="" /> VISUAL & KONTEN SOSMED</span>
            <span className="flex items-center gap-2"><img src="/skills/prototype.png" className="w-6 h-6" alt="" /> WEB & PENGOLAHAN DATA</span>
            <span className="flex items-center gap-2"><img src="/skills/illustration.png" className="w-6 h-6" alt="" /> 100+ PROYEK DESAIN</span>
            <span className="flex items-center gap-2"><img src="/skills/sketch.png" className="w-6 h-6" alt="" /> OPEN FOR FREELANCE</span>

            <span className="flex items-center gap-2"><img src="/skills/graphic-design.png" className="w-6 h-6" alt="" /> VISUAL & KONTEN SOSMED</span>
            <span className="flex items-center gap-2"><img src="/skills/prototype.png" className="w-6 h-6" alt="" /> WEB & PENGOLAHAN DATA</span>
            <span className="flex items-center gap-2"><img src="/skills/illustration.png" className="w-6 h-6" alt="" /> 100+ PROYEK DESAIN</span>
            <span className="flex items-center gap-2"><img src="/skills/sketch.png" className="w-6 h-6" alt="" /> OPEN FOR FREELANCE</span>

            <span className="flex items-center gap-2"><img src="/skills/graphic-design.png" className="w-6 h-6" alt="" /> VISUAL & KONTEN SOSMED</span>
            <span className="flex items-center gap-2"><img src="/skills/prototype.png" className="w-6 h-6" alt="" /> WEB & PENGOLAHAN DATA</span>
            <span className="flex items-center gap-2"><img src="/skills/illustration.png" className="w-6 h-6" alt="" /> 100+ PROYEK DESAIN</span>
            <span className="flex items-center gap-2"><img src="/skills/sketch.png" className="w-6 h-6" alt="" /> OPEN FOR FREELANCE</span>

          </div>
      </div>

      <header className="w-full bg-[#F1FAEE] border-b-[3px] border-[#000000] sticky top-0 z-50 flex items-center justify-between p-4 px-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border-[2px] border-[#000000] p-1 bg-[#ffffff]">
            <div className="w-3 h-3 rounded-full bg-[#E63946] border-[1.5px] border-[#000000]"></div>
            <div className="w-3 h-3 rounded-full bg-[#F1C40F] border-[1.5px] border-[#000000]"></div>
            <div className="w-3 h-3 rounded-full bg-[#2A9D8F] border-[1.5px] border-[#000000]"></div>
          </div>
          <span className="font-bold text-xl uppercase tracking-wider text-[#000000]">AULIA RUMI SIREGAR</span>
        </div>
        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-[#2A9D8F] text-white border-[2px] border-[#000000] shadow-[2px_2px_0px_#000000]">
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse border-[1px] border-[#000000]"></span>
          <span className="font-bold uppercase tracking-wider">OPEN FOR WORK</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-[#A8DADC] border-b-[3px] border-[#000000] p-8 md:p-16 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto bg-[#F1FAEE] border-[3px] border-[#000000] shadow-[8px_8px_0px_#000000] relative z-10">
          <div className="bg-[#ffffff] border-b-[3px] border-[#000000] px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#000000]">
              <span className="font-bold uppercase tracking-wider">TENTANG SAYA</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-12 relative">
            <div className="lg:col-span-7 flex flex-col justify-center gap-6">
              <h1 className="text-5xl md:text-7xl font-black uppercase text-[#000000] leading-none tracking-tight">
                CRAFTING VISUALS <br />
                <span className="bg-[#F1C40F] px-4 py-1 border-[3px] border-[#000000] shadow-[4px_4px_0px_#000000] inline-block -rotate-2 transform hover:rotate-0 transition-transform cursor-crosshair">&amp; CODE FOR THE</span> <br />
                <span className="text-[#E63946] drop-shadow-[3px_3px_0px_#000000]">DIGITAL ERA.</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-[#333333] max-w-2xl border-l-[4px] border-[#E63946] pl-4">
                Halo! Aku Aulia Rumi Siregar, Memadukan logika IT & pengolahan data dengan kreativitas visual untuk kebutuhan Administrasi Digital, Social Media Specialist, hingga Desain Grafis.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="font-bold uppercase px-6 py-4 bg-[#E63946] text-[#ffffff] border-[3px] border-[#000000] shadow-[5px_5px_0px_#000000] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#000000] transition-all" onClick={() => document.getElementById('web-apps')?.scrollIntoView({ behavior: 'smooth' })}>
                    LIHAT KARYA
                  </button>
                <a href="/CV_Aulia_Rumi_Siregar.pdf" download="CV_Aulia_Rumi_Siregar.pdf" target="_blank" rel="noopener noreferrer" onClick={handleDownloadCV} className="font-bold uppercase px-6 py-4 bg-[#F1C40F] text-[#000000] border-[3px] border-[#000000] shadow-[5px_5px_0px_#000000] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#000000] transition-all flex items-center justify-center inline-block">
                UNDUH CV [PDF]
              </a>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="bg-[#ffffff] p-4 border-[3px] border-[#000000] shadow-[6px_6px_0px_#000000] transform -rotate-3 hover:rotate-0 transition-transform duration-300 w-full max-w-[320px]">
                <div className="w-full aspect-square bg-[#000000] border-[2px] border-[#000000] overflow-hidden relative">
                  <img src="/profile.png" alt="Aulia Rumi" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-[#D8E2DC] border-b-[3px] border-[#000000] p-8 md:p-16">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#F1C40F] border-[3px] border-[#000000] p-6 shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-transform flex flex-col justify-center">
            <div className="text-4xl font-black mb-2 text-[#000000]">100+ KARYA</div>
            <p className="font-medium text-[#000000]">Karya Desain Grafis, Poster, dan Konten Media Sosial.</p>
          </div>
          <div className="bg-[#2A9D8F] border-[3px] border-[#000000] p-6 shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-transform flex flex-col justify-center">
            <div className="text-4xl font-black mb-2 text-[#ffffff]">IT & DATA</div>
            <p className="font-medium text-[#ffffff]">Pengolahan data administrasi dan pengembangan aplikasi web.</p>
          </div>
          <div className="bg-[#F3722C] border-[3px] border-[#000000] p-6 shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-transform flex flex-col justify-center">
            <div className="text-4xl font-black mb-2 text-[#ffffff]">MAHASISWA</div>
            <p className="font-medium text-[#ffffff]">Mahasiswa aktif jurusan Informatika di Univ. Teknologi Yogyakarta.</p>
          </div>
          <div className="bg-[#ffffff] border-[3px] border-[#000000] p-6 shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-transform flex flex-col justify-center">
            <div className="text-4xl font-black mb-2 text-[#000000]">FREELANCE</div>
            <p className="font-medium text-[#000000]">Tersedia untuk proyek freelance Graphic Design, Social Media Specialist, dan Administrasi/Pengolahan Data.</p>
          </div>
        </div>
      </section>

      
      {/* Web & Mobile Apps Section */}
      <section id="web-apps" className="w-full bg-[#1D3557] border-b-[3px] border-[#000000] p-8 md:p-16">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 bg-[#F1C40F] border-[2px] border-[#000000] shadow-[3px_3px_0px_#000000] font-bold uppercase text-[#000000]">SOFTWARE</span>
            <h2 className="text-3xl font-black uppercase text-white">WEB & MOBILE APPS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project) => (
              <div key={project.id} className="bg-[#ffffff] border-[3px] border-[#000000] p-4 flex flex-col hover:-translate-y-2 shadow-[8px_8px_0px_#000000] transition-transform cursor-pointer" onClick={() => setSelectedWeb(project)}>
                <div className="w-full h-48 bg-[#f0f0f0] border-[3px] border-[#000000] mb-4 overflow-hidden relative group">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-[#E63946] text-white font-bold px-4 py-2 border-2 border-black">LIHAT DETAIL</span>
                  </div>
                </div>
                <span className="bg-[#2A9D8F] text-[#ffffff] px-2 py-1 uppercase font-bold text-xs self-start mb-2 border-[2px] border-black">{project.tech}</span>
                <h3 className="text-2xl font-black uppercase mb-2">{project.title}</h3>
                <p className="font-medium text-[#333333] text-sm flex-grow">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pop-up Modal for Web Details */}
      {selectedWeb && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedWeb(null)}>
          <div className="bg-[#ffffff] border-[4px] border-[#000000] shadow-[12px_12px_0px_#F1C40F] max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-[#E63946] border-b-[4px] border-black p-4 flex justify-between items-center z-10">
              <h2 className="text-2xl font-black text-white">{selectedWeb.title}</h2>
              <button onClick={() => setSelectedWeb(null)} className="bg-black text-white font-black w-8 h-8 flex items-center justify-center border-2 border-white hover:bg-white hover:text-black transition-colors">X</button>
            </div>
            <div className="p-6 md:p-8">
              {/* Image Gallery Scroll */}
              <div className="flex overflow-x-auto gap-4 pb-4 mb-6 snap-x">
                {selectedWeb.images ? selectedWeb.images.map((img, i) => (
                  <img key={i} src={img} alt={selectedWeb.title + " " + i} className="w-[85%] md:w-[70%] h-64 md:h-[400px] shrink-0 object-contain border-[3px] border-black shadow-[4px_4px_0px_#000000] snap-center bg-black" loading="lazy" />
                )) : (
                  <img src={selectedWeb.image} alt={selectedWeb.title} className="w-full h-auto border-[3px] border-black shadow-[4px_4px_0px_#000000]" />
                )}
              </div>
              <div className="flex gap-2 mb-6">
                <span className="bg-black text-white px-3 py-1 font-bold text-sm uppercase">TECH STACK:</span>
                <span className="bg-[#F1C40F] text-black border-2 border-black px-3 py-1 font-bold text-sm">{selectedWeb.tech}</span>
              </div>
              <h3 className="text-xl font-black mb-2">TENTANG PROYEK</h3>
              <p className="font-medium text-[#333333] mb-6">{selectedWeb.desc}</p>
              <h3 className="text-xl font-black mb-2">FITUR UTAMA</h3>
              <ul className="list-none space-y-2 mb-6">
                {selectedWeb.features.map((feat, i) => (
                  <li key={i} className="flex gap-2 items-start font-medium"><span className="text-[#E63946] font-black">❯</span> {feat}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Projects Section */}
      <section id="projects" className="w-full bg-[#F1FAEE] border-b-[3px] border-[#000000] p-8 md:p-16">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 bg-[#ffffff] border-[2px] border-[#000000] shadow-[3px_3px_0px_#000000] font-bold uppercase">PORTOFOLIO</span>
            <h2 className="text-3xl font-black uppercase">KARYA PILIHAN</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 2: Poster */}
            <div className="bg-[#ffffff] border-[3px] border-[#000000] p-4 flex flex-col hover:-translate-y-1 shadow-[6px_6px_0px_#000000] transition-transform">
              <span className="bg-[#E63946] text-[#ffffff] px-2 py-1 uppercase font-bold text-sm self-start mb-4 border-[2px] border-black">GRAPHIC DESIGN</span>
              <div className="w-full h-56 bg-[#f0f0f0] border-[3px] border-[#000000] mb-4 overflow-hidden relative">
                <div ref={posterScrollRef} className="flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                  {posterItems.map((src, i) => (
                    <div key={i} className="shrink-0 w-auto h-full snap-center mr-2 border-r-2 border-black">
                      <img src={src} className="h-full w-auto object-cover" alt="Poster" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase mb-2">DESAIN POSTER</h3>
              <p className="font-medium text-[#333333] mb-4 flex-grow">Kumpulan karya desain grafis, poster event, dan ilustrasi.</p>
              <div className="flex gap-2">
                <button onClick={() => scrollPoster('left')} className="flex-1 py-3 bg-[#F1C40F] text-[#000000] border-[3px] border-[#000000] font-bold hover:bg-[#F3722C] transition-colors shadow-[4px_4px_0px_#000000] active:translate-y-1 active:translate-x-1 active:shadow-none">&lt; GESER</button>
                <button onClick={() => scrollPoster('right')} className="flex-1 py-3 bg-[#F1C40F] text-[#000000] border-[3px] border-[#000000] font-bold hover:bg-[#F3722C] transition-colors shadow-[4px_4px_0px_#000000] active:translate-y-1 active:translate-x-1 active:shadow-none">GESER &gt;</button>
              </div>
            </div>

            {/* Card 3: Sosmed */}
            <div className="bg-[#ffffff] border-[3px] border-[#000000] p-4 flex flex-col hover:-translate-y-1 shadow-[6px_6px_0px_#000000] transition-transform">
              <span className="bg-[#F1C40F] text-[#000000] px-2 py-1 uppercase font-bold text-sm self-start mb-4 border-[2px] border-black">SOCIAL MEDIA</span>
              <div className="w-full h-56 bg-[#f0f0f0] border-[3px] border-[#000000] mb-4 overflow-hidden relative flex justify-center items-center">
                {sosmedItems.map((src, idx) => {
                  const isActive = idx === sosmedIndex;
                  const isPrev = idx === (sosmedIndex - 1 + sosmedItems.length) % sosmedItems.length;
                  const isNext = idx === (sosmedIndex + 1) % sosmedItems.length;
                  if (!isActive && !isPrev && !isNext) return null;
                  return (
                    <img key={idx} src={src} className={`absolute w-auto h-full object-cover border-4 border-black transition-all duration-300 ${isActive ? 'z-20 scale-100 rotate-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : 'z-10 scale-90 opacity-40 blur-[2px]'}`} style={{ transform: isActive ? '' : isPrev ? 'translateX(-30%) rotate(-5deg)' : 'translateX(30%) rotate(5deg)' }} alt="Sosmed" loading="lazy" />
                  );
                })}
              </div>
              <h3 className="text-2xl font-black uppercase mb-2">KONTEN SOSMED</h3>
              <p className="font-medium text-[#333333] mb-4 flex-grow">Desain kreatif untuk feed Instagram dan media promosi digital.</p>
              <div className="flex gap-2">
                <button onClick={prevSosmed} className="flex-1 py-3 bg-[#2A9D8F] text-[#ffffff] border-[3px] border-[#000000] font-bold hover:bg-[#F3722C] transition-colors shadow-[4px_4px_0px_#000000] active:translate-y-1 active:translate-x-1 active:shadow-none">&lt; GESER</button>
                <button onClick={nextSosmed} className="flex-1 py-3 bg-[#2A9D8F] text-[#ffffff] border-[3px] border-[#000000] font-bold hover:bg-[#F3722C] transition-colors shadow-[4px_4px_0px_#000000] active:translate-y-1 active:translate-x-1 active:shadow-none">GESER &gt;</button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Experience & Education Section */}
      <section className="w-full bg-[#A8DADC] border-b-[3px] border-[#000000] p-8 md:p-16">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Experience */}
          <div className="bg-[#F1FAEE] border-[3px] border-[#000000] shadow-[8px_8px_0px_#000000] p-6 md:p-8">
            <h2 className="text-3xl font-black uppercase mb-6 border-b-[3px] border-black pb-2">
              PENGALAMAN
            </h2>
            <div className="flex flex-col gap-4">
              <div className="border-[3px] border-[#000000] p-4 bg-[#ffffff] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000000] transition-all">
                <h3 className="font-black text-xl uppercase mb-1 text-[#E63946]">Graphic Design Intern</h3>
                <p className="font-bold text-sm bg-black text-white inline-block px-2 py-1 mb-2">Unteyo Journey (Okt - Des 2024)</p>
                <p className="font-medium text-[#333333] leading-snug">Membantu pembuatan aset visual dan editan video untuk kebutuhan media sosial klien. Terbiasa bekerja dengan deadline cepat dan teliti menyesuaikan desain dengan brief yang diberikan.</p>
              </div>
              <div className="border-[3px] border-[#000000] p-4 bg-[#ffffff] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000000] transition-all">
                <h3 className="font-black text-xl uppercase mb-1 text-[#2A9D8F]">Moderator Ceremony</h3>
                <p className="font-bold text-sm bg-black text-white inline-block px-2 py-1 mb-2">Event Jamming Football (2023)</p>
                <p className="font-medium text-[#333333] leading-snug">Memandu jalannya acara dan menghidupkan suasana agar audiens tetap antusias. Bertanggung jawab menjaga alur rundown berjalan lancar dan asik dari awal hingga akhir.</p>
              </div>
              <div className="border-[3px] border-[#000000] p-4 bg-[#ffffff] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000000] transition-all">
                <h3 className="font-black text-xl uppercase mb-1 text-[#F1C40F]">Sekretaris</h3>
                <p className="font-bold text-sm bg-black text-white inline-block px-2 py-1 mb-2">Meet and Greet 4 (Nov 2022)</p>
                <p className="font-medium text-[#333333] leading-snug">Mengurus pendataan, surat-menyurat, dan kebutuhan administrasi kepanitiaan. Membantu ketua mengkoordinasikan pengurus dan mengatasi kendala teknis saat hari-H acara.</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-[#a394f4] border-[3px] border-[#000000] shadow-[8px_8px_0px_#000000] p-6 md:p-8">
            <h2 className="text-3xl font-black uppercase mb-6 border-b-[3px] border-black pb-2 text-white">
              PENDIDIKAN
            </h2>
            <div className="flex flex-col gap-4">
              <div className="border-[3px] border-[#000000] p-4 bg-[#ffffff] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000000] transition-all">
                <h3 className="font-black text-xl uppercase mb-1">S1 Informatika</h3>
                <p className="font-bold text-sm bg-[#E63946] text-white inline-block px-2 py-1 mb-2">Universitas Teknologi Yogyakarta (2023 - Sekarang)</p>
                <p className="font-medium text-[#333333] leading-snug">Fokus belajar manajemen data, sistem IT dasar, dan melatih logika problem solving untuk dunia kerja digital.</p>
              </div>
              <div className="border-[3px] border-[#000000] p-4 bg-[#ffffff] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000000] transition-all">
                <h3 className="font-black text-xl uppercase mb-1">Jurusan IPA</h3>
                <p className="font-bold text-sm bg-[#E63946] text-white inline-block px-2 py-1 mb-2">SMA Panca Budi Medan (2021 - 2023)</p>
                <p className="font-medium text-[#333333] leading-snug">Aktif berorganisasi dan terjun di kepanitiaan untuk membangun kedisiplinan serta teamwork.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="max-w-[1240px] mx-auto bg-[#F1C40F] border-[3px] border-[#000000] shadow-[8px_8px_0px_#000000] p-6 md:p-8">
          <h2 className="text-3xl font-black uppercase mb-6">
            KEAHLIAN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-black uppercase mb-4 bg-black text-white inline-block px-3 py-1 text-lg">Hard Skills</p>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: 'CapCut', file: 'capcut.png' },
                  { name: 'Premiere', file: 'premiere.png' },
                  { name: 'Canva', file: 'canva.png' },
                  { name: 'Photoshop', file: 'photoshop.png' },
                  { name: 'Illustrator', file: 'illustrator.png' },
                  { name: 'Word', file: 'word.png' },
                  { name: 'Excel', file: 'excel.png' },
                  { name: 'Sheets', file: 'sheets.png' },
                    { name: 'VS Code', file: 'vscode.png' }
                ].map(skill => (
                  <div key={skill.name} className="bg-[#ffffff] border-[3px] border-[#000000] shadow-[4px_4px_0px_#000000] hover:-translate-y-1 transition-transform flex flex-col items-center justify-center w-20 h-20 group relative cursor-help">
                    <img src={`/skills/${skill.file}`} alt={skill.name} className="w-10 h-10 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden'); }} />
                    <span className="text-xs font-bold text-center leading-tight hidden text-black px-1">{skill.name}</span>
                    <span className="absolute -top-10 bg-black text-white text-xs font-bold px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border-2 border-black shadow-[2px_2px_0px_#ffffff] z-10">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-black uppercase mb-4 bg-white text-black border-[3px] border-black inline-block px-3 py-1 text-lg">Soft Skills</p>
              <div className="flex flex-wrap gap-2">
                {['Public Speaking', 'Communication', 'Fast Response', 'Problem Solving', 'Detail-Oriented', 'Adaptif', 'Time Management'].map(skill => (
                  <span key={skill} className="bg-black text-white border-[2px] border-[#000000] font-bold px-3 py-1 shadow-[2px_2px_0px_#000000]">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="w-full bg-[#a394f4] border-b-[3px] border-[#000000] p-8 md:p-16 relative">
        <div className="max-w-[1000px] mx-auto bg-[#ffffff] border-[3px] border-[#000000] shadow-[8px_8px_0px_#000000] p-8 md:p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 text-[#000000]">MARI BERKOLABORASI</h2>
          <p className="text-lg md:text-xl font-medium text-[#333333] mb-10 max-w-2xl mx-auto">
            Punya ide proyek menarik atau butuh bantuan untuk desain grafis dan website? Jangan ragu untuk menghubungi saya!
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
            <a href="https://wa.me/6281269162524" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto font-black uppercase px-6 py-4 bg-[#2A9D8F] text-[#ffffff] border-[3px] border-[#000000] shadow-[4px_4px_0px_#000000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000000] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all flex items-center justify-center gap-2">
              WHATSAPP
            </a>
            <a href="https://instagram.com/histori.aul" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto font-black uppercase px-6 py-4 bg-[#E63946] text-[#ffffff] border-[3px] border-[#000000] shadow-[4px_4px_0px_#000000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000000] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all flex items-center justify-center gap-2">
              INSTAGRAM
            </a>
            <a href="https://github.com/AulWasHere" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto font-black uppercase px-6 py-4 bg-[#000000] text-[#ffffff] border-[3px] border-[#000000] shadow-[4px_4px_0px_#000000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000000] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all flex items-center justify-center gap-2">
              GITHUB
            </a>
            <a href="mailto:aulwashere@gmail.com" className="w-full sm:w-auto font-black uppercase px-6 py-4 bg-[#F1C40F] text-[#000000] border-[3px] border-[#000000] shadow-[4px_4px_0px_#000000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000000] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all flex items-center justify-center gap-2">
              EMAIL
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#F1FAEE] p-6 text-center border-t-[3px] border-[#000000]">
        <p className="font-bold uppercase tracking-widest text-sm text-[#333333]">© 2026 AULIA RUMI SIREGAR // PORTOFOLIO</p>
      </footer>
    </div>
    
      {/* Toast Notification */}
      <div className={`fixed bottom-8 right-8 z-50 bg-[#2A9D8F] text-[#ffffff] border-[4px] border-[#000000] p-6 max-w-sm transition-all duration-500 shadow-[8px_8px_0px_#000000] ${showToast ? 'translate-x-0 opacity-100' : 'translate-x-[150%] opacity-0'}`}>
        <div className="flex items-start gap-4">
          <span className="text-4xl animate-bounce">📄</span>
          <div>
            <h4 className="font-black uppercase text-xl mb-1 shadow-black drop-shadow-md">CV DIUNDUH!</h4>
            <p className="font-medium text-sm leading-snug">Terima kasih! File CV akan segera tersimpan. Mari ciptakan sesuatu yang luar biasa bersama!</p>
          </div>
        </div>
        <button onClick={() => setShowToast(false)} className="absolute top-2 right-2 text-white font-black hover:text-[#F1C40F]">&times;</button>
      </div>


      </ClickSpark>
  );
}
