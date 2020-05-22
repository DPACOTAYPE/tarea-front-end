// 4.3  Se requiere un algoritmo para determinar, de N cantidades, cuántas
// son cero, cuántas son menores a cero, y cuántas son mayores a cero.
// Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S para
// representarlo, utilizando el ciclo apropiado.

let cantidad=[-4,-6,-8,0,-1,-5,0,10];
let contador_cero=0;
let contador_menor_cero=0;
let contador_mayor_cero=0;
let i=0;

while (i<cantidad.length){
    if(cantidad[i]===0){
        contador_cero=contador_cero+1;
    }else{
        if(cantidad[i]>0){
            contador_mayor_cero=contador_mayor_cero+1;
        }
        else{
            contador_menor_cero=contador_menor_cero+1;
            }
    } 
    i=i+1;
    }

    console.log(`Cantidad de números 0 = ${contador_cero}`);
    console.log(`Cantidad de números mayores a 0 = ${contador_mayor_cero}`);
    console.log(`Cantidad de números menores a 0 = ${contador_menor_cero}`);
    
   
