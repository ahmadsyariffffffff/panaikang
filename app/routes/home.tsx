import type { Route } from "./+types/home";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="p-6">
      {/* Sambutan Kepala Desa */}
      <section className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Selamat Datang di Desa Panaikang 👋</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Assalamu’alaikum warahmatullahi wabarakatuh.  
          Atas nama pemerintah desa, kami mengucapkan selamat datang di website resmi Desa Panaikang. 
          Semoga website ini menjadi sarana informasi dan komunikasi yang bermanfaat bagi masyarakat.
        </p>
        <p className="mt-4 font-semibold">– Kepala Desa</p>
      </section>

      {/* Informasi Desa */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Tentang Desa</h2>
        <p className="text-gray-700 mb-4">
          Desa Panaikang memiliki sejarah panjang dalam perkembangan masyarakat lokal.  
          Dengan visi <span className="font-semibold">“Mewujudkan Desa Mandiri, Sejahtera, dan Berdaya Saing”</span>  
          serta misi untuk meningkatkan pelayanan, memberdayakan masyarakat, dan menjaga kearifan lokal.
        </p>
      </section>

      {/* Banner / Foto Desa */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Kegiatan & Dokumentasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src="https://placehold.co/400x250?text=Banner+Desa"
            alt="Banner Desa"
            className="rounded-xl shadow-md"
          />
          <img
            src="https://placehold.co/400x250?text=Kegiatan+1"
            alt="Kegiatan Desa"
            className="rounded-xl shadow-md"
          />
          <img
            src="https://placehold.co/400x250?text=Kegiatan+2"
            alt="Kegiatan Desa"
            className="rounded-xl shadow-md"
          />
        </div>
      </section>
    </div>
  );
}
