import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAnimeByQuery } from "../../services/anime";
import { animeValidation } from "../../services/validation";
import Query from "../../components/layouts/Query";

const Airing = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const [datas, setDatas] = React.useState();
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  const page = Number(queryParams.get("page")) || 1;

  React.useEffect(() => {
    animeValidation("/anime/airing", queryParams, navigate);
  }, []);

  React.useEffect(() => {
    getAnimeByQuery(
      "top/anime?filter=airing",
      setDatas,
      (e) => setError(e),
      () => setIsLoading(false),
      page
    );
  }, []);

  return (
    <Query datas={datas} error={error} Loading={isLoading} title={"Airing Animes"} />
  );
};

export default Airing;
