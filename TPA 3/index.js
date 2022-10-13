function search() {
    let input = document.getElementById("search").value;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=6070659f9b233d4785534408a6db8cbb&query=${input}&page=1`;
}
const getDataApi = () => {
    let url =
    "https://api.themoviedb.org/3/discover/movie?api_key=6070659f9b233d4785534408a6db8cbb&sort_by=popularity.desc"

    let option = {
        method: "GET",
    };
    
fetch(url, option)
.then((response) => response.json())
.then((result) => {
    let movieData = result.results;
    let movieHTML = document.getElementById("section-film");

    movieData.forEach((item, index) => {
        movieHTML.innerHTML +=
        `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/` +
        item.poster_path + `" alt="Card img cap">
        <div class="Card body">
        <h5 class="card-title">` + item.original_title +
        `</h5>
        <p class="card-text">` + item.release_date +
        `</p>
        </div>
        </div>`;
    });
})

.catch((error) => console.log(error));

};
getDataApi();