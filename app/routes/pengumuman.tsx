import React from "react";

export default function PengumumanResmi() {
  const pengumuman = [
    {
      judul: "Pemilihan Kepala Desa",
      tanggal: "5 September 2025",
      isi: "Pelaksanaan pemilihan kepala desa akan dilakukan di Balai Desa pukul 08.00 WIB.",
      gambar: "https://source.unsplash.com/600x400/?voting,village", // contoh gambar
    },
    {
      judul: "Pembagian BLT Dana Desa",
      tanggal: "28 Agustus 2025",
      isi: "Pembagian Bantuan Langsung Tunai Dana Desa di kantor desa.",
      gambar: "https://source.unsplash.com/600x400/?money,help", // contoh gambar
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Pengumuman Resmi</h1>
      <div className="space-y-6">
        {pengumuman.map((p, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={p.gambar}
              alt={p.judul}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{p.judul}</h2>
              <p className="text-sm text-gray-500">{p.tanggal}</p>
              <p className="text-gray-600 mt-2">{p.isi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
