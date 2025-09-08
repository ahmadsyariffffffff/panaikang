// src/components/Demografi.tsx
import React, { useMemo, useState } from "react";

type HouseHold = {
  id: string;
  namaKepala: string;
  jumlahAnggota: number;
  pekerjaan: string;
  alamat?: string;
};

type DemografiData = {
  totalPenduduk: number;
  totalKK: number;
  mataPencaharian: Record<string, number>;
  households: HouseHold[]; // contoh data KK
};

const sampleData: DemografiData = {
  totalPenduduk: 3250,
  totalKK: 820,
  mataPencaharian: {
    "Petani": 380,
    "Nelayan": 120,
    "Pedagang": 210,
    "PNS/ASN": 45,
    "Wiraswasta": 60,
    "Buruh": 90,
    "Lainnya": 15,
  },
  households: [
    { id: "KK-001", namaKepala: "Ahmad", jumlahAnggota: 5, pekerjaan: "Petani", alamat: "Dusun A" },
    { id: "KK-002", namaKepala: "Siti", jumlahAnggota: 4, pekerjaan: "Pedagang", alamat: "Dusun B" },
    { id: "KK-003", namaKepala: "Budi", jumlahAnggota: 3, pekerjaan: "Nelayan", alamat: "Dusun A" },
    // ... tambahkan sesuai kebutuhan
  ],
};

function numberWithSeparator(n: number) {
  return n.toLocaleString("id-ID");
}

export default function Demografi({
  data = sampleData,
}: {
  data?: DemografiData;
}) {
  const [q, setQ] = useState("");
  const [filterJob, setFilterJob] = useState<string>("Semua");

  const jobList = useMemo(() => {
    return ["Semua", ...Object.keys(data.mataPencaharian)];
  }, [data]);

  const filteredHouseholds = useMemo(() => {
    const term = q.trim().toLowerCase();
    return data.households.filter((h) => {
      const matchJob = filterJob === "Semua" ? true : h.pekerjaan === filterJob;
      const matchQ =
        !term ||
        h.id.toLowerCase().includes(term) ||
        h.namaKepala.toLowerCase().includes(term) ||
        (h.alamat || "").toLowerCase().includes(term);
      return matchJob && matchQ;
    });
  }, [data, q, filterJob]);

  // Untuk bar chart sederhana: normalisasi ke 100%
  const maxJobCount = Math.max(...Object.values(data.mataPencaharian), 1);

  function exportCSV() {
    // Buat CSV sederhana dari households
    const headers = ["ID KK", "Nama Kepala", "Jumlah Anggota", "Pekerjaan", "Alamat"];
    const rows = data.households.map((h) => [
      h.id,
      h.namaKepala,
      String(h.jumlahAnggota),
      h.pekerjaan,
      h.alamat ?? "",
    ]);
    const csv =
      [headers, ...rows].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `demografi_kk_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Data Demografi Desa</h1>
          <p className="text-sm text-gray-600">Ringkasan jumlah penduduk, rumah tangga (KK) dan mata pencaharian.</p>
        </div>

        <div className="flex gap-3 items-center">
          <div className="hidden sm:flex gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari KK / nama kepala / alamat..."
              className="rounded-lg border border-gray-300 px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <select
              value={filterJob}
              onChange={(e) => setFilterJob(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none"
            >
              {jobList.map((j) => (
                <option key={j} value={j}>
                  {j}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={exportCSV}
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
            title="Export data KK ke CSV"
          >
            Export CSV
          </button>
        </div>
      </header>

      {/* Summary cards */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
          <p className="text-sm text-gray-500">Total Penduduk</p>
          <p className="text-2xl font-bold text-gray-900">{numberWithSeparator(data.totalPenduduk)}</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
          <p className="text-sm text-gray-500">Total KK</p>
          <p className="text-2xl font-bold text-gray-900">{numberWithSeparator(data.totalKK)}</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow border border-gray-100">
          <p className="text-sm text-gray-500">Rata-rata Anggota / KK</p>
          <p className="text-2xl font-bold text-gray-900">
            {Math.round((data.totalPenduduk / Math.max(1, data.totalKK)) * 10) / 10}
          </p>
        </div>
      </section>

      {/* Mata pencaharian horizontal bars */}
      <section className="bg-white rounded-2xl p-4 shadow border border-gray-100 mb-6">
        <h2 className="font-semibold text-lg mb-3">Mata Pencaharian</h2>
        <div className="space-y-3">
          {Object.entries(data.mataPencaharian).map(([job, count]) => {
            const pct = Math.round((count / maxJobCount) * 100);
            return (
              <div key={job} className="flex items-center gap-3">
                <div className="w-40 text-sm text-gray-700">{job}</div>
                <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
                  <div
                    className="h-4 rounded-full bg-green-600"
                    style={{ width: `${pct}%`, maxWidth: "100%" }}
                  />
                </div>
                <div className="w-20 text-right text-sm text-gray-600">{count}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Table KK */}
      <section className="bg-white rounded-2xl p-4 shadow border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Daftar KK</h3>
          <div className="sm:hidden flex gap-2">
            {/* versi mobile: masukkan input/select ringkas */}
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari..."
              className="rounded-lg border border-gray-300 px-3 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <select
              value={filterJob}
              onChange={(e) => setFilterJob(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none"
            >
              {jobList.map((j) => (
                <option key={j} value={j}>
                  {j}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead className="text-sm text-gray-600 border-b">
              <tr>
                <th className="py-2 px-3">ID KK</th>
                <th className="py-2 px-3">Nama Kepala</th>
                <th className="py-2 px-3">Jumlah Anggota</th>
                <th className="py-2 px-3">Pekerjaan</th>
                <th className="py-2 px-3">Alamat</th>
              </tr>
            </thead>
            <tbody>
              {filteredHouseholds.map((h) => (
                <tr key={h.id} className="hover:bg-gray-50">
                  <td className="py-3 px-3 text-sm text-gray-700">{h.id}</td>
                  <td className="py-3 px-3 text-sm text-gray-700">{h.namaKepala}</td>
                  <td className="py-3 px-3 text-sm text-gray-700">{h.jumlahAnggota}</td>
                  <td className="py-3 px-3 text-sm text-gray-700">{h.pekerjaan}</td>
                  <td className="py-3 px-3 text-sm text-gray-700">{h.alamat}</td>
                </tr>
              ))}

              {filteredHouseholds.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-6 px-3 text-center text-sm text-gray-500">
                    Tidak ada data.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm text-gray-500">Menampilkan {filteredHouseholds.length} dari {data.households.length} KK</p>
          <div className="text-sm text-gray-500">Sumber: Data Lokal</div>
        </div>
      </section>
    </div>
  );
}
