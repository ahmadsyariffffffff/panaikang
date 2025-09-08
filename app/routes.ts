import { type RouteConfig, index, route } from "@react-router/dev/routes";


export default [
    index("routes/home.tsx"),

    route("/login", "routes/login.tsx"),
    route("/sejarah", "routes/sejarah.tsx"),
    route("/struktur", "routes/struktur.tsx"),
    route("/peta", "routes/peta.tsx"),
    route("/demografi", "routes/demografi.tsx"),
    route("/lembaga", "routes/lembaga.tsx"),
    route("/bpd", "routes/bpd.tsx"),
    route("/karangtaruna", "routes/karangtaruna.tsx"),
    route("/pkk", "routes/pkk.tsx"),
    route("/rtrw", "routes/rtrw.tsx"),
    route("/proker", "routes/proker.tsx"),
    route("/kebijakan", "routes/kebijakan.tsx"),
    route("/datapenduduk", "routes/datapenduduk.tsx"),
    route("/umkm", "routes/umkm.tsx"),
    route("/fasilitas", "routes/fasilitas.tsx"),
    route("/kegiatan", "routes/kegiatan.tsx"),
    route("/pengumuman", "routes/pengumuman.tsx"),
    route("/artikel", "routes/artikel.tsx"),
    route("/fotodokumentasi", "routes/fotodokumentasi.tsx"),
    route("/video", "routes/video.tsx"),
    route("/halaman", "routes/halaman.tsx"),
] satisfies RouteConfig;
