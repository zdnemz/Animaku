import axios from "axios";

const fetchDataWithRetry = async (url, maxRetries = 3, retryDelay = 1000) => {
  let retries = 0;

  while (retries < maxRetries) {
    try {
      const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching data from ${url}. Retrying...`);
      retries++;
      await sleep(retryDelay);
    }
  }

  throw new Error(
    `Failed to fetch data from ${url} after ${maxRetries} retries.`
  );
};

export const getHome = async (res, err, finsih) => {
  try {
    const airingAnimes = await fetchDataWithRetry(
      "https://api.jikan.moe/v4/top/anime?filter=airing&sfw=true"
    );
    const popularAnimes = await fetchDataWithRetry(
      "https://api.jikan.moe/v4/top/anime?filter=bypopularity&sfw=true"
    );
    const topAnimes = await fetchDataWithRetry(
      "https://api.jikan.moe/v4/top/anime?sfw=true"
    );
    const favoriteAnimes = await fetchDataWithRetry(
      "https://api.jikan.moe/v4/top/anime?filter=favorite&sfw=true"
    );
    const genres = await fetchDataWithRetry(
      "https://api.jikan.moe/v4/genres/anime"
    );

    sessionStorage.setItem("genres", JSON.stringify(genres));

    const newDatas = {
      airingAnimes,
      popularAnimes,
      topAnimes,
      favoriteAnimes,
    };

    res(newDatas);
  } catch (error) {
    err(error);
  } finally {
    finsih();
  }
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default getHome;
