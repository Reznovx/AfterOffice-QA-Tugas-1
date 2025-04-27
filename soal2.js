function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  return a / b;
}

const menu =
  'Pilih operasi:\n' +
  '1. Penjumlahan\n' +
  '2. Pengurangan\n' +
  '3. Perkalian\n' +
  '4. Pembagian';
console.log(menu);
let pilihan = parseInt(prompt('Pilih 1-4: '), 10);

if (pilihan < 1 || pilihan > 4 || isNaN(pilihan)) {
  console.log('Pilih antara 1-4.');
} else {
  const angka1 = parseFloat(prompt('Angka 1: '));
  const angka2 = parseFloat(prompt('Angka 2: '));

  let hasil;
  let opr;

  switch (pilihan) {
    case 1:
      hasil = tambah(angka1, angka2);
      opr = 'Penjumlahan';
      break;
    case 2:
      hasil = kurang(angka1, angka2);
      opr = 'Pengurangan';
      break;
    case 3:
      hasil = kali(angka1, angka2);
      opr = 'Perkalian';
      break;
    case 4:
      if (angka2 === 0) {
        console.log('Error: Pembagian tidak bisa dengan nol');
        return;
      }
      hasil = bagi(angka1, angka2);
      opr = 'Pembagian';
      break;
  }

  console.log(`Operasi: ${opr}`);
  console.log(`Angka 1: ${angka1}`);
  console.log(`Angka 2: ${angka2}`);
  console.log(`Hasil: ${hasil}`);
}
