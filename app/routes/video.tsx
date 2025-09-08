import React from "react";

export default function VideoPromosi() {
  const videos = [
    {
      judul: "Profil Desa Makmur",
      deskripsi: "Video perkenalan desa yang menampilkan potensi alam dan budaya.",
      url: "https://www.w3schools.com/html/mov_bbb.mp4", // contoh video lokal
    },
    {
      judul: "Wisata Alam Desa",
      deskripsi: "Keindahan wisata alam desa yang mempesona.",
      url: "https://www.w3schools.com/html/movie.mp4", // contoh video
    },
    {
      judul: "UMKM Unggulan",
      deskripsi: "Video promosi produk unggulan desa yang siap bersaing.",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-10 text-center">
        Video Promosi Desa
      </h1>

      <div className="space-y-12">
        {videos.map((v, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Video */}
            <video
              controls
              className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
            >
              <source src={v.url} type="video/mp4" />
              Browser Anda tidak mendukung pemutar video.
            </video>

            {/* Teks */}
            <div className="md:w-1/2 bg-white shadow rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {v.judul}
              </h2>
              <p className="text-gray-600">{v.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
