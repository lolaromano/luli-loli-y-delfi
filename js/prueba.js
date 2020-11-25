window.addEventListener('load',function() {

    var apiKey = '1dd189fc2111fcf3d905a59b0cd42a3c';
    var linkImagen = "https://image.tmdb.org/t/p/w500";

    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);
    var loQueEstoyBuscando = queryStringObj.get("q");


    fetch (`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${loQueEstoyBuscando}&page=1&include_adult=false`)
        .then(function (response) {
            return response.json();
        })

        .then(function (information) {
            console.log (information);

            var gifs = document.querySelector("#gifs");

            for (let i = 0; i < information.data.length; i++) {
                const element = information.data[i];
               
                gifs.innerHTML +=
                `<img src="${linkImagen}${element.poster_path}" alt="">
                `
            }

            /*for (let i = 0; i < information.data.length; i++) {
                const element = information.data[i];
                
                busqueda.innerHTML += `
                    <a href="detalle.html?id=${element.id}">
                        <h2>${element.title}</h2>
                    </a>
                    <img src="${element.images.original.url}" alt="">
                `
            }*/

        })

        .catch(function (error){
            console.log('El error fue: '+error);
            
        })
    
}) //fin