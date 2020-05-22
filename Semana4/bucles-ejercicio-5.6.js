// 5.6
// Realice y represente mediante diagrama de flujo y pseudocódigo un
// algoritmo que lea los nombres y las edades de diez alumnos, y que los
// datos se almacenen en dos vectores, y con base en esto se determine
// el nombre del alumno con la edad mayor del arreglo.


let estudiantes=[];


for(let i=0;i<4;i++){
     let alumno=[];
     alumno[0]= prompt(`Ingrese nombre del alumno ${i+1}`);
     alumno[1]= +prompt(`Ingrese edad del alumno ${i+1}`);
     estudiantes.push(alumno);
     console.log(`Los datos del estudiante ${i+1} son: ${estudiantes[i]}`);
     
}
let mayor=0;
for(let j=0;j<4;j++){
    if(estudiantes[j][1]>estudiantes[1][1]){
       mayor=estudiantes[j][1];
    } else {
        if(estudiantes[j][1]<=estudiantes[1][1]){
            mayor=estudiantes[1][1];
        }
        
   
    } 
    }
    // console.log(`El alumno con mayor edad respecto a los demás es: ${estudiantes[j][0]}`);
  
console.log(`El alumno con mayor edad respecto a los demás es: ${mayor}`);