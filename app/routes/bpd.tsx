import { Link } from "react-router-dom";
export default function Bpd() {
  const anggota = [
    { nama: "Ahmad", jabatan: "Ketua" },
    { nama: "Siti", jabatan: "Wakil Ketua" },
    { nama: "Budi", jabatan: "Sekretaris" },
    { nama: "Dewi", jabatan: "Anggota" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Badan Permusyawaratan Desa (BPD)</h1>
      <p className="mb-4 text-gray-700">
        BPD berfungsi menampung aspirasi masyarakat dan mengawasi jalannya pemerintahan desa.
      </p>

      <h2 className="text-xl font-semibold mb-2">Struktur Organisasi</h2>
      <ul className="space-y-2">
        {anggota.map((a) => (
          <li key={a.nama} className="p-3 bg-gray-100 rounded">
            <span className="font-semibold">{a.nama}</span> — {a.jabatan}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Kegiatan</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Rapat musyawarah desa</li>
        <li>Sosialisasi peraturan desa</li>
        <li>Pengawasan program pembangunan</li>
      </ul>
    </div>
  );
}
