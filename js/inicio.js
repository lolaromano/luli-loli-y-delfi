window.addEventListener('load',function(){

    var apiKey = '1dd189fc2111fcf3d905a59b0cd42a3c'
    var linkImagen = "https://image.tmdb.org/t/p/w500"



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

var queryString = location.search;
var queryStringObj = new URLSearchParams(queryString);

var id = queryStringObj.get("id");


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
                                    <a href="detalles.html?id=${element.id}&media_type=movie">
                                        <img src="${linkImagen}${element.poster_path}" alt="">
                                    </a>
                                    <div class="uk-position-center uk-panel"><h1></h1></div>                        
                                    <div class="rectangulo uk-overlay uk-overlay-primary uk-position-bottom">
                                        <div class="inicio uk-width-expand">                            
                                            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">                                
                                                <li><a href="#">${element.release_date}</a></li>                                                             
                                                <li><a href="#">${element.original_language}</a></li>                            
                                            </ul>  
                                        </div>                      
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
                                <a href="detalles.html?id=${element.id}&media_type=movie">
                                    <img src="${linkImagen}${element.poster_path}" alt="">
                                </a> 
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
                                    <a href="detalles.html?id=${element.id}&media_type=movie">
                                        <img src="${linkImagen}${element.poster_path}" alt="">
                                    </a>    
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
                                <a href="detalles.html?id=${element.id}&media_type=tv">
                                    <img src="${linkImagen}${element.poster_path}" alt="">
                                </a>
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
                            <a href="detalles.html?id=${element.id}&media_type=tv">
                                <img src="${linkImagen}${element.poster_path}" alt="">
                            </a>
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


