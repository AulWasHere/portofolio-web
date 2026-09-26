"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  // Fitur Anti-Copy (Mematikan Klik Kanan)
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const boxClass = "border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 rounded-2xl p-6 md:p-8 relative overflow-hidden z-10";

  return (
    <main className="min-h-screen bg-[#FDF5E6] text-black p-4 md:p-10 font-sans select-none overflow-hidden relative">
      
      {/* Background Ornamen Melayang */}
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute top-10 left-10 w-24 h-24 bg-[#FF9F29] rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] opacity-80" />
      <motion.div animate={{ y: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute bottom-10 right-10 w-32 h-32 bg-[#FF6B6B] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] opacity-80 rotate-12" />
      <motion.div animate={{ x: [0, 50, 0], y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }} className="absolute top-40 right-20 w-16 h-16 bg-[#4D96FF] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] opacity-80 rotate-45" />

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end border-b-8 border-black pb-4">
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase" style={{ textShadow: "4px 4px 0px #FFD93D" }}>
              Aulia Rumi Siregar
            </h1>
            <p className="text-lg md:text-xl font-bold mt-4 bg-black text-white inline-block px-4 py-2 -rotate-1 shadow-[4px_4px_0px_0px_#FF6B6B]">
              Informatics Student & Creative
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="mt-6 md:mt-0 text-xl font-black border-4 border-black px-6 py-2 bg-[#B57EDC] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-2 flex items-center gap-2">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-black"></span> OPEN TO WORK
          </motion.div>
        </header>

        {/* Bento Grid Resume Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          
          {/* Box 1: Tentang Saya (Putih) */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={`col-span-1 md:col-span-2 bg-white flex flex-col justify-between ${boxClass}`}>
            <div className="flex items-center gap-5 mb-6">
              <div className="w-24 h-24 rounded-full relative overflow-hidden border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] pointer-events-none">
                <Image src="/profile.png" alt="Aulia Rumi" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter bg-[#FFD93D] inline-block px-2 border-2 border-black -rotate-1 mb-1">Hello! 👋</h2>
                <p className="font-bold text-gray-700">S1 Informatika (Semester 7)</p>
              </div>
            </div>
            
            <p className="font-bold text-base md:text-lg leading-relaxed pointer-events-none mb-6">
              Memadukan logika <span className="bg-[#4D96FF] text-white px-1">problem solving</span> dengan kreativitas digital. Saya adalah pribadi adaptif yang memiliki minat besar di dunia media sosial, komunikasi, dan pelayanan pelanggan. Terbiasa tampil percaya diri dengan bekal IT yang melatih saya untuk selalu teliti, cepat tanggap, dan terorganisir.
            </p>
            <div>
              {/* Tombol CV dibuat dummy pakai alert karena CV asli menyusul */}
              <button 
                onClick={() => alert("Sabar ya! CV terbaru sedang disiapkan dan akan segera di-update. 🚀")}
                className="inline-block bg-[#FFD93D] text-black border-4 border-black px-6 py-3 text-lg font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-colors active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1"
              >
                Unduh CV &rarr;
              </button>
            </div>
          </motion.div>

          {/* Box 2: Kontak & Info (Hijau) */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className={`col-span-1 md:col-span-2 bg-[#6BCB77] flex flex-col justify-center ${boxClass}`}>
            <h3 className="font-black text-2xl uppercase mb-6 bg-white border-4 border-black inline-block px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-2 w-max">
              Kontak & Info
            </h3>
            <div className="space-y-4 font-black text-lg">
              <a href="mailto:aulwashere@gmail.com" className="flex items-center gap-3 hover:underline hover:translate-x-2 transition-transform w-max"><span className="text-3xl bg-white rounded-full p-1 border-2 border-black">📧</span> aulwashere@gmail.com</a>
              <a href="https://wa.me/6281269162524" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline hover:translate-x-2 transition-transform w-max"><span className="text-3xl bg-white rounded-full p-1 border-2 border-black">💬</span> +62 812-6916-2524</a>
              <a href="https://github.com/AulWasHere" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline hover:translate-x-2 transition-transform w-max"><span className="text-3xl bg-white rounded-full p-1 border-2 border-black">👾</span> github.com/AulWasHere</a>
              <p className="flex items-center gap-3"><span className="text-3xl bg-white rounded-full p-1 border-2 border-black">📍</span> Condongcatur, Sleman, DIY</p>
              <p className="flex items-center gap-3"><span className="text-3xl bg-white rounded-full p-1 border-2 border-black">🎂</span> Medan, 14 Desember 2004</p>
            </div>
          </motion.div>

          {/* Box 3: Pengalaman (Merah/Pink) */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className={`col-span-1 md:col-span-2 md:row-span-2 bg-[#FF6B6B] flex flex-col ${boxClass}`}>
            <h3 className="font-black text-2xl uppercase mb-6 bg-white border-4 border-black inline-block px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2 w-max">
              Pengalaman
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-rotate-1 transition-transform">
                <h4 className="font-black text-xl uppercase">Graphic Design Intern</h4>
                <p className="font-bold text-sm text-white bg-black inline-block px-2 py-1 mb-2">Unteyo Journey (Okt - Des 2024)</p>
                <p className="font-bold text-sm leading-snug">Merancang konsep visual, content creation, video editing & desain grafis. Bekerja dengan target cepat dan detail-oriented.</p>
              </div>
              
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:rotate-1 transition-transform">
                <h4 className="font-black text-xl uppercase">Moderator & MC</h4>
                <p className="font-bold text-sm text-white bg-black inline-block px-2 py-1 mb-2">Event Jamming Football, dll (2022-2023)</p>
                <p className="font-bold text-sm leading-snug">Membangun interaksi audiens dan membawakan storytelling secara lisan. Memastikan kelancaran alur acara.</p>
              </div>

              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-rotate-1 transition-transform">
                <h4 className="font-black text-xl uppercase">Sekretaris</h4>
                <p className="font-bold text-sm text-white bg-black inline-block px-2 py-1 mb-2">Meet and Greet 4 (Nov 2022)</p>
                <p className="font-bold text-sm leading-snug">Mengelola administrasi data, fast response, kolaborasi lintas divisi, dan problem solving di lapangan.</p>
              </div>

              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:rotate-1 transition-transform">
                <h4 className="font-black text-xl uppercase">Wakil Ketua (OSIS)</h4>
                <p className="font-bold text-sm text-white bg-black inline-block px-2 py-1 mb-2">SMA Panca Budi Medan</p>
                <p className="font-bold text-sm leading-snug">Berkolaborasi memimpin tim dalam mengeksekusi berbagai program kerja dan kepanitiaan acara edukasi. Proaktif mengambil inisiatif dalam memecahkan masalah operasional lapangan dan memastikan acara berjalan lancar.</p>
              </div>
            </div>
          </motion.div>

          {/* Box 4: Pendidikan (Ungu) */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className={`col-span-1 md:col-span-2 bg-[#B57EDC] flex flex-col ${boxClass}`}>
            <h3 className="font-black text-2xl uppercase mb-6 bg-white border-4 border-black inline-block px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1 w-max">
              Pendidikan
            </h3>
            <div className="space-y-4">
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black text-lg md:text-xl uppercase">S1 Informatika</h4>
                <p className="font-black text-sm mb-2 border-b-2 border-black pb-1">Universitas Teknologi Yogyakarta (2023 - Skrg)</p>
                <p className="font-bold text-sm">Fokus: Sistem komputer, manajemen data, problem solving.</p>
              </div>
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black text-lg md:text-xl uppercase">Jurusan IPA</h4>
                <p className="font-black text-sm mb-2 border-b-2 border-black pb-1">SMA Panca Budi Medan (2021 - 2023)</p>
                <p className="font-bold text-sm">Fokus: Organisasi, kedisiplinan & teamwork.</p>
              </div>
            </div>
          </motion.div>

          {/* Box 5: Keahlian (Biru) */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className={`col-span-1 md:col-span-2 bg-[#4D96FF] flex flex-col ${boxClass}`}>
            <h3 className="font-black text-2xl uppercase mb-6 bg-white border-4 border-black inline-block px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1 w-max">
              Keahlian
            </h3>
            
            <div className="mb-6">
              <p className="font-black uppercase mb-3 bg-black text-white inline-block px-2">Hard Skills 💻</p>
              <div className="flex flex-wrap gap-2">
                {['CapCut', 'Premiere Pro', 'Canva', 'Photoshop', 'Illustrator', 'Excel', 'Spreadsheet'].map(skill => (
                  <span key={skill} className="bg-white border-2 border-black px-3 py-1 font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-black uppercase mb-3 bg-white text-black inline-block px-2 border-2 border-black">Soft Skills 🤝</p>
              <div className="flex flex-wrap gap-2">
                {['Public Speaking', 'Communication', 'Fast Response', 'Problem Solving', 'Detail-Oriented', 'Adaptif', 'Time Management'].map(skill => (
                  <span key={skill} className="bg-black text-white border-2 border-black px-3 py-1 font-bold text-sm shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Box 6: Proyek Web (Orange) */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className={`col-span-1 md:col-span-4 bg-[#FF9F29] flex flex-col ${boxClass}`}>
            <h3 className="font-black text-3xl uppercase mb-6 bg-white border-4 border-black inline-block px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1 w-max">
              Proyek & Case Study
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Project 1 */}
              <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between">
                <div>
                  <span className="bg-black text-white text-xs font-bold px-2 py-1 uppercase tracking-widest mb-3 inline-block">Web Redesign</span>
                  <h4 className="font-black text-2xl uppercase mb-1">Redesigning BBQ Ride Website</h4>
                  <p className="font-bold text-gray-600 mb-6">WEBSITE BBQ RIDE BANDUNG 2026</p>
                </div>
                <button onClick={() => alert('Foto tampilan web sedang disiapkan!')} className="w-full bg-[#FFD93D] border-4 border-black py-3 font-black text-lg uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-colors active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1">
                  Lihat Gambar &rarr;
                </button>
              </div>

              {/* Project 2 */}
              <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between">
                <div>
                  <span className="bg-black text-white text-xs font-bold px-2 py-1 uppercase tracking-widest mb-3 inline-block">Creative Design</span>
                  <h4 className="font-black text-2xl uppercase mb-1">Designing Integrated Creative</h4>
                  <p className="font-bold text-gray-600 mb-6">WEBSITE STUDIO NYALA</p>
                </div>
                <button onClick={() => alert('Foto tampilan web sedang disiapkan!')} className="w-full bg-[#B57EDC] border-4 border-black py-3 font-black text-lg uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-colors active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1">
                  Lihat Gambar &rarr;
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
