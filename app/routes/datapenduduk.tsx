import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

export default function DataKependudukan() {
  const dataKependudukan = {
    jumlahPenduduk: 3200,
    jumlahKK: 850,
    pendidikan: [
      { tingkat: "SD", jumlah: 600 },
      { tingkat: "SMP", jumlah: 450 },
      { tingkat: "SMA", jumlah: 300 },
      { tingkat: "Sarjana", jumlah: 120 },
    ],
    pekerjaan: [
      { jenis: "Petani", jumlah: 800 },
      { jenis: "Nelayan", jumlah: 150 },
      { jenis: "Pedagang", jumlah: 200 },
      { jenis: "PNS", jumlah: 50 },
      { jenis: "Lainnya", jumlah: 100 },
    ],
  };

  const COLORS = ["#16a34a", "#15803d", "#22c55e", "#65a30d", "#84cc16"];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Data Kependudukan Desa
      </h1>

      {/* Ringkasan */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <p className="text-xl font-bold text-green-600">Jumlah Penduduk</p>
          <p className="text-3xl font-extrabold">{dataKependudukan.jumlahPenduduk}</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <p className="text-xl font-bold text-green-600">Jumlah KK</p>
          <p className="text-3xl font-extrabold">{dataKependudukan.jumlahKK}</p>
        </div>
      </div>

      {/* Pendidikan */}
      <div className="bg-white shadow rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tingkat Pendidikan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tabel */}
          <table className="w-full border border-gray-200">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-2 border">Tingkat</th>
                <th className="p-2 border">Jumlah</th>
              </tr>
            </thead>
            <tbody>
              {dataKependudukan.pendidikan.map((item, i) => (
                <tr key={i} className="text-center hover:bg-gray-50">
                  <td className="p-2 border">{item.tingkat}</td>
                  <td className="p-2 border">{item.jumlah}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Grafik */}
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dataKependudukan.pendidikan}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tingkat" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="jumlah" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pekerjaan */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Jenis Pekerjaan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tabel */}
          <table className="w-full border border-gray-200">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-2 border">Jenis</th>
                <th className="p-2 border">Jumlah</th>
              </tr>
            </thead>
            <tbody>
              {dataKependudukan.pekerjaan.map((item, i) => (
                <tr key={i} className="text-center hover:bg-gray-50">
                  <td className="p-2 border">{item.jenis}</td>
                  <td className="p-2 border">{item.jumlah}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Grafik Pie */}
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={dataKependudukan.pekerjaan}
                dataKey="jumlah"
                nameKey="jenis"
                outerRadius={100}
                label
              >
                {dataKependudukan.pekerjaan.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
