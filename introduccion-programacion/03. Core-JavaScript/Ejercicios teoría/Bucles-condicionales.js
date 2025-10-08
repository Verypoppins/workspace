//Bucles con condicionales:
//6. Imprimir los números del 1 al 100 de uno en uno como alerta o por pantalla.

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

//7. Imprimir sólo los números pares del 1 al 100 en log de consola o por pantalla.

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

//8. Imprimir sólo los números múltiplos de 20 del 1 al 1000 por pantalla.

for (let i = 1; i <= 1000; i++) {
  if (i % 20 === 0) console.log(i);
}

//9. Imprimir por pantalla las tablas de multiplicar del 0 al 9

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}


