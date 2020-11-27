window.addEventListener('load', function () {

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
        console.log("aaaaaaaaaaaaaaaa")
        console.log(favsElegidas[i])

        const element = JSON.parse(window.localStorage.getItem(`${favsElegidas[i]}`)) // ahora element es toda la pelicula entera (todos los valores)


        console.log(element)
        sectionFavoritos.innerHTML += `
                        <article>
                            <a href="detalles.html">
                                <h2>${element.title}</h2>
                                <img src=${linkImagen}${element.poster_path}>
                            </a>
                        </article>
                    `



    }




}) //fin
