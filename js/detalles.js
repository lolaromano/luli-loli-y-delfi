window.onload = function (){

    var apiKey = `1dd189fc2111fcf3d905a59b0cd42a3c`
    var linkImagen = `https://image.tmdb.org/t/p/w500`

    //con querystring obtengo el tipo y el id que recibi por parametro

    var queryString = location.search;

    var queryStringObj = new URLSearchParams(queryString);

    var id = queryStringObj.get("id");

    var tipo = queryStringObj.get("tipo");

//DETALLES PELICULAS
    fetch(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${apiKey}&language=en-US`) 
        .then(function(response){
            return response.json();
        })

        .then(function(data){
            console.log(data);
                if (tipo == "movies") {
                    armarContenidoMovies (id);
                
                    var miDiv = document.querySelector(".movies")
                    miDiv.innerHTML += `
                        <div class="uk-width-auto">
                            <img class="uk-comment-avatar" src="${linkImagen}" width="80" height="80" alt="">
                        </div>

                        <div class="uk-width-expand">
                            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                <li><a href="#">${element.release_date}</a></li>
                                <li><a href="#">${element.adult}</a></li>
                                <li><a href="#">${element.popularity}</a></li>
                            </ul>
                        </div>

                        <div class="uk-comment-body">
                            <p>${element.overview}</p>
                        </div>
                        <ul class="uk-list uk-list-divider">
                            <li>${element.tagline}</li>
                            <li>${element.genres.id}${element.genres.name}</li>
                        </ul>
                    `

                }else{
                    armarContenidoTv (id);
                }
        })

        .catch(function (error){
            console.log('El error fue: '+error);
        })

//DETALLES SERIES
    fetch(`//https://api.themoviedb.org/3/tv/{tv_id}?api_key=${apiKey}&language=en-US`) 
    //language=en-US&page=1&include_adult=false

        .then(function(response){
            return response.json();
        })

        .then(function(data){
            console.log(data);
            if (tipo == "tv") {
                armarContenidoMovies (id);

                var miDiv = document.querySelector(".tv")
                miDiv.innerHTML += `${element.title}`
            
            }else{
                armarContenidoTv (id);
            }
        })

        .catch(function (error){
            console.log('El error fue: '+error);
        })

    ////////
    









} //fin


function armarContenidoTv(id) {


//estamos en una serie
//oculto el div de movies- muestro div de tv

//fetch al detalle de tv
//https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US

    
}

function armarContenidoMovies(id) {
    
//estamos en peliculas
//oculto el div de tv- muestro div de movies

//fetch al detalle de movie
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

}