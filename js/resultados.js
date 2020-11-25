window.addEventListener('load',function() {
   
    var apiKey = '1dd189fc2111fcf3d905a59b0cd42a3c';
    var linkImagen = "https://image.tmdb.org/t/p/w500";


    this.location.search;
    var queryString = new URLSearchParams(queryString);
    var queryString = location.search;
    

    var buscador = document.querySelector (".buscador");
    var buscando = queryString.get('buscador');

///////nuevo


fetch (`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${buscando}}&page=1&include_adult=false`)
    .then(function (response) {
        return response.json()
    })
    
    .then(function (data) {
        console.log (data);
      
        var ul = document.querySelector(".resultadospeliculas");
        var resultadoBusqueda = data.results;
        

        resultadoBusqueda.forEach(function(element){
            ul.innerHTML +=
            `<li> <a class="buscador" href="detalle.html?type=${element.id}>${element.title}</a></li>`
             
        })

    .catch(function (error){
        console.log('El error fue: '+error);
        
    })

})

fetch (`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${buscando}}&page=1&include_adult=false`)
    .then(function (response) {
        return response.json()
    })
    
    .then(function (data){
        console.log (data);
        
        var ul = document.querySelector(".resultadosseries");
        var resultadoBusqueda = data.results;
        

        resultadoBusqueda.forEach(function(element){
            ul.innerHTML +=
            `<li> <a class="buscador" href="detalle.html?type=${element.id}>${element.title}</a></li>`

            console.log(data);
                
        });
        
    })

    .catch(function (error){
    console.log('El error fue: '+error);

    })



}); //fin

   
/*fetch (`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${buscando}}&page=1&include_adult=false`)
.then(function (response) {
    return response.json()
})

.then(function (data) {
    console.log (data);
  
    var ul = document.querySelector(".listaPeliculas");
    var resultadoBusqueda = data.results;

    for (let index = 0; index < data.results.length; index++) {
        const element = data.results[index];
       
        if (element.media_type == "movies") {
            ul.innerHTML +=
            `<form class="buscador uk-search uk-search-default" action="buscador.html" method="get">
                    <a href='detalles.html?tipo=pelicula&id=${element.id}">
                    <img src="${linkImagen} ${element.poster_path}" alt="">
            </form>
            ` 
        } if (element.media_type == "tv") {
            ul.innerHTML +=
            `<form class="buscador uk-search uk-search-default" action="buscador.html" method="get">
                    <a href='detalles.html?tipo=serie&id=${element.id}">
                    <img src="${linkImagen} ${element.poster_path}" alt="">
            </form>
            `
        }
    }

})

.catch(function (error){
    console.log('El error fue: '+error);

    for (let index = 0; index < data.results.length; index++) {
                    const element = data.results[index];
                
                    if (element.media_type == "movies") {
                        ul.innerHTML +=
                        `<li> <a class="buscador" href="detalle.html?type=${element.id}>${element.title}</a></li>`
                        
                    } if (element.media_type == "tv") {
                        ul.innerHTML +=
                        `<li> <a class="buscador" href="detalle.html?type=${element.id}>${element.title}</a></li>`
                        
                    }
                }
}) */