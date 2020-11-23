window.addEventListener('load',function(){

    var apiKey = '1dd189fc2111fcf3d905a59b0cd42a3c'
    var linkImagen = "https://image.tmdb.org/t/p/w500"

    fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key${apiKey}&language=en-US`)
        .then(function (response) {
            return response.json()
        })
        .then (function (data) {
            console.log(data);
            var generos = document.querySelector(".generos");

            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                
                generos.innerHTML +=
                `<ul class="uk-nav uk-navbar-dropdown-nav">
                    <li class="uk-active"><a href="#">${element.name}</a></li>
                </ul>`
            }
        })
        .catch(function (error){
        console.log('El error fue: '+error);
    })

    `<ul class="uk-nav uk-navbar-dropdown-nav">
        <li class="uk-active"><a href="#">${element.name}</a></li>
    </ul>`


/////////////////////////////////////////////////////////////////////////////////////////////////////

    fetch (`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log (data);

        var ul = document.querySelector ("ul.PeliculasMasRecientes");

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results [index];
                
                ul.innerHTML += `
                    <li>
                        <div class="uk-child-width-1-2@m" uk-grid>
                            <div class="uk-inline">
                                <div class="uk-panel"> 
                                    <img src="${linkImagen}${element.poster_path}" alt="">
                                    <div class="uk-position-center uk-panel"><h1></h1></div>
                                    <div class="uk-overlay uk-overlay-primary uk-position-bottom">
                                        <div class="uk-width-expand">                            
                                            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">                                
                                                <li><a href="#">${element.release_date}</a></li>                                                             
                                                <li><a href="#">${element.original_language}</a></li>                            
                                            </ul>  
                                        </div>                      
                                </div>
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


/////////////////////////////////////////////////////////////////////////////////////////////////////

    fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log (data);

        var ul = document.querySelector ("ul.PeliculasMasVistas");

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results [index];
                
                ul.innerHTML += `
                    <li>
                        <div class="uk-child-width-1-2@m" uk-grid>
                            <div class="uk-inline">
                                <div class="uk-panel"> 
                                    <img src="${linkImagen}${element.poster_path}" alt="">
                                    <div class="uk-position-center uk-panel"><h1></h1></div>
                                    <div class="uk-overlay uk-overlay-primary uk-position-bottom">
                                        <div class="uk-width-expand">                            
                                            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">                                
                                                <li><a href="#">${element.release_date}</a></li>                                                             
                                                <li><a href="#">${element.original_language}</a></li>                            
                                            </ul>  
                                        </div>                      
                                </div>
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


/////////////////////////////////////////////////////////////////////////////////////////////////////

    fetch (`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log (data);

        var ul = document.querySelector ("ul.SeriesMasRecientes");

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results [index];
                
                ul.innerHTML += `
                    <li>
                        <div class="uk-child-width-1-2@m" uk-grid>
                            <div class="uk-inline">
                                <div class="uk-panel"> 
                                    <img src="${linkImagen}${element.poster_path}" alt="">
                                    <div class="uk-position-center uk-panel"><h1></h1></div>
                                    <div class="uk-overlay uk-overlay-primary uk-position-bottom">
                                        <div class="uk-width-expand">                            
                                            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">                                
                                                <li><a href="#">${element.first_air_date}</a></li>                                                             
                                                <li><a href="#">${element.original_language}</a></li>                            
                                            </ul>  
                                        </div>                      
                                </div>
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
    

/////////////////////////////////////////////////////////////////////////////////////////////////////

    fetch (`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log (data);

        var ul = document.querySelector ("ul.SeriesMasVistas");

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results [index];
                
                ul.innerHTML += `
                    <li>
                        <div class="uk-child-width-1-2@m" uk-grid>
                            <div class="uk-inline">
                                <div class="uk-panel"> 
                                    <img src="${linkImagen}${element.poster_path}" alt="">
                                    <div class="uk-position-center uk-panel"><h1></h1></div>
                                    <div class="uk-overlay uk-overlay-primary uk-position-bottom">
                                        <div class="uk-width-expand">                            
                                            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">                                
                                                <li><a href="#">${element.first_air_date}</a></li>                                                             
                                                <li><a href="#">${element.original_language}</a></li>                            
                                            </ul>  
                                        </div>                      
                                </div>
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

        
/////////////////////////////////////////////////////////////////////////////////////////////////////

    fetch (`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log (data);

    var ul = document.querySelector ("ul.SeriesMasVistas");

        for (let index = 0; index < data.results.length; index++) {
            const element = data.results [index];
            
            ul.innerHTML += `
                <li>
                    <div class="uk-child-width-1-2@m" uk-grid>
                        <div class="uk-inline">
                            <div class="uk-panel"> 
                                <img src="${linkImagen}${element.poster_path}" alt="">
                                <div class="uk-position-center uk-panel"><h1></h1></div>
                                <div class="uk-overlay uk-overlay-primary uk-position-bottom">
                                    <div class="uk-width-expand">                            
                                        <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">                                
                                            <li><a href="#">${element.release_date}</a></li>                                                             
                                            <li><a href="#">${element.original_language}</a></li>                            
                                        </ul>  
                                    </div>                      
                            </div>
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

    
    
    
    })


