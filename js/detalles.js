window.onload = function (){

    var apiKey = `1dd189fc2111fcf3d905a59b0cd42a3c`
    var linkImagen = `https://image.tmdb.org/t/p/w500`

    //con querystring obtengo el tipo y el id que recibi por parametro

    var queryString = location.search;

    var queryStringObj = new URLSearchParams(queryString);

    var id = queryStringObj.get("id");

    var tipo = queryStringObj.get("tipo");

    console.log(tipo);

    if (tipo= "serie") {
        contenidoSeries (id);

    } else if {
        contenidoPeliculas (id);

    } else {
        contenidoGeneros (id);
    }
    

    function contenidoSeries (id) {
        document.querySelector('.peliculas').style.display = "none";
        document.querySelector('.generos').style.display = "none";
    }

//DETALLES SERIES
    fetch(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${apiKey}&language=en-US`) 
        .then(function(response){
            return response.json();
        })

        .then(function(data){
            console.log(data);
            
            var Series = document.querySelector(".Series")
            
            Series.innerHTML += `
                <article class="uk-comment">
                <header class="uk-comment-header">
                    <div class="uk-grid-medium uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                            <img class="uk-comment-avatar" src="${linkImagen}" width="80" height="80" alt="">
                        </div>
                        <div class="uk-width-expand">
                            <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">${Series.title}</a></h4>
                            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                <li><a href="#">12 days ago</a></li>
                                <li><a href="#">Reply</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
                <div class="uk-comment-body">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
                </article>
            `

        })

        .catch(function (error){
            console.log('El error fue: '+error);
        })

    function contenidoPeliculas (id) {
        document.querySelector('.series').style.display = "none";
        document.querySelector('.generos').style.display = "none";
    }
    
//DETALLES PELICULAS
    fetch(`https://api.themoviedb.org/3/tv/{tv_id}?api_key=${apiKey}&language=en-US`) 
    //language=en-US&page=1&include_adult=false

        .then(function(response){
            return response.json();
        })

        .then(function(data){
            console.log(data);
          
        })

        .catch(function (error){
            console.log('El error fue: '+error);
        })

    ////////
    


    function contenidoGeneros (id) {
        document.querySelector('.series').style.display = "none";
        document.querySelector('.peliculas').style.display = "none";
    }


} //fin


//function armarContenidoTv(id) {


//estamos en una serie
//oculto el div de movies- muestro div de tv

//fetch al detalle de tv
//https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US

    
//}

//function armarContenidoMovies(id) {
    
//estamos en peliculas
//oculto el div de tv- muestro div de movies

//fetch al detalle de movie
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

//}