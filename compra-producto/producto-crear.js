const URL_BACKEND="https://5ec86498155c130016a909dd.mockapi.io";


let formProducto=document.getElementById("formProducto");

let inputNombrePro=document.getElementById("inputNombrePro");
let inputPrecioPro=document.getElementById("inputPrecioPro");
let inputNombreImg=document.getElementById("inputNombreImg");
let idProducto=0;
let imagen=`https://unsplash.it/50?image=${{idProducto}}`;

// const obtenerId=(clientes)=>{
//     clientes.forEach(cliente=>{

//     })
    
// }
inputNombrePro.focus();
// inputNombre.onfocus();
formProducto.onsubmit=(e)=>{

e.preventDefault();

idProducto=idProducto+1;
let objProducto={
    // en un select, la propiedad value, es el value del option seleccionado
    id: idProducto.value,
    pro_nom:inputNombrePro.value,
   pro_pre:inputPrecioPro.value,
    pro_img:imagen.value
       
};
// console.log(objPedido);

fetch(`${URL_BACKEND}/producto`,{
method:'POST',
body:JSON.stringify(objProducto),
headers:{
    "Content-type":"application/json"
}

}).then((response)=>{
response.json().then((data)=>{
    console.log(data);
    
})
})
inputNombrePro.value="";
inputPrecioPro.value="";
// inputNombreImg.value="";
// inputApellidos.innerText="";
//  inputDNI.innerText="";

}
