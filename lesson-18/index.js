const KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
// let red = document.querySelector(".red")

const getMovies = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // console.log(data);
        showMovies(data.results)
    } catch (error) {
        console.log(error);
    }
};

function showMovies(movies) {
    main.innerHTML = "";
    movies.forEach((item) => {
        console.log(item);
        let {title, poster_path, vote_average, overview} = item;
        const movieElement = document.createElement('div')
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
           <img src="${IMG_PATH + poster_path}" alt="${title}"/>
           <div class="movie-info">
              <h3>${title}</h3>
              <span class="${ShowAverage(vote_average)}">${vote_average}</span>
           </div>
           <div class="overview">
              <h3>Overview</h3>
              ${overview}
           </div>
        `
        main.appendChild(movieElement)
        
    });
    // ShowAverage()
}

function ShowAverage (vote_average) {
    if(vote_average >= 7.5) {
        return 'green'
    } else if(vote_average >= 7) {
        return 'orange'
    }
    else {
        return 'red'
    }
}
getMovies(API_URL);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchValue = search.value;
    
    if(searchValue && searchValue !== "") {
        getMovies(SEARCH_API + searchValue)
    }
})