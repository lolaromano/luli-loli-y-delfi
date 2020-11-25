window.addEventListener("load", function() {

    var apiKey = `1dd189fc2111fcf3d905a59b0cd42a3c`
    var linkImagen = `https://image.tmdb.org/t/p/w500`

/////////////////////////////////////////////////////////////////////////////////////////////////////

fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log (data);
      
      for (let index = 0; index < data.genres.length; index++) {
        const element = data.genres[index];
       
        var menugenerospeliculas = document.querySelector ("#menugeneros");

         menugeneros.innerHTML +=
          `<li><a href="generos.html?group=movies&idgenre=${element.id}">${element.name}</a></li>`
          console.log (element)
      };

                
    })
    .catch(function (error){
        console.log('El error fue: '+error);
    })


/////////////////////////////////////////////////////////////////////////////////////////////////////


fetch (`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        console.log (data);
      
      for (let index = 0; index < data.genres.length; index++) {
        const element = data.genres[index];
       
        var menugenerospeliculas = document.querySelector ("#menugeneros");

         menugeneros.innerHTML +=
          `<li><a href="generos.html?group=movies&idgenre=${element.id}">${element.name}</a></li>`
          console.log (element)
      };

    })

    .catch(function (error){
        console.log('El error fue: '+error);
    })

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

    var detalles = document.querySelector('#DETALLES')
    var reviews = document.querySelector('#REVIEWS')
    
    var queryString = location.search
    var queryStringObj = new URLSearchParams(queryString)
    var id = queryStringObj.get("id")

    var article = document.querySelector('.article')
    var stringTipo = queryStringObj.get('tipo')






if (stringTipo == "pelicula") {

    article.innerHTML = ''

        fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log (data);
            
                for (let index = 0; index < data.results.length; index++) {
                    const element = data.results[index];
                    
                    detalles.innerHTML += `
                        <div>
                            <article class="uk-comment">
                                <header class="uk-comment-header">
                                    <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                        <div class="uk-width-auto">
                                            <img class="uk-comment-avatar" src="${linkImagen}${element.poster_path}" width="80" height="80" alt="">
                                        </div>
                                        <div class="uk-width-expand">
                                            <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">${element.name}</a></h4>
                                            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                                <li><a href="#">${element.release_date}</a></li>
                                                <li><a href="#">${element.runtime}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </header>
                                <div class="uk-comment-body">
                                    <p>${element.overview}</p>
                                </div>
                            </article>
                        </div>
                    `
                }
            })
            .catch(function (error){
                console.log('El error fue: '+error);
            })




        fetch (`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log (data);
            
                for (let index = 0; index < data.results.length; index++) {
                    const element = data.results[index];
                    reviews.innerHTML += `
                        <div>
                            <article class="uk-comment">
                                <header class="uk-comment-header">
                                    <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                        <div class="uk-width-auto">
                                            <img class="uk-comment-avatar" src="${linkImagen}${element.poster_path}" width="80" height="80" alt="">
                                        </div>
                                        <div class="uk-width-expand">
                                            <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">${element.name}</a></h4>
                                            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                                <li><a href="#">${element.release_date}</a></li>
                                                <li><a href="#">${element.runtime}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </header>
                                <div class="uk-comment-body">
                                    <p>${element.overview}</p>
                                </div>
                            </article>
                        </div>
                    `
                }
            })

            .catch(function (error){
                console.log('El error fue: '+error);
            })

}

else if (stringTipo == "serie") {

    article.innerHTML = ''

        fetch (`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log (data);
        
            for (let index = 0; index < data.results.length; index++) {
                const element = data.results[index];
                detalles.innerHTML += `
                    <div>
                        <article class="uk-comment">
                            <header class="uk-comment-header">
                                <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                    <div class="uk-width-auto">
                                        <img class="uk-comment-avatar" src="${linkImagen}${element.poster_path}" width="80" height="80" alt="">
                                    </div>
                                    <div class="uk-width-expand">
                                        <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">${element.name}</a></h4>
                                        <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                            <li><a href="#">${element.release_date}</a></li>
                                            <li><a href="#">${element.runtime}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </header>
                            <div class="uk-comment-body">
                                <p>${element.overview}</p>
                            </div>
                        </article>
                    </div>
                `
            }
                
        })
        .catch(function (error){
            console.log('El error fue: '+error);
        })



        fetch (`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${apiKey}&language=en-US`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log (data);
        
            for (let index = 0; index < data.results.length; index++) {
                const element = data.results[index];

                reviews.innerHTML += `
                    <div>
                        <article class="uk-comment">
                            <header class="uk-comment-header">
                                <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                    <div class="uk-width-auto">
                                        <img class="uk-comment-avatar" src="${linkImagen}${element.poster_path}" width="80" height="80" alt="">
                                    </div>
                                    <div class="uk-width-expand">
                                        <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">${element.name}</a></h4>
                                        <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                            <li><a href="#">${element.release_date}</a></li>
                                            <li><a href="#">${element.runtime}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </header>
                            <div class="uk-comment-body">
                                <p>${element.overview}</p>
                            </div>
                        </article>
                    </div>
                `
            }
        })
        .catch(function (error){
            console.log('El error fue: '+error);
        })

}

}) 

//fin


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

////////////////////////////////




/*
//con querystring obtengo el tipo y el id que recibi por parametro

    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);

    var id = queryStringObj.get("id");
    var tipo = queryStringObj.get("tipo");

    console.log(tipo);

    if (tipo == "serie") {
        contenidoSeries (id);
    } 
    else if (tipo == "pelicula") {
        contenidoPeliculas (id);
    } 
    else {
        contenidoGeneros (id);
    }
    

    function contenidoSeries (id) {
        document.querySelector('.peliculas').style.display = "none";
        document.querySelector('.generos').style.display = "none";
    } 

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`) 
        .then(function(response){
            return response.json();
        })

        .then(function(data){
            console.log(data);
            
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                var series = document.querySelector("#series")
                    
                    series.innerHTML += `
                        <a href="detalles.html?idSerie=${element.id}"></a>
                            <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                <div class="uk-width-auto">
                                    <img class="uk-comment-avatar" src="${linkImagen}${element.poster_path}" width="80" height="80" alt="">
                                </div>
                                <div class="uk-width-expand">
                                    <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">${element.name}</a></h4>
                                    <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                        <li><a href="#">${element.release_date}</a></li>
                                        <li><a href="#">${element.runtime}</a></li>
                                    </ul>
                                </div>
                            </div>
                        <div class="uk-comment-body">
                            <p>${element.overview}</p>
                        </div>
                    `;
            }

        })

        .catch(function (error){
            console.log('El error fue: '+error);
        })

    
////////////////////////////////////// SERIES //////////////////////////////////////
   

//DETALLES SERIES

    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);
    var serieElegida = queryStringObj.get("idSerie");
    
    var series = document.querySelector("#series");
    series.innerHTML = "el show elegido es " + serieElegida

    console.log(queryString);



    fetch(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${apiKey}&language=en-US`) 
        .then(function(response){
            return response.json();
        })

        .then(function(data){
            console.log(data);
            
            

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
 */




/*
    var tituloCarousel = document.querySelector('.tituloscarousel')
    var generoTipo = queryStringObj.get('tipodegenero')
    var nombreGenero = queryStringObj.get('nombredelgenero')


else if (stringTipo == "genero") {

    if (generoTipo == "pelicula") {

    

            fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
                .then(function (response) {
                    return response.json()
                })

                .then(function (data) {
                    console.log (data);
                
                    tituloCarousel.innerHTML += `
                        <div class="tituloGeneros">
                            <h2>${nombreGenero}</h2>
                        </div>
                    `
                    for (let index = 0; index < 10; index++) {
                        var resultados = data.results[index];
                        
                        carousel.innerHTML +=
                            `  <article class="uk-comment">
                            <header class="uk-comment-header">
                                <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                    <div class="uk-width-auto">
                                        <img class="uk-comment-avatar" src="${linkImagen}${element.poster_path}" width="80" height="80" alt="">
                                    </div>
                                    <div class="uk-width-expand">
                                        <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">${element.name}</a></h4>
                                        <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                            <li><a href="#">${element.release_date}</a></li>
                                            <li><a href="#">${element.runtime}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </header>
                            <div class="uk-comment-body">
                                <p>${element.overview}</p>
                            </div>
                        </article>
                        </div>
                        `
                    }
                        
                })

                .catch(function (error){
                    console.log('El error fue: '+error);

                })
    }
      
    else if (generoTipo == "serie"){

        fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
            .then(function (response) {
                return response.json()
            })
            
            .then(function (data) {
                console.log (data);
            
                tituloCarousel.innerHTML += `
            
                `
                for (let index = 0; index < 10; index++) {
                    var resultados = data.results[index];
                    
                    carousel.innerHTML +=
                    `  <article class="uk-comment">
                    <header class="uk-comment-header">
                        <div class="uk-grid-medium uk-flex-middle" uk-grid>
                            <div class="uk-width-auto">
                                <img class="uk-comment-avatar" src="${linkImagen}${element.poster_path}" width="80" height="80" alt="">
                            </div>
                            <div class="uk-width-expand">
                                <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">${element.name}</a></h4>
                                <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                    <li><a href="#">${element.release_date}</a></li>
                                    <li><a href="#">${element.runtime}</a></li>
                                </ul>
                            </div>
                        </div>
                    </header>
                    <div class="uk-comment-body">
                        <p>${element.overview}</p>
                    </div>
                </article>
                </div>
                `
                }
                    
            })

            .catch(function (error){
                console.log('El error fue: '+error);
            })
        }
    }
    */