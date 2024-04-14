const apiKey = 'f6175efbecf3aae034aab60572009e5c';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

function fetchMovies() {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        handleMovieData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  function handleMovieData(data) {
    const moviesContainer = document.querySelector('.movies-container');
    moviesContainer.innerHTML = '';
  
    data.results.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
  
      const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      const movieDetails = `
        <h2>${movie.title}</h2>
        <p>Release Date: ${movie.release_date}</p>
        <p>Rating: ${movie.vote_average}</p>
        <p class="overview">${movie.overview}</p>
      `;
  
      movieElement.innerHTML = `
        <div class="poster-container">
          <img src="${posterUrl}" alt="${movie.title} Poster">
        </div>
        <div class="movie-details">${movieDetails}</div>
      `;
  
      // After adding movie element to DOM, set the height of movie details container
      const posterImage = movieElement.querySelector('.poster-container img');
      const movieDetailsContainer = movieElement.querySelector('.movie-details');
      movieDetailsContainer.style.height = `${posterImage.clientHeight}px`;
  
      moviesContainer.appendChild(movieElement);
    });
  }
  
  fetchMovies();