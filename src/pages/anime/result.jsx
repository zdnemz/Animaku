import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAnimeByQuery } from "../../services/anime";
import { searchValidation } from "../../services/validation";
import Query from "../../components/layouts/Query";

const Result = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const [datas, setDatas] = React.useState();
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  const result = queryParams.get("q") || "";
  const page = Number(queryParams.get("page")) || 1;

  React.useEffect(() => {
    searchValidation(queryParams, navigate);
  }, []);

  React.useEffect(() => {
    getAnimeByQuery(
      `anime?q=${result}`,
      setDatas,
      () => setError("An error occurred. Please try again later."),
      () => setIsLoading(false),
      page
    );
  }, []);

  return (
    <Query datas={datas} error={error} Loading={isLoading} title={result} />
  );
};

export default Result;
