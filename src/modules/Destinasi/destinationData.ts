export interface Destination {
  id: string;
  name: string;
  area: string;
  location: string;
  description: string;
  image: string;
  alt: string;
  href?: string;
}

export const destinations: Destination[] = [
  {
    id: "pantai-nonong",
    name: "Pantai Nonong",
    area: "Desa Nonong",
    location: "Desa Nonong, Kecamatan Batui, Banggai",
    description: "Wisata pantai di wilayah Kecamatan Batui yang menawarkan panorama pesisir khas Kabupaten Banggai.",
    image: "/images/gallery/pesisir.svg",
    alt: "Ilustrasi garis pantai",
    href: "https://www.google.com/search?kgmid=%2Fg%2F11vqhzv78r",
  },
  {
    id: "pantai-desa-uso",
    name: "Wisata Bahari Pantai Desa Uso",
    area: "Desa Uso",
    location: "Desa Uso, Kecamatan Batui, Banggai",
    description: "Destinasi wisata pantai dan bahari di tingkat desa di Kecamatan Batui.",
    image: "/images/gallery/perahu.svg",
    alt: "Ilustrasi perahu di laut",
  },
  {
    id: "air-terjun-pesa",
    name: "Air Terjun Pesa 1001 Tangga Ondo Ondolu / Air Terjun Pesak",
    area: "Desa Ondo-Ondolu",
    location: "Desa Ondo-Ondolu, Kecamatan Batui, Banggai",
    description: "Air terjun di kawasan Ondo Ondolu, Kecamatan Batui.",
    image: "https://lh3.googleusercontent.com/grass-cs/AABkmLeo3VQXPt-j5zqNkLvdTNaV-UMiCHpUyXOpHXTQre7Qpgar5UFrAgLbY1f2Aht7Q_CUWq_IAOnfSgViDGPqu-Dii1biYdbSFMJXQjJljpdWe_zZpS_1-cUfXuRONgozqDwRBSOKzw=s108-w108-h144-n-k-no",
    alt: "Air Terjun Pesa 1001 Tangga Ondo Ondolu atau Air Terjun Pesak",
    href: "https://www.google.com/search?kgmid=%2Fg%2F11t48ycyp9&q=Air+Terjun+Pesa+1001+Tangga+Ondo+Ondolu+%2F+Air+Terjun+Pesak",
  },
  {
    id: "air-terjun-bontoa",
    name: "Air Terjun Bontoa",
    area: "Kecamatan Batui",
    location: "Kecamatan Batui, Banggai",
    description: "Destinasi air terjun di Kecamatan Batui.",
    image: "/images/gallery/perbukitan.svg",
    alt: "Ilustrasi perbukitan",
  },
  {
    id: "sungai-bolo",
    name: "Wisata / Sungai Bolo",
    area: "Kecamatan Batui",
    location: "Kecamatan Batui, Banggai",
    description: "Wisata sungai di Kecamatan Batui.",
    image: "/images/gallery/perahu.svg",
    alt: "Ilustrasi suasana perairan",
  },
  {
    id: "bendungan-sisipan",
    name: "Bendungan Sisipan Batui (Tanggul Kebun Sambal)",
    area: "Kecamatan Batui",
    location: "Kecamatan Batui, Banggai",
    description: "Bendungan dan tanggul Kebun Sambal di Kecamatan Batui.",
    image: "/images/gallery/pesisir.svg",
    alt: "Ilustrasi bentang alam",
  },
  {
    id: "bolo-gompi",
    name: "Bolo' Gompi",
    area: "Kecamatan Batui",
    location: "Kecamatan Batui, Banggai",
    description: "Destinasi lokal di Kecamatan Batui.",
    image: "/images/gallery/kampung.svg",
    alt: "Ilustrasi suasana desa",
  },
];
