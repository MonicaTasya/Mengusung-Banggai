export interface Village {
  name: string;
  x: number;
  y: number;
  focus?: boolean;
}

export interface FocusVillage {
  name: string;
  area: number;
  percentage: number;
}

// TODO: Konfirmasi kembali daftar desa dan batas administrasi sebelum peta final dipasang.
// Daftar administratif BPS mencantumkan UPT Motihelumo terpisah; jumlah desa di sini tetap 10.
export const villages: Village[] = [
  { name: "Wubudu", x: 28, y: 26 },
  { name: "Buladu", x: 43, y: 20 },
  { name: "Deme II", x: 61, y: 24 },
  { name: "Deme I", x: 75, y: 32 },
  { name: "Dulukapa", x: 71, y: 51, focus: true },
  { name: "Bubalango", x: 56, y: 67 },
  { name: "Hulawa", x: 37, y: 74 },
  { name: "Koluwoka", x: 21, y: 63 },
  { name: "Buluwatu", x: 18, y: 44 },
  { name: "Motihelumo", x: 46, y: 46, focus: true },
];

export const focusVillages: FocusVillage[] = [
  { name: "Motihelumo", area: 14.61, percentage: 9.23 },
  { name: "Dulukapa", area: 17.45, percentage: 11.03 },
];
