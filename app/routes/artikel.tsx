import React from "react";

export default function ArtikelPotensi() {
  const artikel = [
    {
      judul: "Wisata Alam Sungai Jernih",
      isi: "Sungai Jernih menjadi destinasi wisata unggulan desa dengan pemandangan alam yang asri.",
      gambar: "https://source.unsplash.com/800x500/?river,nature",
    },
    {
      judul: "UMKM Keripik Singkong",
      isi: "Keripik singkong buatan warga menjadi produk UMKM unggulan yang dipasarkan hingga luar kota.",
      gambar: "https://source.unsplash.com/800x500/?snack,food",
    },
    {
      judul: "Pertanian Padi Organik",
      isi: "Petani desa mulai mengembangkan pertanian padi organik untuk meningkatkan kualitas hasil panen.",
      gambar: "https://source.unsplash.com/800x500/?rice,field",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Artikel Potensi Desa</h1>
      <div className="space-y-8">
        {artikel.map((a, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-2xl overflow-hidden flex flex-col md:flex-row"
          >
            <img src={a.gambar} alt={a.judul} className="md:w-1/3 h-64 object-cover" />
            <div className="p-6 flex-1">
              <h2 className="text-2xl font-semibold text-gray-800">{a.judul}</h2>
              <p className="text-gray-600 mt-2">{a.isi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
