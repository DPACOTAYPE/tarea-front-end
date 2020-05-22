// 4.9  Un cliente de un banco deposita equis cantidad de pesos cada mes
// en una cuenta de ahorros. La cuenta percibe un interés fijo durante
// un año de 10 % anual. Realice un algoritmo para determinar  el total
// de la inversión final de cada año en los próximos N años. Represente
// la solución mediante el diagrama de flujo, el pseudocódigo y
// diagrama
// N/S.

let cant_anio= +prompt("Ingrese cuántos años ha invertido");
let meses=12;
let depositos=[];

let suma_depositos=0;
let total_depositos=0;
let i=0;
let anio=0;

while(i<meses){
    // los depósitos para está resolución serán los mismos importes para cada año
    depositos.push(+prompt("ingrese depositos"));
    console.log(`el deposito del mes ${i+1} es : ${depositos[i]}`); 
    suma_depositos=suma_depositos+depositos[i];
    i=i+1;
    
}

console.log(`el deposito total es :${suma_depositos}`);


while(anio<cant_anio){
    // el primer año el pago es: los 12 depósitos con un interés del 10%
    // el 2do año el pago es: el importe total del primer año (incluido el pago de intéres) más los 12 depósitos del 2do año, y a esta suma se le paga el interés del 10%
    total_depositos=(suma_depositos+total_depositos)*1.10;
    anio=anio+1;
  
   console.log(`El deposito del año ${anio}  de importe ${suma_depositos} con interés de 10% es: ${total_depositos}`);
   }
console.log(`El deposito total de los años es ${total_depositos}`);


