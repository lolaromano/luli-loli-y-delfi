window.addEventListener('load',function(){

    var apiKey = '1dd189fc2111fcf3d905a59b0cd42a3c'
    var linkImagen = "https://image.tmdb.org/t/p/w500"

    console.log (linkImagen);
    
        fetch (`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=en-US&page=1`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log (data);

        var ul = document.querySelector ("ul.PopularesEniChill");

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results [index];
                
                ul.innerHTML += `
                <li>
                    <div class="uk-child-width-1-2@m" uk-grid>
                        <div class="uk-inline">
                            <div class="uk-panel"> 
                            <a href="detalles.html?id=${element.id}&media_type=movie">
                                <img src="${linkImagen}${element.poster_path}" alt="">
                            </a> 
                            <div class="uk-position-center uk-panel"><h1></h1></div>
                                <div class="rectangulo uk-overlay uk-overlay-primary uk-position-bottom">
                                    <div class="uk-width-expand">                            
                                        <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">                                
                                            <li><a href="#">RANKING = ${element.vote_average}</a></li>                                                             
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

    fetch (`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log (data);

        var ul = document.querySelector ("ul.Tendencias");

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results [index];
                
                ul.innerHTML += `
                <li>
                <div class="uk-child-width-1-2@m" uk-grid>
                    <div class="uk-inline">
                        <div class="uk-panel"> 
                        <a href="detalles.html?id=${element.id}&media_type=movie">
                            <img src="${linkImagen}${element.poster_path}" alt="">
                        </a> 
                        <div class="uk-position-center uk-panel"><h1></h1></div>
                            <div class="rectangulo uk-overlay uk-overlay-primary uk-position-bottom">
                                <div class="uk-width-expand">                            
                                    <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">                                
                                        <li><a href="#">RANKING = ${element.vote_average}</a></li>                                                             
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

        var ul = document.querySelector ("ul.NuevosLanzamientos");

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results [index];
                
                ul.innerHTML += `
                <li>
                <div class="uk-child-width-1-2@m" uk-grid>
                    <div class="uk-inline">
                        <div class="uk-panel"> 
                        <a href="detalles.html?id=${element.id}&media_type=movie">
                            <img src="${linkImagen}${element.poster_path}" alt="">
                        </a> 
                        <div class="uk-position-center uk-panel"><h1></h1></div>
                            <div class="rectangulo uk-overlay uk-overlay-primary uk-position-bottom">
                                <div class="uk-width-expand">                            
                                    <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">                                
                                        <li><a href="#">RANKING = ${element.vote_average}</a></li>                                                             
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

        var ul = document.querySelector ("ul.Documentales");

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results [index];
                
                ul.innerHTML += `
                <li>
                    <div class="uk-child-width-1-2@m" uk-grid>
                        <div class="uk-inline">
                            <div class="uk-panel"> 
                            <a href="detalles.html?id=${element.id}&media_type=movie">
                                <img src="${linkImagen}${element.poster_path}" alt="">
                            </a> 
                            <div class="uk-position-center uk-panel"><h1></h1></div>
                                <div class="rectangulo uk-overlay uk-overlay-primary uk-position-bottom">
                                    <div class="uk-width-expand">                            
                                        <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">                                
                                            <li><a href="#">RANKING = ${element.vote_average}</a></li>                                                             
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