import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ ini yang benar

export default function ProgramKerjaKebijakan() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const programKerja = {
    "Bidang Pembangunan": [
      "Pembangunan/rehab jalan desa",
      "Pembangunan jembatan kecil",
      "Penyediaan sarana air bersih",
    ],
    "Bidang Pendidikan": [
      "Bantuan untuk PAUD/TK",
      "Pelatihan keterampilan untuk pemuda",
    ],
    "Bidang Kesehatan": ["Posyandu dan imunisasi", "Layanan kesehatan ibu & anak"],
    "Bidang Ekonomi": ["Pemberdayaan UMKM desa", "Bazar produk lokal"],
    "Bidang Sosial & Budaya": [
      "Kegiatan keagamaan & peringatan hari besar",
      "Festival budaya desa",
    ],
  };

  const kebijakan = [
    {
      judul: "Kebijakan Pengelolaan Dana Desa",
      isi: "Transparansi penggunaan dana desa dengan laporan terbuka kepada masyarakat.",
    },
    {
      judul: "Kebijakan Lingkungan",
      isi: "Program penghijauan dan pengelolaan sampah terpadu.",
    },
    {
      judul: "Kebijakan Sosial",
      isi: "Bantuan untuk warga miskin, janda, yatim piatu, dan lansia.",
    },
    {
      judul: "Kebijakan Kesehatan & Pendidikan",
      isi: "Wajib posyandu setiap bulan dan dukungan penuh untuk PAUD/TK.",
    },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Program Kerja & Kebijakan Desa
      </h1>
      <p className="text-gray-600 mb-8">
        Halaman ini berisi rencana kerja desa berdasarkan bidang serta kebijakan
        yang telah ditetapkan untuk mendukung pembangunan desa secara
        berkelanjutan.
      </p>

      {/* Program Kerja */}
      <h2 className="text-2xl font-semibold text-green-600 mb-3">Program Kerja</h2>
      <div className="space-y-4 mb-8">
        {Object.entries(programKerja).map(([bidang, items], idx) => (
          <div key={idx} className="bg-white shadow rounded-xl p-4">
            <h3 className="text-lg font-semibold mb-2">{bidang}</h3>
            <ul className="list-disc list-inside text-gray-700">
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Kebijakan Desa */}
      <h2 className="text-2xl font-semibold text-green-600 mb-3">Kebijakan Desa</h2>
      <div className="space-y-3">
        {kebijakan.map((k, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition"
            >
              <span className="font-medium">{k.judul}</span>
              <span>{openIndex === idx ? "−" : "+"}</span>
            </button>
            {openIndex === idx && (
              <div className="p-4 text-gray-700 bg-white">{k.isi}</div>
            )}
          </div>
        ))}
      </div>

      {/* Link navigasi */}
      <div className="mt-6">
        <Link
          to="/kebijakan"
          className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Pergi ke Halaman Program Kerja
        </Link>
      </div>
    </div>
  );
}
