window.addEventListener('load',function() {
   
    var apiKey = '1dd189fc2111fcf3d905a59b0cd42a3c';
    var linkImagen = "https://image.tmdb.org/t/p/w500";


    this.location.search;
    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);

    var buscador = queryStringObj.get("buscador");


    fetch (`https://api.themoviedb.org/3/find/${buscador}?api_key=${apiKey}&language=en-US&external_source=imdb_id`)
    .then(function (response) {
        return response.json()
    })

    .then(function (results) {
        console.log (results);
      
        var listado = document.querySelector(".listado");
        var resultadoBusqueda = results.data;

        resultadoBusqueda.forEach(function(results) {
            listado.innerHTML +=
            `<li>
                <form class="buscador uk-search uk-search-default" action="buscador.html" method="get">
                    <a href='resultados.html?buscador="${results.id}">
                    <img src="${linkImagen} ${results.poster_path}" alt="">
                </form>
             </li>` 
        })
    })

    .catch(function (error){
        console.log('El error fue: '+error);
    })

})
