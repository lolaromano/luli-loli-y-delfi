window.onload = function (){

//armar el querystring 
//fetch tv-movie
//for
//ul.innerHTML += " li a href ="detalles.html?tipo=tv-movie&id""

var apiKey = `1dd189fc2111fcf3d905a59b0cd42a3c`;

fetch (`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log (data);

var ul = document.querySelector ("ul.PeliculasMasRecientes");

    for (let index = 0; index < data.results.length; index++) {
        const element = data.results [index];
        
        ul.innerHTML += `
        <li>
        <div class="uk-panel"> 
                <img src="${linkImagen}${element.poster_path}" alt="">
                <div class="uk-position-center uk-panel"><h1></h1></div>
                </div>
        </li>

        `;

        console.log(linkImagen + element.poster_path);

    }
            
})
.catch(function (error){
    console.log('El error fue: '+error);
})











}// fin