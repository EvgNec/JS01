const age = 10;
const totalPrice = 200.11;
const userName = "Ivan";
const isOpen = true;
const shoulConfirm = false;
const x = 1;



// Треугольник
const leter = '#';
let pic = '';

for (let i = 0; i <= 5; i += 1){
    for (let j = 0; j <= i; j += 1){
        pic += '#';
    }    
    console.log(pic);
}

// Елочка
let i = 0, j = 0;
// Желаемое количество строк
const max = 7;
let space = "";
let  star = "";

while (i < max) {
  space = "";
  star = "";
  for (j = 0; j < max - i-1; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) star += "*";
  console.log(space + star);
  i++;
}
