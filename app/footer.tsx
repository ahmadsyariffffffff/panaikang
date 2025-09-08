import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-8">
      <div className="max-w-6xl mx-auto px-3 py-3 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profil singkat */}
        <div>
          <h2 className="text-lg font-bold mb-3">Desa Makmur</h2>
          <p className="text-sm">
            Desa Makmur adalah desa yang terus berkembang dengan potensi wisata,
            pertanian, dan UMKM lokal yang maju.
          </p>
        </div>

        {/* Navigasi cepat */}
        <div>
          <h2 className="text-lg font-bold mb-3">Navigasi</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Beranda</Link></li>
            <li><Link to="/berita" className="hover:underline">Berita</Link></li>
            <li><Link to="/produk" className="hover:underline">Produk</Link></li>
            <li><Link to="/kontak" className="hover:underline">Kontak</Link></li>
          </ul>
        </div>

        {/* Kontak singkat */}
        <div>
          <h2 className="text-lg font-bold mb-3">Kontak</h2>
          <p className="text-sm">Alamat: Jl. Desa Makmur No. 1</p>
          <p className="text-sm">Telepon: 0812-3456-7890</p>
          <p className="text-sm">Email: desamakmur@email.com</p>
        </div>
      </div>

      <div className="bg-green-800 text-center text-sm py-4">
        © {new Date().getFullYear()} Desa Panaikang KKN UHM . Posko 5.
      </div>
    </footer>
  );
}
