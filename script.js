/**
 * @author Rizky Haksono
 * @Kelas Web B Afternoon
 */

// ✨ if, else, nested ifs
function if_else(jam) {
  if (jam < 18) {
    salam = "Selamat Pagi";
    console.log(salam);
  } else {
    salam = "Selamat Malam";
  }
}

// ✨ switch case
function switch_case(day) {
  switch (day) {
    case "Minggu":
      console.log(day);
      break;
    case "Senin":
      console.log(day);
      break;
    case "Selasa":
      console.log(day);
      break;
    case "Rabu":
      console.log(day);
      break;
    case "Kamis":
      console.log(day);
      break;
    case "Jumat":
      console.log(day);
      break;
    case "Sabtu":
      console.log(day);
      break;
  }
}

// ✨ for statement
function for_statement() {
  const bandKPOP = ["NCT 127", "Twice", "NCT Dream", "Way V", "BTS", "Aespa", "Red Velvet", "Black Pink", "Seventeen", "Xodiac", "EXO", "Rizze", "New Jeans", "IVE"];

  console.log("Total band KPOP: " + bandKPOP.length);
  for (let i = 0; i < bandKPOP.length; i++) {
    console.log(bandKPOP[i]);
  }
}

// ✨ forEach()
function forEach() {
  const fruits = ["apple", "orange", "cherry"];

  fruits.forEach((item, index) {
    console.log(index + ": " + item); 
  });
}

// ✨ while, do while
function do_while() {
  let text = "";
  let i = 0;

  do {
    i++;
    console.log((text += " Bilangan ke " + i));
  } while (i < 10);
}

// ✨ function
function while_statement() {
  let i;
  while (i < 10) {
    i++;
    console.log("Angka ke" + i);
  }
}

// if else and nested if else
console.log(if_else(10));
// switch case
console.log(switch_case("Minggu"));
// for
console.log(for_statement());
// forEach
console.log(forEach());
// do while
console.log(do_while());
// while
console.log(while_statement());
