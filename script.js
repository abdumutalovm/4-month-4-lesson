// ex-1 : 4 xonali sonning juft raqamlari sonini topuvchi algoritm yozing.
var n = 1234; // Bu yerda siz o'z soningizni kiriting
var count = 0;
var digit;

if (n > 999 && n < 10000) {
  digit = n % 10;
  if (digit % 2 == 0) count++;
  n = (n - digit) / 10;

  digit = n % 10;
  if (digit % 2 == 0) count++;
  n = (n - digit) / 10;

  digit = n % 10;
  if (digit % 2 == 0) count++;
  n = (n - digit) / 10;

  digit = n % 10;
  if (digit % 2 == 0) count++;
}

console.log(count);

// ex-2 : Agar berilgan 3 xonali soning raqamlari yigindisi juft hamda 5 ga karrali bolsa true aks holda
//  false qiymatini chiqaruvchi algoritm yozing.
let num = 154;
let yuzlar = Math.floor(num / 100);
let onlar = Math.floor((num % 100) / 10);
let birliklar = num % 10;
let raqamlarYigindisi = yuzlar + onlar + birliklar;
let natija = false;
if (raqamlarYigindisi % 2 === 0 && raqamlarYigindisi % 5 === 0) {
  natija = true;
}
console.log(natija);

// ex-3 : 3 ta son berilgan ular orasidan o'rtanchasini topuvchi algoritm yozing.
let a = 2;
let b = 3;
let c = 1;

let sum = a + b + c;
let average = sum / 3;

console.log(average);

// ex-4 : Foydalanuvchi kopi bilan 4 xonali son kirita oladi (1 xonali 2 xonali yoki 3 xonali
// bo'lishi ham mumkin).Ushbu kiritilgan sonning palindrom yoki palindrom emasligini tekshiruv
// chi algoritm yozing.
let numberPrompt = prompt("Maximal 4 xonali son kiriting");
let teskariSon = "";

for (let i = numberPrompt.length - 1; i >= 0; i--) {
  teskariSon += numberPrompt[i];
}

if (numberPrompt == teskariSon) {
  console.log(numberPrompt + " - bu son palindrom.");
} else {
  console.log(son + " - bu son palindrom emas.");
}
