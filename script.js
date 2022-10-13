const API = "https://api.themoviedb.org/3/discover/movie?api_key=1e94ce29eb8756d523ede5715b0eb45f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
const img_url = "https://image.tmdb.org/t/p/w500";
const box = document.getElementById("list-movie");

const getData = async () => {
  const respons = await fetch(API);
  const result = await respons.json();
  const data = await result.results;

  box.innerHTML = "";

  data.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("col");
    card.innerHTML = `
            <div class="card h-100">
                <img src="${img_url + movie.poster_path}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" id="title">${movie.title}</h5>
                </div>
                <div class="card-footer">
                  <small class="text-muted">${movie.release_date}</small>
                </div>
            </div>`;

    box.appendChild(card);
  });
};
getData();

