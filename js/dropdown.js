window.addEventListener('load',function(){

    var apiKey = '1dd189fc2111fcf3d905a59b0cd42a3c'


    fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log (data);
      
      for (let index = 0; index < data.genres.length; index++) {
        const element = data.genres[index];
       
        var menugenerosPelis = document.querySelector (".menugenerosPelis");

         menugenerosPelis.innerHTML +=
         `<li><a href="generosDetail.html?group=movies&idgenre=${element.id}&media_type=movie">${element.name}</a></li>`
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
       
        var menugenerosSeries = document.querySelector (".menugenerosSeries");

         menugenerosSeries.innerHTML +=
         `<li><a href="generosDetail.html?group=tv&idgenre=${element.id}&media_type=tv">${element.name}</a></li>`
          console.log (element)
      };

                
    })
    .catch(function (error){
        console.log('El error fue: '+error);
    })

})