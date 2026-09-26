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
            
            <p className="font-bold text-base md:text-lg leading-relaxed pointer-events-none mb-6 text-justify">
              Mahasiswa IT yang fleksibel, komunikatif, dan fast response. Saya menjembatani kemampuan <span className="bg-[#4D96FF] text-white px-1">problem solving</span> teknis dengan kreativitas di bidang customer service dan media sosial. Dengan portofolio lintas bidang seperti desain grafis, pengeditan video, public speaking, hingga administrasi data, saya siap membawa energi positif, ketelitian, dan solusi digital yang inovatif untuk membantu audiens maupun brand Anda berkembang.
            </p>
            <div>
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
                <p className="font-bold text-sm leading-snug text-justify">Membantu pembuatan aset visual dan editan video untuk kebutuhan media sosial klien. Terbiasa bekerja dengan deadline cepat dan teliti menyesuaikan desain dengan brief yang diberikan.</p>
              </div>
              
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:rotate-1 transition-transform">
                <h4 className="font-black text-xl uppercase">Moderator Ceremony</h4>
                <p className="font-bold text-sm text-white bg-black inline-block px-2 py-1 mb-2">Event Jamming Football (2023)</p>
                <p className="font-bold text-sm leading-snug text-justify">Memandu jalannya acara dan menghidupkan suasana agar audiens tetap antusias. Bertanggung jawab menjaga alur rundown berjalan lancar dan asik dari awal hingga akhir.</p>
              </div>

              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-rotate-1 transition-transform">
                <h4 className="font-black text-xl uppercase">Sekretaris</h4>
                <p className="font-bold text-sm text-white bg-black inline-block px-2 py-1 mb-2">Meet and Greet 4 (Nov 2022)</p>
                <p className="font-bold text-sm leading-snug text-justify">Mengurus pendataan, surat-menyurat, dan kebutuhan administrasi kepanitiaan. Terbiasa merespons informasi dengan cepat dan saling bantu menyelesaikan kendala teknis saat hari-H acara.</p>
              </div>

              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:rotate-1 transition-transform">
                <h4 className="font-black text-xl uppercase">Wakil Ketua (OSIS)</h4>
                <p className="font-bold text-sm text-white bg-black inline-block px-2 py-1 mb-2">SMA Panca Budi Medan</p>
                <p className="font-bold text-sm leading-snug text-justify">Membantu ketua mengkoordinasikan teman-teman pengurus untuk menjalankan berbagai acara sekolah. Belajar banyak tentang kerja sama tim dan cara mengatasi kendala dadakan di lapangan.</p>
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
                <p className="font-black text-sm mb-2 border-b-2 border-black pb-1">Universitas Teknologi Yogyakarta (2023 - Sekarang)</p>
                <p className="font-bold text-sm text-justify">Fokus belajar manajemen data, sistem IT dasar, dan melatih logika problem solving untuk dunia kerja digital.</p>
              </div>
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black text-lg md:text-xl uppercase">Jurusan IPA</h4>
                <p className="font-black text-sm mb-2 border-b-2 border-black pb-1">SMA Panca Budi Medan (2021 - 2023)</p>
                <p className="font-bold text-sm text-justify">Aktif berorganisasi dan terjun di kepanitiaan untuk membangun kedisiplinan serta teamwork.</p>
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

          {/* Box 7: Dokumentasi & Galeri (Pink) */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className={`col-span-1 md:col-span-4 bg-[#FF9CEE] flex flex-col ${boxClass}`}>
            <h3 className="font-black text-3xl uppercase mb-6 bg-white border-4 border-black inline-block px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1 w-max">
              Galeri & Dokumentasi 📸
            </h3>
            
            {/* Tempat Foto */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              
              {/* Tempat Foto 1 */}
              <div className="aspect-square bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden relative group cursor-pointer">
                <Image src="/doc1.jpg" alt="Dokumentasi Aulia 1" fill className="object-cover object-top group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Tempat Foto 2 */}
              <div className="aspect-square bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden relative group cursor-pointer">
                <Image src="/doc2.png" alt="Dokumentasi Aulia 2" fill className="object-cover object-center group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Tempat Foto 3 */}
              <div className="aspect-square bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden relative group cursor-pointer">
                <Image src="/doc3.png" alt="Dokumentasi Aulia 3" fill className="object-cover object-top group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Tempat Foto 4 */}
              <div className="aspect-square bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden relative group cursor-pointer">
                <Image src="/doc4.png" alt="Dokumentasi Aulia 4" fill className="object-cover object-center group-hover:scale-110 transition-transform duration-300" />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
