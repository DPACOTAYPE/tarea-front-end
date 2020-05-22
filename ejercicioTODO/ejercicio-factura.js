let cantidad=document.getElementById("cantidad");
let descripcion=document.getElementById("descripcion");
let p_unit=document.getElementById("p_unit");
let p_total=document.getElementById("p_total");
let main__listado_dato=document.getElementById("main__listado_dato");
let btnAgregar=document.getElementById("btnAgregar");
let nombreF=document.getElementById("nombre");
let fechaF=document.getElementById("fecha");
let rucF=document.getElementById("ruc");
let serieF=document.getElementById("serie");
let btnGuardar=document.getElementById("btnGuardar");
// let main__item_total=document.getElementById("main__item_total");
let main_importe_total=document.getElementById("main_importe_total");
let detalle_Factura=[];
let factura=[];
let total=0;



p_unit.onkeyup=()=>{
    p_total.value=cantidad.value*p_unit.value;
    
}



const dibujarCompras=()=>{
    main__listado_dato.innerHTML="";
  
    detalle_Factura.forEach(c=>{
       
        let li=document.createElement("li");
        li.setAttribute("class","main__item_dato")
        let span=document.createElement("span");
        span.setAttribute("class","main_cant");
        span.innerText=c.cant;
        let span1=document.createElement("span");
        span1.setAttribute("class","main_desc");
        span1.innerText=c.descr;
        let span2=document.createElement("span");
        span2.setAttribute("class","main_p_unit");
        span2.innerText=c.punit;
        let span3=document.createElement("span");
        span3.setAttribute("class","main_p_total");
        span3.innerText=c.ptotal;
        // let li1=document.createElement("li");
        // li1.setAttribute("class","main__item_total")
        // let span4=document.createElement("span");
        // span4.setAttribute("class","main_total");
        // span4.innerText="TOTAL";
        // let span5=document.createElement("span");
        // span5.setAttribute("class","main_importe_total");
        // span5.innerText=c.pimpTotal;
        // let span4=document.createElement("span");
        // span4.setAttribute("class","main_importe_total");
        // span4.innerText=c.pimpTotal;
        li.appendChild(span);
        li.appendChild(span1);
        li.appendChild(span2);
        li.appendChild(span3);
        // li1.appendChild(span4);
        // li1.appendChild(span5);
        main__listado_dato.appendChild(li);
       
        // main__listado_dato.appendChild(li1);
        // main__item_total.appendChild(span4)
        // main__listado_dato.style.height=main__listado_dato.style.heigh+50+"px";
       
    })
  
           
    
    
}



btnGuardar.onclick=()=>{
     let facturas={
        nombre:nombreF.value,
        fecha:fechaF.value,
        ruc:rucF.value,
        serie:serieF.value,
        pimpTotal:main_importe_total.value
        // pimpTotal:main_importe_total.value
        // pimpTotal:main_importe_total.value
    }
    factura.push(facturas);
    facturaString = JSON.stringify(factura);
    localStorage.setItem("factura",facturaString);
    detalle_FacturaString = JSON.stringify(detalle_Factura);
    localStorage.setItem("detalle_Factura",detalle_FacturaString)
    
    nombreF.value="";
    fechaF.value="";
    rucF.value="";
    serieF.value="";
    main_importe_total.value="";
   
   
}

btnAgregar.onclick=()=>{
 
    let dFactura={
        cant:cantidad.value,
        descr:descripcion.value,
        punit:p_unit.value,
        ptotal:p_total.value,
        // pimpTotal:main_importe_total.value
        // pimpTotal:main_importe_total.value
    }
    detalle_Factura.push(dFactura);
    total=total+parseInt(detalle_Factura[detalle_Factura.length-1].ptotal);
    main_importe_total.value=total;
    // pimpTotal.value="";
    // detalle_FacturaString = JSON.stringify(detalle_Factura);
    // localStorage.setItem("detalle_Factura",detalle_FacturaString);
    // totales();
    dibujarCompras();
    cantidad.value="";
    descripcion.value="";
    p_unit.value="";
    p_total.value="";
   
}
// const totales=()=>{
//     detalle_Factura.forEach( f => {
//         total += f.p_total;
//     }
     
//     );
//     main_importe_total.value=total; 
// }