// 5.8 Realice un algoritmo que lea un vector y a partir de él forme un segundo
// vector, de tal forma que el primer elemento pase a ser el segundo, 
// el segundo pase a ser el tercero, el último pase a ser el primero, y así
// sucesivamente. 


let arreglo=[];
let cDatos= +prompt("Indique cuántos datos va a ingresar");
let arreglo_mod=[];
for(let i=0;i<cDatos;i++){
    let cDato=0;
    cDato= +prompt(`Ingrese el dato ${i}`);
    arreglo.push(cDato);         
}
console.log(arreglo);

for(let j=0;j<arreglo.length;j++){
   arreglo_mod[j]=arreglo[j-1];
   arreglo_mod[0]=arreglo[arreglo.length-1];
}

console.log(arreglo_mod);