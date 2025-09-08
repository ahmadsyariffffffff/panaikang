import { Link } from "react-router-dom";

export default function RtRw() {
  const data = [
    { rt: "01", rw: "01", ketua: "Pak Joko" },
    { rt: "02", rw: "01", ketua: "Pak Rahmat" },
    { rt: "03", rw: "02", ketua: "Bu Sari" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">RT / RW</h1>
      <p className="mb-4 text-gray-700">
        RT dan RW adalah unit terkecil dalam struktur pemerintahan desa yang langsung
        berhubungan dengan warga.
      </p>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">RT</th>
            <th className="border px-4 py-2">RW</th>
            <th className="border px-4 py-2">Ketua</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td className="border px-4 py-2">{d.rt}</td>
              <td className="border px-4 py-2">{d.rw}</td>
              <td className="border px-4 py-2">{d.ketua}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
