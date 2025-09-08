import { Link } from "react-router-dom";

export default function KarangTaruna() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Karang Taruna</h1>
      <p className="mb-4 text-gray-700">
        Karang Taruna adalah wadah organisasi kepemudaan desa untuk membangun kreativitas
        dan kepedulian sosial.
      </p>

      <h2 className="text-xl font-semibold mb-2">Program Kegiatan</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Lomba olahraga antar pemuda</li>
        <li>Pentas seni & budaya</li>
        <li>Bakti sosial untuk masyarakat</li>
        <li>Pelatihan wirausaha muda</li>
      </ul>
    </div>
  );
}
