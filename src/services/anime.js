import axios from "axios";

const BASE_URL = "https://api.jikan.moe/v4";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getAnime = async (url, res, err, finsih) => {
  try {
    const { data } = await api.get(url);
    res(data);
  } catch (error) {
    err(error);
  } finally {
    finsih();
  }
};

const getAnimeByQuery = async (url, res, err, finsih, page = 1) => {
  try {
    const { data } = await api.get(`${url}&page=${page}&sfw=true`);
    res(data);
  } catch (error) {
    err(error);
  } finally {
    finsih();
  }
};

const getGenres = async (res, err, finsih) => {
  try {
    const { data } = await api.get("/genres/anime");
    res(data);
  } catch (error) {
    err(error);
  } finally {
    finsih();
  }
};

export { getAnime, getAnimeByQuery, getGenres };
