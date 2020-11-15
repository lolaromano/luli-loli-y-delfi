window.addEventListener('load',function(){

    var apiKey = '1dd189fc2111fcf3d905a59b0cd42a3c'

    
    fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(function (response) {
        return response.json()
    })
    .then(function (resultados) {
        console.log (resultados);

       var midiv = document.querySelector (".PeliculasMasRecientes");

        for (let index = 0; index < resultados.data; index++) {
            const element = resultados.data [index];

            midiv.innerHTML += `

           

            `
            
        }
                
    })
    .catch(function (error){
        console.log('El error fue: '+error);
    })

/*
    fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    .then(function (response) {
        return response.json()
    })
    .then(function (resultados) {
        console.log (resultados.data);
    })
    .catch(function (error){
        console.log('El error fue: '+error);
    })
    
 
    
    fetch (`https://api.themoviedb.org/3/tv/{tv_id}?api_key=${apiKey}&language=en-US`)
    .then(function (response) {
        return response.json()
    })
    .then(function (resultados) {
        console.log (resultados.data);
    })
    .catch(function (error){
        console.log('El error fue: '+error);
    })


    fetch (`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    .then(function (response) {
        return response.json()
    })
    .then(function (resultados) {
        console.log (resultados.data);
    })
    .catch(function (error){
        console.log('El error fue: '+error);
    })
    
    */
    
    
    
    
    })