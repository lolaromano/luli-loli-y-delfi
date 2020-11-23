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


/////////////////////////////////////////////////////////////////////////////

    fetch (`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log (data);
      
      for (let index = 0; index < data.genres.length; index++) {
        const element = data.genres[index];
       
        var menugenerosseries = document.querySelector ("#menugeneros");

         menugeneros.innerHTML +=
          `<li><a href="generos.html?group=movies&idgenre=${element.id}">${element.name}</a></li>`
  
      };

                
    })
    .catch(function (error){
        console.log('El error fue: '+error);
    })
    
    
})

        
        