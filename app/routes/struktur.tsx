import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Users, Network, ChevronDown, ChevronUp } from "lucide-react";
import { img } from "framer-motion/client";

// --- Dummy data: profil orang yang menjabat ---
const perangkat = [
  {
    nama: "Ahmad",
    jabatan: "Kepala Desa",
    masaJabatan: "2021–2027",
    pendidikan: "S1 Ilmu Pemerintahan",
    img: "/ahmad.png",
  },
  {
    nama: "Siti Nurhaliza",
    jabatan: "Sekretaris Desa",
    masaJabatan: "2019–Sekarang",
    pendidikan: "SMA",
  },
  { nama: "Budi", jabatan: "Kaur Keuangan", masaJabatan: "2020–Sekarang", pendidikan: "D3 Akuntansi" },
  { nama: "Intan", jabatan: "Kaur Umum & Perencanaan", masaJabatan: "2022–Sekarang", pendidikan: "S1 Adm. Publik" },
  { nama: "Rizal", jabatan: "Kasi Pemerintahan", masaJabatan: "2020–Sekarang", pendidikan: "S1 Hukum" },
  { nama: "Maya", jabatan: "Kasi Kesejahteraan", masaJabatan: "2021–Sekarang", pendidikan: "S1 Kesehatan Masyarakat" },
  { nama: "Dewi", jabatan: "Kasi Pelayanan", masaJabatan: "2021–Sekarang", pendidikan: "S1 Komunikasi" },
  { nama: "Hasan", jabatan: "Kepala Dusun A", masaJabatan: "2018–Sekarang", pendidikan: "SMA" },
  { nama: "Nur", jabatan: "Kepala Dusun B", masaJabatan: "2019–Sekarang", pendidikan: "SMA" },
];

// --- Struktur organisasi: relasi jabatan ---
const struktur = [
  {
    jabatan: "Kepala Desa",
    anak: [
      {
        jabatan: "Sekretaris Desa",
        anak: [
          { jabatan: "Kaur Umum & Perencanaan" },
          { jabatan: "Kaur Keuangan" },
        ],
      },
      { jabatan: "Kasi Pemerintahan" },
      { jabatan: "Kasi Kesejahteraan" },
      { jabatan: "Kasi Pelayanan" },
      {
        jabatan: "Kepala Dusun",
        anak: [
          { jabatan: "Kepala Dusun A" },
          { jabatan: "Kepala Dusun B" },
        ],
      },
    ],
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((s) => s[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 md:p-6 border border-gray-100">{children}</div>
  );
}

function SectionHeader({ title, icon }: { title: string; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
    </div>
  );
}

function ProfilCard({ p }: { p: typeof perangkat[number] }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4"
    >
      <div className="flex items-center gap-4">
        {p.img ? (
          <img
            src={p.img}
            alt={p.nama}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-green-600"
          />
        ) : (
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
            {getInitials(p.nama)}
          </div>
        )}

        <div className="min-w-0">
          <p className="text-base md:text-lg font-semibold text-gray-900 truncate">{p.nama}</p>
          <p className="text-sm text-green-700 font-medium">{p.jabatan}</p>
          <p className="text-xs text-gray-500">{p.pendidikan}</p>
          <p className="text-xs text-gray-500">{p.masaJabatan}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Node({ data }: { data: any }) {
  const [open, setOpen] = useState(true);
  const hasChild = Array.isArray(data.anak) && data.anak.length > 0;

  return (
    <li className="relative">
      <div
        className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm cursor-pointer select-none"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="text-sm md:text-base font-semibold text-gray-800">{data.jabatan}</span>
        {hasChild && (open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
      </div>
      {hasChild && (
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="mt-3 ml-6 pl-4 border-l border-dashed border-gray-300 space-y-3"
            >
              {data.anak.map((child: any, i: number) => (
                <Node key={i} data={child} />
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </li>
  );
}

export default function StrukturDanProfilDesa() {
  const [tab, setTab] = useState<"struktur" | "profil">("struktur");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return perangkat;
    return perangkat.filter(
      (p) => p.nama.toLowerCase().includes(term) || p.jabatan.toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <div className="min-h-[70vh] w-full bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Pemerintahan Desa</h1>
            <p className="text-gray-600">Perbedaan antara struktur organisasi dan profil perangkat, ditampilkan dalam dua tab.</p>
          </div>

          <div className="inline-flex bg-white rounded-2xl shadow border border-gray-200 p-1">
            <button
              onClick={() => setTab("struktur")}
              className={`px-4 py-2 rounded-xl text-sm font-semibold ${
                tab === "struktur" ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="inline-flex items-center gap-2"><Network className="w-4 h-4"/> Struktur</span>
            </button>
            <button
              onClick={() => setTab("profil")}
              className={`px-4 py-2 rounded-xl text-sm font-semibold ${
                tab === "profil" ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="inline-flex items-center gap-2"><Users className="w-4 h-4"/> Profil</span>
            </button>
          </div>
        </div>

        {/* Body */}
        <AnimatePresence mode="wait">
          {tab === "struktur" ? (
            <motion.div
              key="struktur"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-4"
            >
              <Card>
                <SectionHeader title="Struktur Organisasi Pemerintah Desa" icon={<Network className="w-5 h-5 text-green-700" />} />
                <p className="text-sm text-gray-600 mt-2">Bagan ini menampilkan susunan jabatan dan hubungan kerja (siapa membawahi siapa). Klik node untuk expand/collapse.</p>
                <div className="mt-6">
                  <ul className="space-y-3">
                    {struktur.map((root, idx) => (
                      <Node key={idx} data={root} />
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="profil"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-4"
            >
              <Card>
                <div className="flex items-start md:items-center justify-between gap-4 flex-col md:flex-row">
                  <SectionHeader title="Profil Kepala Desa & Perangkat Desa" icon={<Users className="w-5 h-5 text-green-700" />} />
                  <div className="relative w-full md:w-80">
                    <input
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      placeholder="Cari nama atau jabatan..."
                      className="w-full rounded-xl border border-gray-300 pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Bagian ini menampilkan biodata singkat orang yang menjabat pada struktur di atas.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  <AnimatePresence>
                    {filtered.map((p) => (
                      <ProfilCard key={p.nama + p.jabatan} p={p} />)
                    )}
                  </AnimatePresence>
                </div>

                {filtered.length === 0 && (
                  <div className="text-center text-sm text-gray-500 py-6">Tidak ada hasil untuk kata kunci tersebut.</div>
                )}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
