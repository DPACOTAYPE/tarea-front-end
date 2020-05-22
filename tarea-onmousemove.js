let cuerpo=document.getElementById("cuerpo");


cuerpo.style.height="100vh";
cuerpo.style.position="relative";
cuerpo.onmousemove=(e)=>{
  
   let div = document.createElement("div");
   div.style.position="absolute";
//    let x=e.offsetX;
//    let x1=x+"px";
    div.style.left=e.offsetX+"px";
    div.style.top=e.offsetY+"px";
    div.style.width="10px";
    div.style.height="10px";
    div.style.borderRadius="50%";
    div.style.backgroundColor="#FEDCFE";
   
   
    cuerpo.appendChild(div);
    console.log(`Mouse X =>${e.offsetX},Mouse Y =>${e.offsetY}`);
    // console.log(div);
    // console.log(x);
    // console.log(x1);
    
    
    // console.log(`Mouse X =>${e.offsetX},Mouse Y =>${e.offsetY}`);
}

