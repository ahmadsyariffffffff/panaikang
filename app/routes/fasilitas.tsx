import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DataFasilitas() {
  const fasilitas = [
    {
      nama: "SD Negeri 1 Desa Makmur",
      jenis: "Sekolah",
      gambar: "/images/fasilitas/sd1.jpg",
    },
    {
      nama: "Puskesmas Desa Sehat",
      jenis: "Puskesmas",
      gambar: "/images/fasilitas/puskesmas.jpg",
    },
    {
      nama: "Masjid Al-Ikhlas",
      jenis: "Tempat Ibadah",
      gambar: "ahmad.png",
    },
    {
      nama: "Gereja Santo Yosef",
      jenis: "Tempat Ibadah",
      gambar: "/images/fasilitas/gereja.jpg",
    },
  ];

  // Hitung jumlah fasilitas berdasarkan jenis
  const dataJenis = Object.values(
    fasilitas.reduce((acc, f) => {
      acc[f.jenis] = acc[f.jenis] || { name: f.jenis, value: 0 };
      acc[f.jenis].value++;
      return acc;
    }, {} as Record<string, { name: string; value: number }>)
  );

  const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#9333ea"];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Data Fasilitas Umum
      </h1>

      {/* Grafik Pie */}
      <div className="bg-white shadow rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Distribusi Fasilitas Umum
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={dataJenis}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent = 0 }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {dataJenis.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Daftar detail */}
      <div className="grid gap-6">
        {fasilitas.map((f, i) => (
          <div
            key={i}
            className={`bg-white shadow rounded-xl p-4 flex items-center gap-4 ${
              i % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
<img
  src={f.gambar}
  alt={f.nama}
  className="w-[200px] h-[200px] object-cover rounded-lg"
/>

            <div>
              <h2 className="text-xl font-semibold">{f.nama}</h2>
              <p>
                <strong>Jenis:</strong> {f.jenis}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
