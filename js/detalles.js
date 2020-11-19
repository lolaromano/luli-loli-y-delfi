window.onload = function (){

    //con querystring obtengo el tipo y el id que recibi por parametro

    var qs = location.search;
    var qsObj = new URLSearchParams(qs);


    var id = qsObj.get("id");
    var tipo = qsObj.get("tipo");

  

    if (tipo == "tv") {

        armarContenidoTv (id);
        
    }else{
        
        armarContenidoMovies (id);
    }



    if (tipo == "movies") {

        armarContenidoMovies (id);
        
    }else{
        
        armarContenidoTv (id);
    }








} //fin


function armarContenidoTv(id) {

//estamos en una serie
//oculto el div de movies- muestro div de tv

//fetch al detalle de tv
//https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US

    
}

function armarContenidoMovies(id) {
    
//estamos en peliculas
//oculto el div de tv- muestro div de movies

//fetch al detalle de movie
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

}