// 4.13  Un vendedor ha realizado N ventas y desea saber cuántas fueron
// por 10,000 o menos, cuántas fueron por más de 10,000 pero por
// menos de 20,000, y cuánto fue el monto de las ventas de cada una y
// el monto global. Realice un algoritmo para determinar  los totales.
// Represente la solución mediante diagrama de flujo, pseudocódigo y
// diagrama N/S.


let ventas=[];
let cant_ventas= +prompt("Ingrese cuántas ventas hizo");
let i=0;
let a=0;
let total_ventas=0;
let contador_ventas_mil=0;
let contador_ventas_mayor_mil=0;


while(i<cant_ventas){
    ventas.push(+prompt("Ingresa importe de venta realizada con un valor menor a 20000 soles"));
    console.log(`Importe de Venta realizada ${i+1} es: ${ventas[i]}`);
    total_ventas=ventas[i]+total_ventas;
    i=i+1;
    }
console.log(`Total de ventas es ${total_ventas}`);

while(a<ventas.length){
    if(ventas[a]<=10000){
        contador_ventas_mil=contador_ventas_mil+1;
    }else{
        if(ventas[a]>10000 && ventas[a]<20000){
            contador_ventas_mayor_mil=contador_ventas_mayor_mil+1;
        }
    }
    a=a+1;
}

console.log(`La cantidad de ventas menores a 10000 = ${contador_ventas_mil}`);
console.log(`La cantidad de ventas mayores a 10000  y menores a 20000 = ${contador_ventas_mayor_mil}`);

