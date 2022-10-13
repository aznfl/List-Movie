const API = "https://api.themoviedb.org/3/discover/movie?api_key=1e94ce29eb8756d523ede5715b0eb45f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
const img_url = "https://image.tmdb.org/t/p/w500";

// console.log(API);

// let img = document.getElementsByClassName("card h-100");
// let title = document.getElementById('title')

let list_movie = document.getElementById("list-movie");

getDataMovie(API);

function getDataMovie(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      showDataMovie(data.results);
    });
}

function showDataMovie(data) {
//   const { title, poster_path, vote_average } = movie;
  data.forEach(() => {
    list_movie.innerHTML = `
            <div class="col">
                  <div class="card h-100">
                    <img src="" class="card-img-top" alt="${data.title}" />
                    <div class="card-body">
                      <h5 class="card-title" id="title">${data.title}</h5>
                      <p class="card-text">${data.vote_average}</p>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
                </div>`;
  });
}

// let showMovies = (data) => {
//     data.forEach(movie => {
//         list_movie.innerHTML = `
//         <div class="col">
//               <div class="card h-100">
//                 <img src="img/11.png" class="card-img-top" alt="..." />
//                 <div class="card-body">
//                   <h5 class="card-title" id="title">Card title</h5>
//                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                 </div>
//                 <div class="card-footer">
//                   <small class="text-muted">Last updated 3 mins ago</small>
//                 </div>
//               </div>
//             </div>`

//     });
// }
