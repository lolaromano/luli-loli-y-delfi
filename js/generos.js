window.addEventListener('load',function(){
    var apiKey = '1dd189fc2111fcf3d905a59b0cd42a3c'
    var linkImagen = "https://image.tmdb.org/t/p/w500"

//////////////////////////////////////////////MOVIES////////////////////////////////////////////////////////////////

//////////////////////////////////////////////ACTION////////////////////////////////////////////////////////////////

    fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log (data);

        var accion = document.querySelector ("ul.accion");

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results [index];
                
                accion.innerHTML += `
                    <li>
                        <div class="uk-child-width-1-2@m" uk-grid>
                            <div class="uk-inline">
                                <div class="uk-panel"> 
                                    <img src="${linkImagen}${element.poster_path}" alt="">
                                    <div class="uk-position-center uk-panel"><h1></h1></div>
                                </div>
                        </div>
                    </li>
                `;

                console.log(linkImagen + element.poster_path);

            }
                    
        })
        .catch(function (error){
            console.log('El error fue: '+error);
        })
    
//////////////////////////////////////////////COMEDIA////////////////////////////////////////////////////////////////

fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log (data);

        var comedia = document.querySelector ("ul.comedia");

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results [index];
                
                comedia.innerHTML += `
                    <li>
                        <div class="uk-child-width-1-2@m" uk-grid>
                            <div class="uk-inline">
                                <div class="uk-panel"> 
                                    <img src="${linkImagen}${element.poster_path}" alt="">
                                    <div class="uk-position-center uk-panel"><h1></h1></div>
                                </div>
                        </div>
                    </li>
                `;

                console.log(linkImagen + element.poster_path);

            }
                    
        })
        .catch(function (error){
            console.log('El error fue: '+error);
        })

//////////////////////////////////////////////DRAMA////////////////////////////////////////////////////////////////

fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log (data);

        var drama = document.querySelector ("ul.drama");

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results [index];
                
                drama.innerHTML += `
                    <li>
                        <div class="uk-child-width-1-2@m" uk-grid>
                            <div class="uk-inline">
                                <div class="uk-panel"> 
                                    <img src="${linkImagen}${element.poster_path}" alt="">
                                    <div class="uk-position-center uk-panel"><h1></h1></div>
                                </div>
                        </div>
                    </li>
                `;

                console.log(linkImagen + element.poster_path);

            }
                    
        })
        .catch(function (error){
            console.log('El error fue: '+error);
        })

//////////////////////////////////////////////MISTERIO////////////////////////////////////////////////////////////////

fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log (data);

        var misterio = document.querySelector ("ul.misterio");

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results [index];
                
                misterio.innerHTML += `
                    <li>
                        <div class="uk-child-width-1-2@m" uk-grid>
                            <div class="uk-inline">
                                <div class="uk-panel"> 
                                    <img src="${linkImagen}${element.poster_path}" alt="">
                                    <div class="uk-position-center uk-panel"><h1></h1></div>
                                </div>
                        </div>
                    </li>
                `;

                console.log(linkImagen + element.poster_path);

            }
                    
        })
        .catch(function (error){
            console.log('El error fue: '+error);
        })

//////////////////////////////////////////////ROMANCE////////////////////////////////////////////////////////////////

fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log (data);

        var romance = document.querySelector ("ul.romance");

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results [index];
                
                romance.innerHTML += `
                    <li>
                        <div class="uk-child-width-1-2@m" uk-grid>
                            <div class="uk-inline">
                                <div class="uk-panel"> 
                                    <img src="${linkImagen}${element.poster_path}" alt="">
                                    <div class="uk-position-center uk-panel"><h1></h1></div>
                                </div>
                        </div>
                    </li>
                `;

                console.log(linkImagen + element.poster_path);

            }
                    
        })
        .catch(function (error){
            console.log('El error fue: '+error);
        })


    
}) //fin

        
    