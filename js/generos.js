window.addEventListener('load',function(){
    var apiKey = '1dd189fc2111fcf3d905a59b0cd42a3c'
        
    fetch (`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    .then(function (response) {
        return response.json()
    })
    .then(function (Genero) {
        console.log (Genero);
 
        var Accion = document.querySelector (".accion")

          switch (element.id) {
            case 'Accion': 
              if (Accion == true) {
                `<li>
                  <div class="uk-panel"> 
                    <img src="${linkImagen}${element.poster_path}" alt="">
                    <div class="uk-position-center uk-panel"><h1></h1></div>
                  </div>
                </li>
              `
              } 
              break;
          
            default:
              break;
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

        
        