window.addEventListener('load',function(){

fetch (`https://api.themoviedb.org/3/movie/550?api_key=a7861c4f6175fa7e9d7361d67809cb5a`)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(data);

    data.results.forEach(actor => {
        document.querySelector ('').innerHTML += 
        
    });
})
.catch(function (error){
    console.log('El error fue: '+error);
})






})