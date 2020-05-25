
// const dibujarPeliculas = ({ results }) => {
//     results.forEach((peli) => {
  
//       let carouselCell = $(`<div class="carousel-cell"></div>`);
//       let card = $(`<div class="card"></div>`);
//       let imagen = $(`<div class="card-img-top imagen-pelicula"></div>`);
//       imagen.css("background-image", `url("https://image.tmdb.org/t/p/w500${peli.poster_path}")`);
  
//       let cardBody = $(`<div class="card-body"></div>`);
//       let cardTitle = $(`<h4 class="card-title">${peli.title}</h4>`);
//       let cardPromedioVoto = $(`<h5 class="card-title">Promedio de votos:${peli.vote_average}</h5>`);
//       let cardText = $(`<p class="card-text"></p>`);
//       let spanTexto = $(`<span>${peli.overview.substr(0, 50)}</span>`);
//       let fechaCreacion = $(`<h5 class="card-title">Fecha de Creación:${peli.release_date}</h5>`);
//       let leerMas = $(`<span class="text-danger">... Leer Mas</span>`);
  
//       cardText.append(spanTexto);
//       cardText.append(leerMas);
  
//       leerMas.click(() => {
//         // capturamis nuevamente al slider de flickity
//         let flick = $('#contenedor-peliculas').flickity({
//           // options
//           cellAlign: 'left',
//           contain: true,
//         });
  
//         let leerMasTexto = leerMas.text();
//         if (leerMasTexto.indexOf("Mas") > -1) {
//           // texto estaba chiquito
//           spanTexto.text(peli.overview);
//           leerMas.text(" Leer Menos");
//           // recalculamos la altura de flickity
//           flick.flickity('resize')
//         } else {
//           // texto estaba largo
//           spanTexto.text(peli.overview.substr(0, 50));
//           leerMas.text("... Leer Mas");
//           // recalculamos la altura de flickity
//           flick.flickity('resize')
//         }
//       })
  
  
//       cardBody.append(cardTitle);
//       cardBody.append(cardPromedioVoto);
//       cardBody.append(fechaCreacion);
//       cardBody.append(cardText);
//       card.append(imagen);
//       card.append(cardBody);
  
//       carouselCell.append(card);
  
//       $("#contenedor-peliculas").append(carouselCell);
//     });
  
  
//     // ocultando alerta
//     $("#alertCargando").attr("hidden", "hidden")
//     // mostrando el carousel
//     $("#contenedor-peliculas").removeAttr("hidden");
  
//     // Toma al slider de Flickity y y lo convierte en UN SLIDER como tal
//     $('#contenedor-peliculas').flickity({
//       // options
//       cellAlign: 'left',
//       contain: true,
//     });
//   }
  
  // const traerPeliculas = () => {
  //   // let endpoint = "https://api.themoviedb.org/3/search/movie?api_key=da51a1aa508a98c68062e0a0bfd65d16&language=es&query=toy%20story";
  //   let endpoint = `https://api.themoviedb.org/3/search/movie?api_key=da51a1aa508a98c68062e0a0bfd65d16&language=es`;
  //   fetch(endpoint, { method: 'GET', body: null })
  //     .then((response) => {
  //       response.json().then((data) => {
  //         dibujarPeliculas(data);
  //       })
  //     })
  // }
  
  // traerPeliculas();
  // console.log("Adios");
  

  $("#busqueda").click(e => {
    // jquery, obteniendo en valor de un input
    let textoBuscado = $("#textoBuscado").val();
    textoBuscado=(textoBuscado.trim());
    console.log(textoBuscado);
    
    let endpoint = `https://api.themoviedb.org/3/search/movie?api_key=da51a1aa508a98c68062e0a0bfd65d16&language=es&query=${textoBuscado}`;
    console.log(endpoint);
    console.log($("#contenedor-peliculas"));
    $("#contenedor-peliculas").empty();
    fetch(endpoint, { method: 'GET', body: null })
      .then((response) => {
        response.json().then((data) => {
          filtrarPeliculas(data);
        })
      })
   
   
   });
   
   const filtrarPeliculas = ({ results }) => {
    results.forEach((peli) => {
  
      let carouselCell = $(`<div class="carousel-cell"></div>`);
      let card = $(`<div class="card"></div>`);
      let imagen = $(`<div class="card-img-top imagen-pelicula"></div>`);
      imagen.css("background-image", `url("https://image.tmdb.org/t/p/w500${peli.poster_path}")`);
  
      let cardBody = $(`<div class="card-body"></div>`);
      let cardTitle = $(`<h4 class="card-title">${peli.title}</h4>`);
      let cardPromedioVoto = $(`<h5 class="card-title">Promedio de votos:${peli.vote_average}</h5>`);
      let cardText = $(`<p class="card-text"></p>`);
      let spanTexto = $(`<span>${peli.overview.substr(0, 50)}</span>`);
      let fechaCreacion = $(`<h5 class="card-title">Fecha de Creación:${peli.release_date}</h5>`);
      let leerMas = $(`<span class="text-danger">... Leer Mas</span>`);
  
      cardText.append(spanTexto);
      cardText.append(leerMas);
  
      leerMas.click(() => {
        // capturamis nuevamente al slider de flickity
        let flick = $('#contenedor-peliculas').flickity({
          // options
          cellAlign: 'left',
          contain: true,
        });
  
        let leerMasTexto = leerMas.text();
        if (leerMasTexto.indexOf("Mas") > -1) {
          // texto estaba chiquito
          spanTexto.text(peli.overview);
          leerMas.text(" Leer Menos");
          // recalculamos la altura de flickity
          flick.flickity('resize')
        } else {
          // texto estaba largo
          spanTexto.text(peli.overview.substr(0, 50));
          leerMas.text("... Leer Mas");
          // recalculamos la altura de flickity
          flick.flickity('resize')
        }
      })
  
  
      cardBody.append(cardTitle);
      cardBody.append(cardPromedioVoto);
      cardBody.append(fechaCreacion);
      cardBody.append(cardText);
      card.append(imagen);
      card.append(cardBody);
  
      carouselCell.append(card);
  
      $("#contenedor-peliculas").append(carouselCell);
    });
  
  
    // ocultando alerta
    $("#alertCargando").attr("hidden", "hidden")
    // mostrando el carousel
    $("#contenedor-peliculas").removeAttr("hidden");
  
    // Toma al slider de Flickity y y lo convierte en UN SLIDER como tal
    $('#contenedor-peliculas').flickity({
      // options
      cellAlign: 'left',
      contain: true,
    });
  }