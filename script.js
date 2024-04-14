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
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '';
  
    data.results.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
  
      movieElement.innerHTML = `
        <h2>${movie.title}</h2>
        <p>Release Date: ${movie.release_date}</p>
        <p>Rating: ${movie.vote_average}</p>
        <p class="overview">${movie.overview}</p>
      `;
  
      moviesContainer.appendChild(movieElement);
    });
  }
  
  fetchMovies();