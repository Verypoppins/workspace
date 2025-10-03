//Preguntar por pantalla un número entero y que se imprima por pantalla
//un triángulo tipo, siendo el número entero el número de líneas que se
//imprimen. Un ejemplo sería con el número 5:
//1
//31
//531
//7531
//97531
//--------------------
//Resultado Martín:
let input_number = parseInt(window.prompt('Introduce un número entero'));
let num = 0;

for (let i = 1; i <= input_number; i++) {
  num = 2 * i - 1;
  let fila = '';
  for (let j = 0; j < i; j++) {
    fila += num - 2 * j;
  }
  console.log(fila);
}

//------------------------------------
//Resultado David Roncal 2 intento:

const number_of_lines = parseInt(prompt('Introduce un número entero:'));

let pyramid = '';
let aux_line = '';

for (let n_line = 1; n_line <= number_of_lines; n_line++) {
  const first_number_in_line = 2 * n_line - 1;
  aux_line = `${first_number_in_line}${aux_line}`;
  pyramid += `${aux_line}<br>`;
}

document.write(pyramid);

//------------------------------------
//Resultado Miguel:
const numFilas = window.prompt(
  'Dime cuantas filas quieres que tenga el triangulo?',
);
let topNumero = numFilas * 2;

for (i = 1; i <= topNumero; i += 2) {
  for (j = i; j >= 1; j--) {
    if (j % 2 !== 0) {
      document.write(j + ' ');
    }
  }
  document.write('<br><br>');
  //document.write("<br>");
}

//------------------------------------
//Resultado Cesare:
const totLines = parseInt(window.prompt('Numero de lineas '));

let toPrint = '';
document.write(toPrint, '<br/>');
//debugger;
for (let i = 1; i <= totLines * 2; i += 2) {
  //    lastValue = lastValue + i;
  toPrint = i + ' ' + toPrint + '<br/>';
  document.write(toPrint, '<br/>');
}

// para test
