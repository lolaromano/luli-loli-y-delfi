window.addEventListener('load',function(){

    var apiKey = 'a7861c4f6175fa7e9d7361d67809cb5a'

    fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        //FALTA LLENAR ACA
    })
    .catch(function (error){
        console.log('El error fue: '+error);
    })
    
    
    
    
    
    
    })