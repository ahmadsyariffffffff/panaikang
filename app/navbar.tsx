// app/routes/navbar.tsx
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react"; // icon hamburger & close

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Tutup dropdown kalau klik di luar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-green-700 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
        {/* Logo */}
        <div className="font-bold">🌾 Desa Panaikang</div>

        {/* Tombol hamburger untuk HP */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6" ref={menuRef}>
          <Link to="/" className="hover:text-yellow-300" onClick={() => setOpenMenu(null)}>Beranda</Link>

          {/* Profil Desa */}
          <div className="relative">
            <button
              onClick={() => setOpenMenu(openMenu === "profil" ? null : "profil")}
              className="hover:text-yellow-300"
            >
              Profil Desa ▾
            </button>
            {openMenu === "profil" && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <Link to="/sejarah" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setOpenMenu(null)}>Sejarah</Link>
                <Link to="/struktur" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setOpenMenu(null)}>Struktur</Link>
                <Link to="/peta" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setOpenMenu(null)}>Peta Wilayah</Link>
                <Link to="/demografi" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setOpenMenu(null)}>Data Demografi</Link>
                <Link to="/lembaga" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setOpenMenu(null)}>Lembaga Desa</Link>
                <Link to="/proker" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setOpenMenu(null)}>Program Kerja</Link>
              </div>
            )}
          </div>

          {/* Data & Informasi */}
          <div className="relative">
            <button
              onClick={() => setOpenMenu(openMenu === "data" ? null : "data")}
              className="hover:text-yellow-300"
            >
              Data & Informasi ▾
            </button>
            {openMenu === "data" && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <Link to="/datapenduduk" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setOpenMenu(null)}>Data Penduduk</Link>
                <Link to="/umkm" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setOpenMenu(null)}>UMKM</Link>
                <Link to="/fasilitas" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setOpenMenu(null)}>Fasilitas</Link>
                <Link to="/kegiatan" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setOpenMenu(null)}>Kegiatan</Link>
                <Link to="/pengumuman" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setOpenMenu(null)}>Pengumuman</Link>
                <Link to="/artikel" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setOpenMenu(null)}>Artikel</Link>
                <Link to="/fotodokumentasi" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setOpenMenu(null)}>Foto Dokumentasi</Link>
                <Link to="/video" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setOpenMenu(null)}>Video</Link>
              </div>
            )}
          </div>

          {/* Kontak */}
          <div className="relative">
            <button
              onClick={() => setOpenMenu(openMenu === "kontak" ? null : "kontak")}
              className="hover:text-yellow-300"
            >
              Kontak ▾
            </button>
            {openMenu === "kontak" && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <Link to="/halaman" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setOpenMenu(null)}>Hubungi Kami</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {mobileOpen && (
        <div className="md:hidden bg-green-800 px-4 py-3 space-y-2">
          <Link to="/" className="block hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Beranda</Link>
          <Link to="/sejarah" className="block hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Sejarah</Link>
          <Link to="/struktur" className="block hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Struktur</Link>
          <Link to="/peta" className="block hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Peta Wilayah</Link>
          <Link to="/demografi" className="block hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Data Demografi</Link>
          <Link to="/umkm" className="block hover:text-yellow-300" onClick={() => setMobileOpen(false)}>UMKM</Link>
          <Link to="/fasilitas" className="block hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Fasilitas</Link>
          <Link to="/kegiatan" className="block hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Kegiatan</Link>
          <Link to="/pengumuman" className="block hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Pengumuman</Link>
          <Link to="/artikel" className="block hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Artikel</Link>
          <Link to="/fotodokumentasi" className="block hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Foto Dokumentasi</Link>
          <Link to="/video" className="block hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Video</Link>
          <Link to="/halaman" className="block hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Hubungi Kami</Link>
        </div>
      )}
    </nav>
  );
}
