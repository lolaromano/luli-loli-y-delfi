window.addEventListener("load", function () {

    var apiKey = `1dd189fc2111fcf3d905a59b0cd42a3c`
    var linkImagen = `https://image.tmdb.org/t/p/w500`

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////


    var detalles = document.querySelector(`#DETALLES`)
    var reviews = document.querySelector(`#REVIEWS`)

    var queryString = location.search
    var queryStringObj = new URLSearchParams(queryString)
    var id = queryStringObj.get(`id`)
    var mediaType = queryStringObj.get(`media_type`) 
 

    console.log('la peli elegida es ' + id);

    if (mediaType == 'movie') {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data);

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
                        <button id="boton"><ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top" id="botonFavorito" name="${data.id}">
                            <li><a href="">Agregar a Mi Lista</a></li>
                        </ul></button>
                        <button id="eliminar"><ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top" id="botonFavorito" name="${data.id}">
                            <li><a href="">Eliminar de Mi Lista</a></li>
                        </ul></button>
                    
                    `
                var boton = document.querySelector("#boton")
                var botonEliminar = document.querySelector("#eliminar")

                if (window.localStorage.getItem("favoritos") === null) {

                } else {
                    var favsElegidas = JSON.parse(localStorage.getItem("favoritos")) //obtenemos favoritos

                    for (let i = 0; i < favsElegidas.length; i++) {
                        const element = favsElegidas[i];
                        if (element == data.id) {
                            boton.style.display = "none"
                            botonEliminar.style.display = "block"
                        }

                    }

                }

                boton.addEventListener("click", function () {
                    boton.style.display = "none"
                    botonEliminar.style.display = "block"

                    window.localStorage.setItem(`${data.id}`, JSON.stringify(data)) //en el locals guardamos la pelicula/serie entera
                    if (window.localStorage.getItem("favoritos") === null) {
                        var listaFavoritos = [data.id] //lista de un solo elemento 
                        window.localStorage.setItem("favoritos", JSON.stringify(listaFavoritos)) 
                    } else {
                        var favsElegidas = JSON.parse(localStorage.getItem("favoritos"))
                        favsElegidas.push(data.id)
                        window.localStorage.setItem("favoritos", JSON.stringify(favsElegidas)) //guardar la lista en favsElegidas, le agregue data.id y la volvi a guardar en local storage
                    }
                })

                botonEliminar.addEventListener("click", function () {
                    botonEliminar.style.display = "none"
                    boton.style.display = "block"

                    var eliminar = JSON.parse(localStorage.getItem("favoritos"))
                    for (let i = 0; i < eliminar.length; i++) {
                        const element = eliminar[i];
                        if (element == data.id) {
                            eliminar.splice(i, 1) //la posicion del id que estoy sacando es i, el 1 es porque quiero sacar solo 1 cantidad. corta desde aca, solo a partir de este elemento
                            window.localStorage.setItem("favoritos", JSON.stringify(eliminar)) //volvi a guardar la lista con 1 elemento menos
                            window.localStorage.removeItem (data.id) //
                        }


                    }
                    if (eliminar.length == 0) {
                        window.localStorage.removeItem ("favoritos")
                    }
                })
            })



            .catch(function (error) {
                console.log('El error fue: ' + error);

            })


        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data);

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

            .catch(function (error) {
                console.log('El error fue: ' + error);
            })

    }

    //////////////////////////////////////////SERIES/////////////////////////////////////////////////////////////
    else if (mediaType == 'tv') {

        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data);

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
                var boton = document.querySelector("#boton")
                boton.addEventListener("click", function () {
                    if (window.localStorage.getItem("favoritos") === null) {
                        var listaFavoritos = [data.id] //lista de un solo elemento
                        window.localStorage.setItem("favoritos", JSON.stringify(listaFavoritos))
                    } else {
                        var favsElegidas = JSON.parse(localStorage.getItem("favoritos"))
                        favsElegidas.push(data.id)
                        window.localStorage.setItem("favoritos", JSON.stringify(favsElegidas)) //guardar la lista en favsElegidas, le agregue data.od y la volvi a guaradar en local storage
                    }
                })

            })

            .catch(function (error) {
                console.log('El error fue: ' + error);
            })



        fetch(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${apiKey}&language=en-US`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data);

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

            .catch(function (error) {
                console.log('El error fue: ' + error);
            })

    }


}) //fin