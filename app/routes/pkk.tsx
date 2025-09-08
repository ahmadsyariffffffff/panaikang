import { Link } from "react-router-dom";

export default function Pkk() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">PKK (Pemberdayaan Kesejahteraan Keluarga)</h1>
      <p className="mb-4 text-gray-700">
        PKK merupakan organisasi pemberdayaan keluarga dengan 10 program pokok.
      </p>

      <h2 className="text-xl font-semibold mb-2">Program Pokok PKK</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Gotong Royong</li>
        <li>Pendidikan & Keterampilan</li>
        <li>Kesehatan</li>
        <li>Pangan & Sandang</li>
      </ul>
    </div>
  );
}
