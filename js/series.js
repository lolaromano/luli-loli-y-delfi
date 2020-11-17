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
                <div class="uk-panel"> 
                        <img src="${linkImagen}${element.poster_path}" alt="">
                        <div class="uk-position-center uk-panel"><h1></h1></div>
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
                <div class="uk-panel"> 
                        <img src="${linkImagen}${element.poster_path}" alt="">
                        <div class="uk-position-center uk-panel"><h1></h1></div>
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
                <div class="uk-panel"> 
                        <img src="${linkImagen}${element.poster_path}" alt="">
                        <div class="uk-position-center uk-panel"><h1></h1></div>
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
                <div class="uk-panel"> 
                        <img src="${linkImagen}${element.poster_path}" alt="">
                        <div class="uk-position-center uk-panel"><h1></h1></div>
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