const apiKey = 'f6175efbecf3aae034aab60572009e5c';
const popularApiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const actionApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`;
const animationApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16`;
const comedyApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`;
const horrorApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`;
const romanceApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749`;
const scifiApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=878`;


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

function fetchAnimationMovies() {
  fetch(animationApiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          handleMovieData(data, '.animation-movies-container');
      })
      .catch(error => {
          console.error('Error fetching animation movies:', error);
      });
}

function fetchComedyMovies() {
  fetch(comedyApiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          handleMovieData(data, '.comedy-movies-container');
      })
      .catch(error => {
          console.error('Error fetching comedy movies:', error);
      });
}

function fetchHorrorMovies() {
  fetch(horrorApiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          handleMovieData(data, '.horror-movies-container');
      })
      .catch(error => {
          console.error('Error fetching horror movies:', error);
      });
}

function fetchRomanceMovies() {
  fetch(romanceApiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          handleMovieData(data, '.romance-movies-container');
      })
      .catch(error => {
          console.error('Error fetching romance movies:', error);
      });
}

function fetchScifiMovies() {
  fetch(scifiApiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          handleMovieData(data, '.scifi-movies-container');
      })
      .catch(error => {
          console.error('Error fetching scifi movies:', error);
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

fetchPopularMovies(); 
fetchActionMovies(); 
fetchAnimationMovies();
fetchComedyMovies();
fetchHorrorMovies();
fetchRomanceMovies();
fetchScifiMovies();
