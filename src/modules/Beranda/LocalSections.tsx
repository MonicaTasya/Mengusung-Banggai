"use client";

import Link from "next/link";
import { useLanguage } from "@/src/utils/hooks/useLanguage";

const villages = {
  kelurahan: ["Dodung", "Lompio", "Tano Bonunungan"],
  desa: ["Dangkalan", "Kokini", "Lambako", "Lampa", "Pasir Putih", "Potil Pololoba", "Tinakin Laut"],
};

export function LocalSections() {
  const { language } = useLanguage();
  const english = language === "en";

  const destinations = english
    ? [
        ["Keraton Banggai & Regional Museum", "Lompio · Historic palace grounds overlooking the sea; home to the Banggai Laut Regional Museum, inaugurated on 22 July 2024."],
        ["Banggai Town Square", "A gathering place for residents and a venue for cultural events."],
        ["Banggai Public Harbor", "Tano Bonunungan · The main sea connection and a window into everyday port life."],
        ["Pulau Bandang Besar", "A 2018 travel note describes a roughly 20-minute trip from Banggai Laut by boat and colorful marine life, including nudibranchs. Check current access and conditions before visiting."],
      ]
    : [
        ["Keraton Banggai & Museum Daerah", "Lompio · Kompleks keraton bersejarah dengan pemandangan laut dan rumah bagi Museum Daerah Banggai Laut yang diresmikan pada 22 Juli 2024."],
        ["Alun-Alun Kota Banggai", "Tempat berkumpul warga sekaligus pusat penyelenggaraan acara budaya."],
        ["Pelabuhan Rakyat Banggai", "Tano Bonunungan · Penghubung laut utama dan tempat menikmati suasana keseharian kota pelabuhan."],
        ["Pulau Bandang Besar", "Catatan perjalanan tahun 2018 menyebut perjalanan perahu sekitar 20 menit dari pantai Banggai Laut dan biota laut berwarna cerah, termasuk nudibranch. Pastikan akses dan kondisi terbaru sebelum berkunjung."],
      ];

  const places = english
    ? ["Dangkalan", "Kokini", "Lambako", "Lampa", "Pasir Putih", "Potil Pololoba", "Tinakin Laut"]
    : villages.desa;

  return (
    <>
      <section id="tentang" aria-labelledby="about-title" className="scroll-mt-24 bg-background py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{english ? "About Banggai" : "Tentang Banggai"}</p>
            <h2 id="about-title" className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {english ? "A harbor town shaped by sea and tradition." : "Kota pelabuhan yang tumbuh bersama laut dan tradisi."}
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              {english
                ? "Banggai District is the heart of Banggai Laut Regency in Central Sulawesi. It includes three urban villages—Dodung, Lompio, and Tano Bonunungan—and several coastal villages. Banggai Public Harbor connects communities across the islands."
                : "Kecamatan Banggai adalah jantung Kabupaten Banggai Laut, Provinsi Sulawesi Tengah. Wilayah ini mencakup tiga kelurahan—Dodung, Lompio, dan Tano Bonunungan—serta sejumlah desa pesisir. Pelabuhan Rakyat Banggai menjadi penghubung laut antarwilayah di Banggai Laut."}
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              {english
                ? "Here, the rhythm of a harbor town meets a royal tradition still kept alive. The sea sustains daily life, while custom carries a shared identity."
                : "Di sini, denyut kota pelabuhan bertemu dengan tradisi kerajaan yang masih dijaga. Laut menjadi sumber hidup, sementara adat merawat identitas bersama."}
            </p>
          </div>
          <aside className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-bold text-ink">{english ? "Banggai at a glance" : "Sekilas data Banggai"}</h3>
            <dl className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-background p-4">
                <dt className="text-xs leading-5 text-muted">{english ? "Population · 2024" : "Penduduk · 2024"}</dt>
                <dd className="mt-1 text-xl font-bold text-primary-deep">25.679</dd>
                <dd className="text-xs text-muted">{english ? "people" : "jiwa"}</dd>
              </div>
              <div className="rounded-2xl bg-background p-4">
                <dt className="text-xs leading-5 text-muted">{english ? "Area · 2024" : "Luas wilayah · 2024"}</dt>
                <dd className="mt-1 text-xl font-bold text-primary-deep">86,95</dd>
                <dd className="text-xs text-muted">km²</dd>
              </div>
              <div className="col-span-2 rounded-2xl bg-background p-4">
                <dt className="text-xs leading-5 text-muted">{english ? "Administrative areas · 2025" : "Wilayah administrasi · 2025"}</dt>
                <dd className="mt-1 text-lg font-bold text-primary-deep">{english ? "3 urban villages + 7 villages" : "3 kelurahan + 7 desa"}</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs leading-5 text-muted">
              {english ? "Population and area: Banggai Laut in Figures 2025 (reference year 2024). Administrative count: BPS 2025." : "Penduduk dan luas: Banggai Laut Dalam Angka 2025 (data 2024). Jumlah wilayah administrasi: BPS 2025."}
            </p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-primary-deep">
              <a href="https://web-api.bps.go.id/download.php?f=tHJalxY11ATkeJdb3mMNxUdITU5wU1MraFFGV2Z2bVVWZWxZRDdmczM2WW81eGl5UVdBYndTcmU3aDZHSzA4UTFueXVGd1dxYi90TFJBSDBrNlc2NEFneWsxL2lFekUzdHptc05EWnJSZ0xsbm5WbVFRTDNhYXFCNThxY3dxeHA3NE8va1BkVWVDREk5SFc3Wjdaa1V0N1NZWEVZN1dUd3g4Z3pCZ1d1dVJYcnJtekYxTVlLYVZYRnhzUzdLRFRYZHhyT0xkRWVTckZ2U2pUajMrU2FvTWtDczNzZmM3NllZOVA3T016aDROWVIySG5BZW9HLzY2ejd5U3A0SFFNUGhsL0pjaUlZZTE4NnJVTDVXUGo1N044dlpHbWlkczM1ZWltYk1RPT0%3D" target="_blank" rel="noreferrer">{english ? "Banggai Laut in Figures 2025" : "Banggai Laut Dalam Angka 2025"}</a>
              <a href="https://banggailautkab.bps.go.id/id/statistics-table/3/YkVWWFUyNTJTVTloVGpCeFdFVTNaMk5wUzFaUFFUMDkjMw%3D%3D/jumlah-desa-kelurahan-menurut-kecamatan-di-kabupaten-banggai-laut--2018.html" target="_blank" rel="noreferrer">{english ? "BPS administrative data" : "Data administrasi BPS"}</a>
            </div>
            <p className="mt-4 border-t border-border pt-4 text-xs leading-5 text-muted">
              {english ? "Coastal tourism and island conditions can change; confirm details locally before traveling." : "Destinasi sekitar: Banggai Laut memiliki pantai dan pulau lain, termasuk Pantai Oyama yang berada di kecamatan lain."}
            </p>
          </aside>
        </div>
      </section>

      <section id="budaya" aria-labelledby="culture-title" className="scroll-mt-24 bg-primary-soft/35 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{english ? "Culture" : "Budaya"}</p>
            <h2 id="culture-title" className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{english ? "Stories carried across generations." : "Cerita yang dijaga lintas generasi."}</h2>
          </header>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-bold text-primary">01 · {english ? "Heritage" : "Warisan"}</p>
              <h3 className="mt-3 text-xl font-bold text-ink">{english ? "Keraton Banggai, a sultanate legacy above the sea" : "Keraton Banggai, warisan kesultanan di atas bukit"}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                {english
                  ? "Keraton Banggai stands on a hill facing the sea. The Banggai Laut Regional Museum was inaugurated here in Lompio on 22 July 2024, inviting visitors to learn about local traditions and history."
                  : "Keraton Banggai berdiri di atas bukit menghadap laut. Museum Daerah Banggai Laut diresmikan di Keraton Banggai, Lompio, pada 22 Juli 2024. Museum ini mengajak pengunjung mengenal tradisi dan jejak sejarah masyarakat Banggai."}
              </p>
            </article>
            <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-bold text-primary">02 · {english ? "Living tradition" : "Tradisi hidup"}</p>
              <h3 className="mt-3 text-xl font-bold text-ink">{english ? "Tumbe Festival and the Malabot Tumbe ritual" : "Festival Tumbe dan Ritual Malabot Tumbe"}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                {english
                  ? "One of Banggai's most sacred traditions, the Malabot Tumbe ritual carries the first eggs of the endemic Sulawesi maleo bird with the Batui customary family to the Banggai Laut palace, crossing three regencies. The ritual also carries a message of nature conservation."
                  : "Sebagai salah satu tradisi paling sakral di Banggai, Ritual Malabot Tumbe mengantarkan telur burung Maleo pertama bersama keluarga adat Batui ke Keraton Banggai Laut, melintasi tiga kabupaten. Sebagai satwa endemik Sulawesi, maleo juga membawa pesan penting tentang kelestarian alam."}
              </p>
              <div className="mt-5 rounded-2xl bg-accent-soft p-4">
                <p className="text-sm font-bold text-ink">{english ? "Tumbe Festival · 1–4 December 2026" : "Festival Tumbe · 1–4 Desember 2026"}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{english ? "At Keraton Banggai and Banggai Town Square. Theme: “The Rhythm of Culture: Harmony in the Land of Benggawi”. Includes performances, an MSME bazaar, and cultural competitions." : "Di Keraton Banggai dan Alun-Alun Kota Banggai, bertema “The Rhythm of Culture: Harmony in the Land of Benggawi”. Acara juga diramaikan pertunjukan seni, bazar UMKM, dan lomba budaya."}</p>
              </div>
            </article>
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-5 text-muted">
            {english ? "More local language, dance, food, and customary practices can be added after confirmation with residents and customary leaders." : "Bahasa Banggai, tarian, kuliner, dan upacara adat lainnya dapat ditambahkan setelah dikonfirmasi melalui wawancara warga atau tokoh adat."}
          </p>
        </div>
      </section>

      <section id="destinasi" aria-labelledby="destinations-title" className="scroll-mt-24 bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{english ? "Destinations" : "Destinasi wisata"}</p>
            <h2 id="destinations-title" className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{english ? "From the palace hill to the open sea." : "Dari bukit keraton hingga laut lepas."}</h2>
            <p className="mt-4 text-base leading-7 text-muted">{english ? "Banggai Laut is known for white-sand beaches, small islands, and rich underwater geology within the Coral Triangle." : "Kabupaten Banggai Laut kaya wisata bahari. Hamparan pasir putih, pulau-pulau kecil, dan geologi bawah lautnya berada di kawasan segitiga karang dunia."}</p>
          </header>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {destinations.map(([title, description], index) => (
              <li key={title} className="rounded-2xl border border-border bg-white p-5 sm:p-6">
                <span className="text-xs font-bold tracking-[0.16em] text-primary">0{index + 1}</span>
                <h3 className="mt-2 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-5 text-muted">{english ? "Other beaches and islands, such as Oyama Beach, are nearby destinations in other districts. Verify local access, opening hours, and fees before your visit." : "Pantai dan pulau lain, seperti Pantai Oyama, merupakan destinasi sekitar yang berada di kecamatan lain. Akses, jam buka, dan tiket perlu dikonfirmasi sebelum berkunjung."}</p>
        </div>
      </section>

      <section id="desa" aria-labelledby="villages-title" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{english ? "Communities" : "Desa & kelurahan"}</p>
            <h2 id="villages-title" className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{english ? "Ten communities across Banggai District." : "Sepuluh desa dan kelurahan di Kecamatan Banggai."}</h2>
            <p className="mt-4 text-sm leading-6 text-muted">{english ? "The administrative list below is a working reference and should be confirmed with the district office." : "Daftar administratif berikut menjadi acuan awal dan perlu dikonfirmasi kembali ke kantor kecamatan."}</p>
          </header>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-background p-6 sm:p-8">
              <h3 className="text-lg font-bold text-ink">{english ? "Urban villages" : "Kelurahan"}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {villages.kelurahan.map((name) => <li key={name} className="rounded-full bg-primary-soft px-4 py-2 text-sm font-semibold text-primary-deep">{name}</li>)}
              </ul>
              <p className="mt-5 text-sm leading-6 text-muted">{english ? "Lompio is home to Keraton Banggai and the Regional Museum, making it a cultural center of the district." : "Lompio menjadi rumah bagi Keraton Banggai dan Museum Daerah, sekaligus pusat budaya kecamatan."}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{english ? "Tano Bonunungan lies in the regency town center and is home to Banggai Public Harbor." : "Tano Bonunungan berada di tengah kota kabupaten dan menjadi lokasi Pelabuhan Rakyat Banggai; perkembangannya mengikuti kehidupan perkotaan."}</p>
            </div>
            <div className="rounded-3xl border border-border bg-background p-6 sm:p-8">
              <h3 className="text-lg font-bold text-ink">{english ? "Villages" : "Desa"}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {places.map((name) => <li key={name} className="rounded-full bg-accent-soft px-4 py-2 text-sm font-semibold text-ink">{name}</li>)}
              </ul>
              <p className="mt-5 text-sm leading-6 text-muted">{english ? "Village profiles—local character, potential, and community stories—will be developed with residents once each detail is verified." : "Profil tiap desa—ciri khas, potensi, dan cerita warga—akan dilengkapi bersama masyarakat setelah informasinya terverifikasi."}</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export function ClosingSection() {
  const { language } = useLanguage();
  const english = language === "en";

  return (
    <section aria-labelledby="closing-title" className="bg-ink px-4 py-16 text-center text-white sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 id="closing-title" className="text-3xl font-bold tracking-tight sm:text-4xl">{english ? "Banggai is not only a place to visit, but a place to feel." : "Banggai tidak hanya untuk dikunjungi, tapi untuk dirasakan."}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">{english ? "Come during the Tumbe Festival, stop by the palace, and let the sea and the warmth of its people tell their story." : "Datang saat Festival Tumbe, singgah di keraton, lalu biarkan laut dan keramahan warganya yang bercerita."}</p>
        <Link href="#budaya" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-accent-soft">{english ? "Explore Banggai culture" : "Jelajahi budaya Banggai"}</Link>
      </div>
    </section>
  );
}
