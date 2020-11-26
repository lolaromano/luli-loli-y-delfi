window.addEventListener('load',function(){

    var apiKey = `1dd189fc2111fcf3d905a59b0cd42a3c`
    var linkImagen = `https://image.tmdb.org/t/p/w500`

    var sectionFavoritos = document.querySelector(".sectionFavoritos")

    var favsElegidas = JSON.parse(localStorage.getItem("favoritos"))
    var favsVacio = document.querySelector(".favsVacio")
    console.log(favsElegidas);

    if (favsElegidas == null) {
        favsVacio.style.display = 'block'

    } else {
        favsVacio.style.display = 'none'

    }
    

    for (let i = 0; i < favsElegidas.length; i++) {
        const element = favsElegidas[i];

        if (element.tipo == "movie") {

            
            fetch (`https://api.themoviedb.org/3/movie/${element.id}?api_key=${apiKey}&language=en-US`)
                .then(function (response) {
                    return response.json()
                })

                .then(function (data) {
                    console.log (data);

                    sectionFavoritos.innerHTML += `
                        <article>
                            <a href=''></a>
                                <h2>${element.title}</h2>
                                <img src=${linkImagen}${element.poster_path}>
                            </a>
                        </article>
                    `
                            
                })

                .catch(function (error){
                    console.log('El error fue: '+error);
                })

        } else {

            fetch (`https://api.themoviedb.org/3/tv/${element.id}?api_key=${apiKey}&language=en-US`)
                    .then(function (response) {
                        return response.json()
                    })
                    .then(function (data) {
                        console.log (data);

                        sectionFavoritos.innerHTML += `
                            <article>
                                <a href=''></a>
                                    <h2>${element.title}</h2>
                                    <img src=${linkImagen}${element.poster_path}>
                                </a>
                            </article>
                        `
                                
                    })
                    .catch(function (error){
                        console.log('El error fue: '+error);
                    })
        }
    }

      
}) //fin

   /* arrayFavs = [];

    arrayFavs.push(idClickeado);

    localStorage.setItem("favoritos", JSON.stringify(arrayFavs))*/













