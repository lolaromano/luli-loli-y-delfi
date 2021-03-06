window.addEventListener("load", function() {

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
    var mediaType = queryStringObj.get (`media_type`)

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
                                                    <li><a href="#">${data.first_air_date}</a></li>
                                                    <li><a href="#">${data.genres.name}</a></li>
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



}) //fin
