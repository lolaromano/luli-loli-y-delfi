window.addEventListener('load',function(){
    
    var apiKey = `1dd189fc2111fcf3d905a59b0cd42a3c`

    var queryString = location.search;

    var queryStringObj = new URLSearchParams(queryString);

    var buscando = queryStringObj.get("buscando");

    var linkImagen = "https://image.tmdb.org/t/p/w500"

    console.log(buscando);

//PELICULAS

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&${buscando}`) 
    //language=en-US&page=1&include_adult=false
    
        .then(function(response){
            return response.json();
        })

        .then(function(data){
            console.log(data);
            
            var form = document.querySelector(".buscador");
            
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                buscador.innerHTML += 
                    `<li>
                        <form class="buscador uk-search uk-search-default" action="buscador.html" method="get">
                            <a href='detalles.html?idPelicula="${data.results}">
                            <img src="${linkImagen} ${element.poster_path}" alt="">
                        </form>
                    </li>`
            }
        })

        .catch(function (error){
            console.log('El error fue: '+error);
        })
});