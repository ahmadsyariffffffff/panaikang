import React from "react";

export default function DataUmkm() {
  const umkmList = [
    {
      nama: "Warung Makan Sederhana",
      jenis: "Kuliner",
      produk: "Nasi Goreng, Mie Goreng, Ayam Lalapan",
      kontak: "6281234567890",
      gambar: "https://via.placeholder.com/300x200.png?text=Kuliner",
    },
    {
      nama: "Kerajinan Rotan Makmur",
      jenis: "Kerajinan",
      produk: "Kursi, Meja, Anyaman Rotan",
      kontak: "6282155554444",
      gambar: "https://via.placeholder.com/300x200.png?text=Kerajinan",
    },
    {
      nama: "Tani Jaya",
      jenis: "Pertanian",
      produk: "Beras Organik, Sayur Mayur",
      kontak: "6281322223333",
      gambar: "https://via.placeholder.com/300x200.png?text=Pertanian",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Data UMKM & Potensi Ekonomi Desa
      </h1>
      <p className="text-gray-600 mb-8">
        Berikut adalah daftar UMKM dan potensi ekonomi desa. Klik pada salah
        satu UMKM untuk langsung menghubungi pemilik usaha via WhatsApp.
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {umkmList.map((umkm, idx) => (
          <a
            key={idx}
            href={`https://wa.me/${umkm.kontak}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition hover:scale-105"
          >
            {/* Gambar harus full pas */}
            <img
              src={umkm.gambar}
              alt={umkm.nama}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {umkm.nama}
              </h2>
              <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mt-1 mb-3">
                {umkm.jenis}
              </span>
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Produk:</span> {umkm.produk}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
