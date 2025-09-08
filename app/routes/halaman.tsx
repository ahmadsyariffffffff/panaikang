import React from "react";

export default function Kontak() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Kontak Desa Makmur</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Info Kontak */}
        <div className="space-y-4">
          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-2">Alamat Kantor</h2>
            <p>Jl. Raya Desa Makmur No. 10</p>
            <p>Kec. Makmur, Kab. Bone</p>
          </div>

          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-2">Nomor Telepon / WA</h2>
            <p>0812-3456-7890</p>
          </div>

          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-2">Email Resmi</h2>
            <p>desamakmur@gmail.com</p>
          </div>
        </div>

        {/* Google Maps */}
        <div className="bg-white shadow rounded-xl overflow-hidden">
          <iframe
            title="Lokasi Desa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.736682878898!2d-122.08424968469224!3d37.42199977982588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5d55a4e8c0b%3A0xe4d4a1a9e3f2bbd6!2sGoogleplex!5e0!3m2!1sid!2sid!4v1693205023456!5m2!1sid!2sid"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
