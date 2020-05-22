// 4.1 Un profesor tiene un salario inicial de $1500, y recibe un incremento
// de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6
// años?
// ¿Qué salario ha recibido en cada uno de los 6 años? Realice el
// algoritmo
// y represente la solución mediante el diagrama de flujo, el
// pseudocódigo
// y el diagrama N/S, utilizando el ciclo apropiado.

let anio=0;
let salario=1500;
while(anio<6){
    salario=salario*1.10;
    anio=anio+1;
    console.log(`Salario año ${anio}= ${salario.toFixed(2)}`);
    
}
console.log(`Salario total de 6 años= ${salario.toFixed(2)}`);


