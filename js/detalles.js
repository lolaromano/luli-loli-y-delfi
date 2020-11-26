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

            menugenerospeliculas.innerHTML +=
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

            menugenerospeliculas.innerHTML +=
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
   
var removeFavorite = document.querySelector('#removeFavorite')
var addFavorite = document.querySelector('#addFavorite')

var favs;
        if (favs == null) {
                favs = [];    
        
        } else {
            favs = JSON.parse(localStorage.getItem("favoritos"))
        }

for (let index = 0; index < favs.length; index++) {
    const element = favs[index];
    if (preferidas.some(peli=>peli.id===idElegido)) {
        removeFavorite.style.display = 'block';
        addFavorite.style.display = 'none';
     
            
        } else{
        removeFavorite.style.display = 'none';
        addFavorite.style.display = 'block';

        }
    
}
var arrayFavs;
        if (favs == null) {
                arrayFavs = [];    
        
        } else {
            arrayFavs = JSON.parse(localStorage.getItem("favoritos"))
        }
addFavorite.addEventListener("click", function () {
        
        console.log('apretaste el boton de favoritos');

        removeFavorite.style.display = 'block';
        addFavorite.style.display = 'none';
       
        

        arrayFavs.push({
            tipo: tipo,
            id: idElegido
        });

        localStorage.setItem("favoritos", JSON.stringify(arrayFavs))
})



removeFavorite.addEventListener('click', function (){
    removeFavorite.style.display = 'none';
    addFavorite.style.display = 'block';
    var favs = JSON.parse(localStorage.getItem("favoritos"))
    for (let i = 0; i < favs.length; i++) {
        const element = favs[i];
        if ((element.id == idElegido)&&(element.tipo == tipo)){
            alert('asjdask')
            console.log(`esta es la que hay que borrar ${element.id} con tipo ${element.tipo}`)
            favs.splice(i,1);
            localStorage.setItem("favoritos", JSON.stringify(favs))
        }
        
    }
})


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

    
    var detalles = document.querySelector(`#DETALLES`)
    var reviews = document.querySelector(`#REVIEWS`)
    
    var queryString = location.search
    var queryStringObj = new URLSearchParams(queryString)
    var id = queryStringObj.get(`id`)
    var mediaType = queryStringObj.get (`media_type`)

    console.log('la peli elegida es '+ id);

    if (mediaType == 'movie'){

        fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log (data);
                                
                    detalles.innerHTML += `
                        <div>
                            <article class="uk-comment" id="bajar1">
                                <header class="uk-comment-header">
                                    <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                        <div class="uk-width-auto">
                                            <img class="uk-comment-avatar" src="${linkImagen}${data.poster_path}" width="80" height="80" alt="">
                                        </div>
                                        <div class="uk-width-expand">
                                            <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#" id= "tituloReviews">${data.original_title}</a></h4>
                                            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                                <li><a href="#">${data.release_date}</a></li>
                                                <li><a href="#">${data.runtime}m</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </header>
                                <div class="uk-comment-body">
                                    <p>${data.overview}</p>
                                </div>
                            </article>
                        </div>
                        <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top" id="botonFavorito" name="${data.id}">
                            <li><a href="#">Agregar a Mi Lista</a><a href="" class="uk-icon-button" uk-icon="plus-circle"></a></li>
                        </ul>
                    `
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
            
                for (let i = 0; i < data.results.length; i++) {
                    const element = data.results[i];
                    
                    reviews.innerHTML += `
                        <header class="uk-comment-header">
                            <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                <div class="uk-width-expand">
                                    <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#" id="tituloReviews">Reviews</a></h4>
                                    <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                        <li><a href="#">${element.author}</a></li>
                                        <li><a href="#">RATING = ${element.author_details.rating}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </header>
                        <div class="uk-comment-body">
                            <p id="parrafoReviews" >${element.content}</p>
                        </div>
                    `
                }

            })

            .catch(function (error){
                console.log('El error fue: '+error);
            })

    }
    
//////////////////////////////////////////SERIES/////////////////////////////////////////////////////////////
    else if (mediaType == 'tv') {

            fetch (`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    console.log (data);
    
                            detalles.innerHTML += `
                                <div>
                                    <article class="uk-comment">
                                        <header class="uk-comment-header">
                                            <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                                <div class="uk-width-auto">
                                                    <img class="uk-comment-avatar" src="${linkImagen}${data.poster_path}" width="80" height="80" alt="">
                                                </div>
                                                <div class="uk-width-expand">
                                                    <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">${data.original_name}</a></h4>
                                                    <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                                        <li><a href="#">${data.release_date}</a></li>
                                                        <li><a href="#">${data.number_of_seasons}</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </header>
                                        <div class="uk-comment-body">
                                            <p>${data.overview}</p>
                                        </div>
                                    </article>
                                </div>
                                <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top" id="botonFavorito" name="${data.id}">
                                    <li><a href="#">Agregar a Mi Lista</a><a href="" class="uk-icon-button" uk-icon="plus-circle"></a></li>
                                 </ul>
                            `   
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
                
                    for (let i = 0; i < data.results.length; i++) {
                        const element = data.results[i];
                            
                            reviews.innerHTML += `
                                <header class="uk-comment-header">
                                    <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                        <div class="uk-width-expand">
                                            <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#" id="tituloReviews">Reviews</a></h4>
                                            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                                <li><a href="#">${element.author}</a></li>
                                                <li><a href="#">RATING = ${element.author_details.rating}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </header>
                                <div class="uk-comment-body">
                                    <p id="parrafoReviews" >${element.content}</p>
                                </div>
                        `
                    }
                })
    
                .catch(function (error){
                    console.log('El error fue: '+error);
                })
    
    }


}) //fin


/*
var share = document.querySelector('#share')
    share.addEventListener("click", function () {
        alert(apretaste share)
    })
*/

/*
var arrayFavs = JSON.parse(localStorage.getItem("favoritos"))
if (arrayFavs == null) {
    
} else if (arrayFavs.indexOf(id) === -1 ){

} else {
    document.querySelector("#botonFavorito").style.backgroundColor = "gold"
}

var boton = document.getElementById("#botonFavorito")

boton.addEventListener("click",function(){

    if (arrayFavs == null) {
        arrayFavs = [];
        arrayFavs.push(boton)
        localStorage.setItem("favoritos", JSON.stringify(arrayFavs))

      }else if(arrayFavs.indexOf(boton) === -1){

        arrayFavs.push(boton)
        localStorage.setItem("favoritos", JSON.stringify(arrayFavs))
        document.querySelector("#botonFavorito").style.backgroundColor = "gold"

      }
        else {
        console.log(arrayFavs.indexOf(boton));
        arrayFavs.splice(arrayFavs.indexOf(boton),1);
        console.log(arrayFavs)
        localStorage.setItem("favoritos", JSON.stringify(arrayFavs))
        document.querySelector("#botonFavorito").style.backgroundColor = "white"
      }

      console.log(boton);
      console.log(JSON.parse(localStorage.getItem("favoritos")));

    })
*/




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