import React from "react";

export default function FotoKegiatan() {
  const kegiatan = [
    {
      judul: "Gotong Royong Bersih Desa",
      deskripsi: "Warga desa bergotong royong membersihkan lingkungan agar tetap sehat dan nyaman.",
      gambar: "https://source.unsplash.com/600x400/?village,cleaning",
    },
    {
      judul: "Festival Budaya Desa",
      deskripsi: "Acara tahunan menampilkan seni, musik, dan budaya khas desa.",
      gambar: "https://source.unsplash.com/600x400/?festival,tradition",
    },
    {
      judul: "Panen Raya Padi",
      deskripsi: "Kegiatan panen bersama di sawah yang menjadi simbol kebersamaan petani.",
      gambar: "https://source.unsplash.com/600x400/?rice,harvest",
    },
    {
      judul: "Pelatihan UMKM",
      deskripsi: "Pelatihan bagi UMKM untuk meningkatkan kualitas produk dan pemasaran.",
      gambar: "https://source.unsplash.com/600x400/?meeting,training",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-10 text-center">
        Foto Kegiatan Desa
      </h1>

      <div className="space-y-12">
        {kegiatan.map((k, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Gambar */}
            <img
              src={k.gambar}
              alt={k.judul}
              className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
            />

            {/* Teks */}
            <div className="md:w-1/2 bg-white shadow rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {k.judul}
              </h2>
              <p className="text-gray-600">{k.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
