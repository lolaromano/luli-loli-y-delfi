window.addEventListener('load',function(){
    var apiKey = '1dd189fc2111fcf3d905a59b0cd42a3c'

    var genres = [
          {
            "id": 28,
            "name": "Action"
          },
          {
            "id": 12,
            "name": "Adventure"
          },
          {
            "id": 16,
            "name": "Animation"
          },
          {
            "id": 35,
            "name": "Comedy"
          },
          {
            "id": 80,
            "name": "Crime"
          },
          {
            "id": 99,
            "name": "Documentary"
          },
          {
            "id": 18,
            "name": "Drama"
          },
          {
            "id": 10751,
            "name": "Family"
          },
          {
            "id": 14,
            "name": "Fantasy"
          },
          {
            "id": 36,
            "name": "History"
          },
          {
            "id": 27,
            "name": "Horror"
          },
          {
            "id": 10402,
            "name": "Music"
          },
          {
            "id": 9648,
            "name": "Mystery"
          },
          {
            "id": 10749,
            "name": "Romance"
          },
          {
            "id": 878,
            "name": "Science Fiction"
          },
          {
            "id": 10770,
            "name": "TV Movie"
          },
          {
            "id": 53,
            "name": "Thriller"
          },
          {
            "id": 10752,
            "name": "War"
          },
          {
            "id": 37,
            "name": "Western"
          }
        ]        
        
    fetch (`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    .then(function (response) {
        return response.json()
    })
    .then(function (Genero) {
        console.log (Genero);
 
        var Accion = document.querySelector (".accion")

        if (Accion == null) {
            
        } else {
            
        }
        `<li>
            <div class="uk-panel"> 
                <img src="${linkImagen}${element.poster_path}" alt="">
                <div class="uk-position-center uk-panel"><h1></h1></div>
            </div>
        </li>
        `

                
    })
    .catch(function (error){
        console.log('El error fue: '+error);
    })

    
    
    
})

        
        