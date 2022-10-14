const API_List = "https://api.themoviedb.org/3/discover/movie?api_key=1e94ce29eb8756d523ede5715b0eb45f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=";
const API_Search = "https://api.themoviedb.org/3/search/movie?api_key=1e94ce29eb8756d523ede5715b0eb45f&language=en-US&query=";
const img_url = "https://image.tmdb.org/t/p/w500";
const box = document.getElementById("list-movie");
const search = document.getElementById("search");
const btn_search = document.getElementById("btn-search");
const page = document.getElementById("inputGroupSelect");

const getData = async (a = API_List) => {
  const respons = await fetch(a);
  const result = await respons.json();
  const data = await result.results;

  box.innerHTML = "";

  data.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("col");
    card.innerHTML = `
            <div class="card h-100 shadow mb-5 bg-body rounded radius">
                <img src="${img_url + movie.poster_path}" class="card-img-top" alt="..." />
                <div class="card-body row">
                  <div class="col-8">
                    <h5 class="card-title" id="title">${movie.title}</h5>
                  </div>
                  <div class="col-4 text-end"><i class="bi bi-star-fill yellow"></i><strong>${movie.vote_average}</strong></div>
                </div>
                <div class="card-footer">
                  <small class="text-muted">${movie.release_date}</small>
                </div>
            </div>`;

    box.appendChild(card);
  });
};
getData();

const getInput = btn_search.addEventListener("click", () => {
  a = API_Search + search.value;
  page.value = '1'
  return getData(a);
});

const getPage = () => {
  for (let n = 2; n <= 20; n++) {
    page.innerHTML += `<option value="${n}">${n}</option>`;
  }
  page.addEventListener("click", () => {
    a = API_List + page.value;
    search.value = null
    return getData(a);
  });
};
getPage();
