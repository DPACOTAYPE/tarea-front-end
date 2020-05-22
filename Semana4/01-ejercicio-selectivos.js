// 3.2

let cantHorasT= +prompt("Ingrese cantidad horas trabajadas:");
let costoHora=+prompt("Ingrese pago de costo por hora");
let sueldo=0;
let bono=0;
let cantHorasB=40;

if(cantHorasT>40){
    bono=(cantHorasT-cantHorasB)*costoHora*2;
    sueldo=(cantHorasB*costoHora) + bono;
    console.log(`El sueldo a pagar es ${sueldo}`);
} else{
    sueldo=(cantHorasT*costoHora);
    console.log(`El sueldo a pagar es ${sueldo}`);
}

// 3.3
Regalo	        Costo
Tarjeta     	$10.00 o menos
Chocolates	    $11.00 a $100.00
Flores	        $101.00 a $250.00
Anillo 	        Más de $251.00

let regalo="";
let inversion=+prompt("ingrese el importe que desea gastar en el regalo:");

if(inversion<=10){
    regalo="puede comprar una Tarjeta";
    console.log(regalo);
} else if (inversion>=10 && inversion<=100){
    regalo="puede comprar Chocolates";
    console.log(regalo);
}else if (inversion>=101  && inversion<=250){
    regalo="puede comprar Flores";
    console.log(regalo);
}else if (inversion>=251 ){
    regalo="puede comprar un anillo";
    console.log(regalo);
} 
   

// 3.4  

let pago=0;
let cantHora=+prompt("Ingrese cantidad horas de estacionamiento:");
let pagoHoraExcedida=0;
// let pagoHoraExcedida1=0;
let cantHoraB=2;
let cantHoraB1=5;
let cantHoraB2=10;

if(cantHora<=2){
    pago=cantHora*5;
    console.log(`El importe a cobrar es: ${pago}`);
} else if (cantHora>2 && cantHora<=5){
    pagoHoraExcedida=(cantHora-cantHoraB)*4;
    pago=(cantHoraB*5)+pagoHoraExcedida;
    console.log(`El importe a cobrar es: ${pago}`);
} else if (cantHora>5 && cantHora<=10){
    pagoHoraExcedida=(cantHora-cantHoraB1)*3;
    pago=(cantHoraB*5)+((cantHoraB1-cantHoraB)*4)+pagoHoraExcedida;
    console.log(`El importe a cobrar es: ${pago}`);
} else if(cantHora>10){
    pagoHoraExcedida=(cantHora-cantHoraB2)*2;
    pago=(cantHoraB*5)+((cantHoraB1-cantHoraB)*4)+((cantHoraB2-canrHoraB1)*3)+pagoHoraExcedida;
    console.log(`El importe a cobrar es: ${pago}`);
}
