const apiKey = 'f6175efbecf3aae034aab60572009e5c';
const popularApiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const actionApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`;

function redirectTo(url) {
    window.location.href = url;
}

function fetchPopularMovies() {
    fetch(popularApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            handleMovieData(data, '.popular-movies-container');
        })
        .catch(error => {
            console.error('Error fetching popular movies:', error);
        });
}

function fetchActionMovies() {
    fetch(actionApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            handleMovieData(data, '.action-movies-container');
        })
        .catch(error => {
            console.error('Error fetching action movies:', error);
        });
}

function handleMovieData(data, containerSelector) {
    const moviesContainer = document.querySelector(containerSelector);
    moviesContainer.innerHTML = '';

    data.results.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        // Construct the full URL for the poster image
        const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        movieElement.innerHTML = `
            <div class="poster-container">
                <img src="${posterUrl}" alt="${movie.title} Poster">
            </div>
            <div class="movie-details">
                <h2>${movie.title}</h2>
                <p>Release Date: ${movie.release_date}</p>
                <p>Rating: ${movie.vote_average}</p>
                <p class="overview">${movie.overview}</p>
            </div>
        `;

        moviesContainer.appendChild(movieElement);
    });
}

fetchPopularMovies(); // Fetch popular movies
fetchActionMovies(); // Fetch action movies
