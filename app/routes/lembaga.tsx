import { Link } from "react-router-dom";

export default function LembagaDesa() {
  const lembaga = [
    { name: "BPD", link: "/bpd", desc: "Badan Permusyawaratan Desa" },
    { name: "Karang Taruna", link: "/karangtaruna", desc: "Organisasi pemuda desa" },
    { name: "PKK", link: "/pkk", desc: "Pemberdayaan Kesejahteraan Keluarga" },
    { name: "RT/RW", link: "/rtrw", desc: "Rukun Tetangga & Rukun Warga" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Lembaga Desa</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {lembaga.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-600">{item.name}</h2>
            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
