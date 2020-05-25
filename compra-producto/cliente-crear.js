const URL_BACKEND="https://5ec86498155c130016a909dd.mockapi.io";


let formCliente=document.getElementById("formCliente");

let inputNombre=document.getElementById("inputNombre");
let inputApellidos=document.getElementById("inputApellidos");
let inputDNI=document.getElementById("inputDNI");
let idCliente=0;

// const obtenerId=(clientes)=>{
//     clientes.forEach(cliente=>{

//     })
    
// }
inputNombre.focus();
// inputNombre.onfocus();
formCliente.onsubmit=(e)=>{

e.preventDefault();




idCliente=idCliente+1;
let objCliente={
    // en un select, la propiedad value, es el value del option seleccionado
    id: idCliente.value,
    cli_nom:inputNombre.value,
    cli_ape:inputApellidos.value,
    cli_dni:inputDNI.value,
       
};
// console.log(objPedido);

fetch(`${URL_BACKEND}/cliente`,{
method:'POST',
body:JSON.stringify(objCliente),
headers:{
    "Content-type":"application/json"
}

}).then((response)=>{
response.json().then((data)=>{
    console.log(data);
    
})
})
inputNombre.value="";
inputApellidos.value="";
inputDNI.value="";
// inputApellidos.innerText="";
//  inputDNI.innerText="";

}
