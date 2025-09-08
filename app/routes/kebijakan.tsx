import React from "react";

export default function ProgramKerjaPage() {
  const programKerja = [
    { bidang: "Pendidikan", kegiatan: "Pembangunan PAUD", tahun: "2025" },
    { bidang: "Infrastruktur", kegiatan: "Perbaikan jalan desa", tahun: "2025" },
    { bidang: "Kesehatan", kegiatan: "Posyandu & bantuan gizi balita", tahun: "2025" },
  ];

  const kebijakan = [
    { judul: "Transparansi Dana Desa", isi: "Laporan keuangan dipublikasikan rutin setiap 6 bulan." },
    { judul: "Digitalisasi Administrasi", isi: "Pelayanan surat menyurat melalui aplikasi desa online." },
  ];

  const indikator = [
    { nama: "Akses jalan desa", progress: 70 },
    { nama: "Anak usia sekolah bersekolah", progress: 85 },
    { nama: "UMKM aktif", progress: 60 },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-700">Program Kerja & Kebijakan Desa</h1>
        <p className="text-gray-600 mt-2">
          Rencana pembangunan, kebijakan, serta prioritas untuk meningkatkan kesejahteraan masyarakat desa.
        </p>
      </div>

      {/* Visi & Misi */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Visi & Misi</h2>
        <div className="bg-white shadow rounded-xl p-4">
          <p className="mb-2"><strong>Visi:</strong> Mewujudkan desa mandiri, sejahtera, dan berdaya saing.</p>
          <p><strong>Misi:</strong></p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Meningkatkan kualitas pendidikan dan kesehatan.</li>
            <li>Mengembangkan ekonomi berbasis UMKM dan pertanian.</li>
            <li>Membangun infrastruktur yang memadai.</li>
          </ul>
        </div>
      </section>

      {/* Prioritas Pembangunan */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Prioritas Pembangunan Desa</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Pendidikan", "Infrastruktur", "Kesehatan"].map((item, idx) => (
            <div key={idx} className="bg-green-100 rounded-xl p-4 text-center font-medium">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Program Kerja */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Program Kerja</h2>
        <table className="w-full border rounded-xl overflow-hidden">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-2">Bidang</th>
              <th className="p-2">Kegiatan</th>
              <th className="p-2">Tahun</th>
            </tr>
          </thead>
          <tbody>
            {programKerja.map((p, idx) => (
              <tr key={idx} className="odd:bg-white even:bg-gray-100">
                <td className="p-2">{p.bidang}</td>
                <td className="p-2">{p.kegiatan}</td>
                <td className="p-2">{p.tahun}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Kebijakan */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Kebijakan Desa</h2>
        <div className="space-y-3">
          {kebijakan.map((k, idx) => (
            <div key={idx} className="bg-white shadow rounded-xl p-4">
              <h3 className="font-bold">{k.judul}</h3>
              <p className="text-gray-600">{k.isi}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Indikator */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Indikator Keberhasilan</h2>
        <div className="space-y-4">
          {indikator.map((i, idx) => (
            <div key={idx}>
              <p className="mb-1">{i.nama}</p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-green-600 h-4 rounded-full text-xs text-white text-center"
                  style={{ width: `${i.progress}%` }}
                >
                  {i.progress}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dokumentasi */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Dokumentasi</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/ahmad.png" alt="Dokumentasi 1" className="rounded-xl shadow" />
          <img src="/foto2.jpg" alt="Dokumentasi 2" className="rounded-xl shadow" />
          <img src="/foto3.jpg" alt="Dokumentasi 3" className="rounded-xl shadow" />
        </div>
      </section>
    </div>
  );
}
