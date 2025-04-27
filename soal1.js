function getKategori(age) {
  switch (true) {
    case age >= 0 && age <= 12:
      return 'Anak-anak';
    case age >= 13 && age <= 17:
      return 'Remaja';
    case age >= 18 && age <= 59:
      return 'Dewasa';
    case age >= 60:
      return 'Lansia';
    default:
      return 'Tidak valid';
  }
}

let jmlOrang = parseInt(prompt('Masukkan jumlah orang: '), 10);

let jmlKategori = {
  'Anak-anak': 0,
  'Remaja':    0,
  'Dewasa':    0,
  'Lansia':    0
};

for (let i = 0; i < jmlOrang; i++) {
  const usia = parseInt(prompt(`Usia orang ke-${i + 1}: `), 10);
  const kategori = getKategori(usia);
  
  // Hanya hitung jika kategori valid (ada di object jmlKategori)
  if (jmlKategori.hasOwnProperty(kategori)) {
    jmlKategori[kategori]++;
  }
}

console.log('Jumlah orang per kategori usia:');
console.log(`Anak-anak: ${jmlKategori['Anak-anak']} orang`);
console.log(`Remaja:    ${jmlKategori['Remaja']} orang`);
console.log(`Dewasa:    ${jmlKategori['Dewasa']} orang`);
console.log(`Lansia:    ${jmlKategori['Lansia']} orang`);
