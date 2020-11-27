
window.addEventListener('load',function() {
   
    /////////////////SPINNER///////////////
    var spinner = document.querySelector (".loader")
    spinner.style.display = "none";
    setTimeout (function(){ }, 6000);

  
    var apiKey = '1dd189fc2111fcf3d905a59b0cd42a3c';
    var linkImagen = "https://image.tmdb.org/t/p/w500";

    this.location.search;

    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);

    var buscadorPelis = document.querySelector ("ul.resultadosPeliculas");
    var buscadorSeries = document.querySelector ("ul.resultadosSeries");

    var buscando = queryStringObj.get("buscador");
  
    console.log(buscadorPelis);
    console.log(buscadorSeries);


    var buscando = queryStringObj.get("buscador");

///////nuevo

if (media_type == "movie") {

    fetch ()
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)

            spinner.style.display = "none"
        })
    
}




fetch (`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${buscando}}&page=1&include_adult=false`)
    .then(function (response) {
        return response.json()
    })
    
    .then(function (data) {
       
        if (data.results.length === 0){
           alert ("No hay resultados de tu busqueda")
        }    

      
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];

            buscadorPelis.innerHTML +=

            `<li>
                <div class="resultados uk-child-width-1-2@m" uk-grid>
                    <div class="uk-inline">
                        <div class="uk-panel">
                                <a href="detalles.html?tipo=${element.media_type}&id=${element.id}>${element.title}">
                                    <img src="${linkImagen}${element.poster_path}" alt="">
                                </a>
                            <div class="uk-position-center uk-panel"><h1></h1></div>
                                            
                        </div>
                    </div>
                </div>
            </li>`
            
            console.log(linkImagen + element.poster_path);
        }
    })


    .catch(function (error){
        console.log('El error fue: '+error);
        
    })


fetch (`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${buscando}}&page=1&include_adult=false`)
    .then(function (response) {
        return response.json()
    })
    
    .then(function (data) {
        console.log (data);
      
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            buscadorSeries.innerHTML +=
            
            `<li>
                    <div class="resultados uk-child-width-1-2@m" uk-grid>
                        <div class="uk-inline">
                            <div class="uk-panel">
                                    <a href="detalles.html?tipo=${element.media_type}&id=${element.id}>${element.title}">
                                        <img src="${linkImagen}${element.poster_path}" alt="">
                                    </a>
                                <div class="uk-position-center uk-panel"><h1></h1></div>
                                                
                            </div>
                        </div>
                    </div>
             </li>`
                ;
            
        
        }
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