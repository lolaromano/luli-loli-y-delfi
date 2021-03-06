window.addEventListener("load", function() {

    var apiKey = `1dd189fc2111fcf3d905a59b0cd42a3c`
    var linkImagen = `https://image.tmdb.org/t/p/w500`

    
    var queryString = location.search
    var queryStringObj = new URLSearchParams(queryString)
    var id = queryStringObj.get(`idgenre`)
    var mediaType = queryStringObj.get (`media_type`)
    var generosPelis = document.querySelector(`#generosPelis`)
    var titulos3 = document.querySelector(`.titulos3`)
    var tituloGenero = 0;

    if (mediaType == 'movie'){

        fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`)
        .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log (data);
                

                for (let index = 0; index < data.results.length; index++) {
                    const element = data.results[index];
                
                    generosPelis.innerHTML += 

                    ` 
                    <li>
                    <div class="uk-child-width-1-2@m" uk-grid>
                        <div class="uk-inline">
                            <div class="uk-panel"> 
                            <a href="detalles.html?id=${element.id}&media_type=movie">
                                <img src="${linkImagen}${element.poster_path}" alt="">
                            </a> 
                            <div class="uk-position-center uk-panel"><h1></h1></div>
                        </div>
                    </div>
                    </li>
                    `
                }
            })

            .catch(function (error){
                console.log('El error fue: '+error);
            })
        
        fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log (data);
                
                for (let index = 0; index < data.genres.length; index++) {
                    const element = data.genres[index];
                    if (element.id == id) {
                        tituloGenero = element.name;
                    }
                }

                titulos3.innerHTML += `${tituloGenero}`

            })
            
            .catch(function (error){
                console.log('El error fue: '+error);
            })
        

    } else {
        fetch (`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false`)
        .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log (data);
                

                for (let index = 0; index < data.results.length; index++) {
                    const element = data.results[index];
                
                    generosPelis.innerHTML += 

                    ` 
                    <li>
                    <div class="uk-child-width-1-2@m" uk-grid>
                        <div class="uk-inline">
                            <div class="uk-panel"> 
                            <a href="detalles.html?id=${element.id}&media_type=movie">
                                <img src="${linkImagen}${element.poster_path}" alt="">
                            </a> 
                            <div class="uk-position-center uk-panel"><h1></h1></div>
                        </div>
                    </div>
                    </li>
                    `
                }
            })

            .catch(function (error){
                console.log('El error fue: '+error);
            })
        

        fetch (`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`)
            .then(function (response) {
                    return response.json()
                })
            .then(function (data) {
                console.log (data);
                
                for (let index = 0; index < data.genres.length; index++) {
                    const element = data.genres[index];
                    if (element.id == id) {
                        tituloGenero = element.name;
                    }
                }

                titulos3.innerHTML += `${tituloGenero}`

            })
            
            .catch(function (error){
                console.log('El error fue: '+error);
            })
    }

}) //fin

/*



    var id = queryStringObj.get(`id`)
    var mediaType = queryStringObj.get (`media_type`)

    var genreSeries = document.querySelector(`#genrePelis`)
    var genreSeries = document.querySelector(`#genreSeries`)

/////////////////////////////////////////////////////////////////////////////////////////////////////////


    var generoElegido = document.querySelector(`tipodegenero`)
    var nombreGenero = queryStringObj.get(`nombredelgenero`)

    if (generoElegido == 'movie'){

        fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=genre`)
        .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log (data);
                
                genrePelis.innerHTML += `<h2>${element.name}</h2>`

                

                   ` <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
                        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
                            <li>
                                <div class="uk-child-width-1-2@m" uk-grid>
                                    <div class="uk-inline">
                                        <div class="uk-panel"> 
                                        <a href="generosDetail.html?id=${element.id}&media_type=movie">
                                            <img src="${linkImagen}${element.poster_path}" alt="">
                                        </a> 
                                    </div>
                                </div>
                                </li>
                        </ul>
                        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
                    </div>
                    `




                var arrayGenerosPelis = data.genres
                console.log(arrayGenerosPelis);

                for (let index = 0; index < data.length; index++) {
                    const element = data[index];
                    genrePelis.innerHTML += `<h2>${element.name}</h2>`
                }

                arrayGenerosPelis.forEach(element => {

                    
                });

            })

            .catch(function (error){
                console.log('El error fue: '+error);

            })

    }
    
//////////////////////////////////////////SERIES/////////////////////////////////////////////////////////////
    else if (mediaType == 'tv') {

        fetch (`https://api.themoviedb.org/3/tv/${id}?api_key=1dd189fc2111fcf3d905a59b0cd42a3c&language=en-US`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log (data);
                            
            genreSeries.innerHTML += `
                <h2>${element.name}</h2>
                <li>
                <div class="uk-child-width-1-2@m" uk-grid>
                    <div class="uk-inline">
                        <div class="uk-panel"> 
                        <a href="generosDetail.html?id=${element.id}&media_type=tv">
                            <img src="${linkImagen}${element.poster_path}" alt="">
                        </a> 
                    </div>
                </div>
                </li>
                `
        })

        .catch(function (error){
            console.log('El error fue: '+error);

        })
    
    }
*/