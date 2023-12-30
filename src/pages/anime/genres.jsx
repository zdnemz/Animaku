import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAnimeByQuery } from "../../services/anime";
import { genresValidation } from "../../services/validation";
import Query from "../../components/layouts/Query";

const Genres = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const [datas, setDatas] = React.useState();
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  const genres = queryParams.get("genres") || "";
  const page = Number(queryParams.get("page")) || 1;

  const genreName = JSON.parse(
    sessionStorage.getItem("genres") || "{}"
  )?.filter((genre) => genre?.mal_id === +genres)[0]?.name;

  React.useEffect(() => {
    genresValidation(queryParams, navigate);
  }, []);

  React.useEffect(() => {
    getAnimeByQuery(
      `anime?genres=${+genres}`,
      setDatas,
      () => setError("An error occurred. Please try again later."),
      () => setIsLoading(false),
      page
    );
  }, []);

  return (
    <Query datas={datas} error={error} Loading={isLoading} title={genreName} />
  );
};

export default Genres;
