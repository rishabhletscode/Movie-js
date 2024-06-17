🎬 Movie Search App
Welcome to the Movie Search App! This project allows users to search for movies and explore detailed information about them, including titles, release dates, genres, and overviews.
![image](https://github.com/rishabhletscode/Movie-js/assets/131706326/95e4f7b9-238e-4e61-b2b5-8abbf70ca471)


🚀 Features
Search Functionality: Quickly find movies by title.
Detailed Information: View movie titles, release dates, genres, and overviews.
Dynamic UI: A responsive and user-friendly interface.
Genre Mapping: Converts genre IDs to readable names for better user experience.
🛠 Tech Stack
HTML & CSS: For structuring and styling the application.
JavaScript: Handles the logic and fetches data from the TMDB API.
📋 Table of Contents
Features
Tech Stack
Installation
Usage
Code Highlights
Contributing
License
Contact
📦 Installation
Clone the repository:

bash
Copy code
git clone https://github.com/rishabhletscode/Movie-js.git
Navigate to the project directory:

bash
Copy code
cd moviesearchapp
Open index.html in your browser:

Simply double-click the index.html file, or open it in your favorite browser.

🎮 Usage
Enter a movie title in the search bar.
Click the "Go" button to fetch and display movies matching the search criteria.
Explore the details of each movie, including the title, release date, genres, and overview.
💡 Code Highlights
Mapping Genre IDs to Names
One of the key challenges was mapping genre IDs from the API to their corresponding names. Here's how it was achieved:

javascript

const genre_object = [
  { "id": 28, "name": "Action" },
  { "id": 12, "name": "Adventure" },
  // ... other genres
];

const idNameMap = genre_object.reduce((map, obj) => {
  map[obj.id] = obj.name;
  return map;
}, {});

data.results.forEach(movie => {
  const genreNames = movie.genre_ids.map(id => idNameMap[id]).join(', ');
  // ... use genreNames in the UI
});
Fetching Movie Data
The app fetches movie data from the TMDB API:

javascript
Copy code
async function searchMovies(searchItem) {
    const apiKey = 'your_api_key';
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchItem}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    movieList.innerHTML = ''; // Clear previous results

    data.results.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h2');
        title.classList.add('movie-title');
        title.innerText = movie.original_title;
        card.appendChild(title);

        const poster = document.createElement('img');
        poster.classList.add('poster');
        poster.alt = "poster";
        poster.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
        card.appendChild(poster);

        const date = document.createElement('p');
        date.innerText = `Release Date: ${movie.release_date}`;
        card.appendChild(date);

        const genreList = document.createElement('p');
        const genreIds = movie.genre_ids;
        const genreNames = genreIds.map(id => idNameMap[id]).join(', ');
        genreList.innerText = `Genres: ${genreNames}.`;
        card.appendChild(genreList);
        
        // Overview
        const overview = document.createElement('p');
        overview.innerText = `Overview: ${movie.overview}`;
        card.appendChild(overview);

        movieList.appendChild(card);
    });
}
🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
