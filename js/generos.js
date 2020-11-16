window.addEventListener('load',function(){

    var apiKey = '1dd189fc2111fcf3d905a59b0cd42a3c'

    
    fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}}&language=en-US`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log (data);

        var midiv = document.querySelector (".PeliculasMasRecientes");

        for (let index = 0; index < data.results; index++) {
            const element = data.results [index]; 

            midiv.innerHTML += `

                <div>
                    <h2 class="titulos"></h2>  
                    <article class="PeliculasDeAccion">
                            <img src="${element.poster_path}" alt="${element.title}">
                            <p>${element.overview}</p>
                    </article>
                </div>
            `
        }
                
    })
    .catch(function (error){
        console.log('El error fue: '+error);
    })


    
    
    
    
    })