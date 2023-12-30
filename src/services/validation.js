const searchValidation = (query, next) => {
  if (!query.size) {
    next("/");
  }

  if (!query.get("q")) {
    next("/");
  }

  if (!query.get("page")) {
    next(`/search?q=${query.get("q")}&page=1`);
  }
  return;
};

const genresValidation = (query, next) => {
  if (!query.size) {
    next("/");
  }

  if (!query.get("genres")) {
    next("/");
  }

  if (!query.get("page")) {
    next(`/anime?genres=${query.get("genres")}&page=1`);
  }
};

const animeValidation = (url, query, next) => {
  if (!query.size) {
    next("/");
  }
  if (!query.get("page")) {
    next(`${url}?page=1`);
  }
};

export { searchValidation, genresValidation, animeValidation };
