
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    const input = document.getElementById('input');
    const body = document.querySelector('#container');
    const movieList = document.getElementById('movie-list');

    button.addEventListener("click", (e) => {
        e.preventDefault();
        const searchItem = input.value.trim();
        if (searchItem === '') {
            let div = document.createElement('div');
            div.innerHTML = '<h3>Cannot be empty</h3>';
            div.classList.add('pop-up');
            let button2 = document.createElement("button")
            button2.innerText = 'Got It'
            button2.addEventListener('click', () => {
                body.removeChild(div);
            })
            div.style.backgroundColor = "#FFB84C";
            div.style.color = "white";
            div.appendChild(button2);
            body.appendChild(div);  
        } else {
            searchMovies(searchItem);
        }
    });
    //genre object
    const genre_object=  [ {

   
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 37,
        "name": "Western"
      }
    
    ];
    let map;
    const idNameMap = genre_object.reduce((map, obj) => {
        map[obj.id] = obj.name;
        console.log(map);
        return map;
    }, {});
    
    console.log(map);


    async function searchMovies(searchItem) {
        const apiKey = '25f53b34fb328e432f915ad8cea92e03';
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
            date.innerText =  `Release Date: ${movie.release_date}`;
            card.appendChild(date);

            const genreList = document.createElement('p');
            const genreid=movie.genre_ids;
            const genreNames=genreid.map(id=>idNameMap[id]).join(',');
            genreList.innerText = `Genres: ${genreNames}.`; // Ideally, map IDs to names
            card.appendChild(genreList);
            
            //overview
            const overview=document.createElement('p');
            overview.innerText=`Overview: ${movie.overview}`;
            card.appendChild(overview);

            movieList.appendChild(card);
            console.log(data)

        });
    }
});
