import * as React from "react";
import { useParams } from "react-router-dom";
import { getAnime } from "../../services/anime";
import Loader from "../../components/elements/Loading";
import Main from "../../components/layouts/Main";
import Video from "../../components/elements/Video";
import Paragraf from "../../components/elements/Paragraf";
import useBack from "../../hooks/useBack";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AnimeInfo = ({ datas }) => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/3">
          <p>Episode</p>
        </div>
        <div className="w-3/4">
          <p>: {datas?.episodes}</p>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3">
          <p>Rating</p>
        </div>
        <div className="w-3/4">
          <p>: {datas?.rating}</p>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3">
          <p>Studios</p>
        </div>
        <div className="w-3/4">
          <p>: {datas?.studios.map((v) => v.name).join()}</p>
        </div>
      </div>
    </div>
  );
};

AnimeInfo.propTypes = {
  datas: PropTypes.object.isRequired,
};

const Anime = () => {
  const { id } = useParams();
  const back = useBack();

  const [datas, setDatas] = React.useState();
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getAnime(
      `anime/${id}`,
      (res) => setDatas(res.data || null),
      setError,
      () => setIsLoading(false)
    );
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Main center clearView simple>
          An error occurred. Please try again later.
        </Main>
      ) : (
        <Main>
          <h1 className="text-xl font-semibold cursor-pointer" onClick={back}>
            Back
          </h1>
          <div className="grid sm:flex sm:gap-6 md:gap-8 gap-4 justify-items-center p-4 bg-secondary drop-shadow-md">
            <div className="flex justify-center items-center">
              <img src={datas?.images?.webp?.image_url} alt="" />
            </div>
            <div className="w-4/5">
              <h1 className="text-xl font-semibold text-center">
                {datas?.title}
              </h1>
              <h1 className="text-lg font-medium text-center">
                {datas?.title_japanese}
              </h1>

              <AnimeInfo datas={datas} />
            </div>
          </div>
          <div className="pt-4">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="md:w-1/2 md:h-[20rem]">
                <h1 className="text-xl font-semibold py-2">Trailer</h1>
                <div className="flex justify-center md:justify-start">
                  {datas?.trailer?.url ? (
                    <Video
                      url={datas?.trailer?.embed_url}
                      title={datas?.title}
                    />
                  ) : (
                    <p>
                      The trailer is not available at the moment. Please check
                      back later.
                    </p>
                  )}
                </div>
              </div>
              <div className="md:w-1/2">
                <Paragraf>{datas.synopsis}</Paragraf>
              </div>
            </div>
          </div>
          <div className="py-4">
            <h1 className="text-center text-xl font-semibold">Genres</h1>
            <div className="flex gap-2 justify-center py-2">
              {datas.genres.map((genre, index) => (
                <Link
                  key={index}
                  className="rounded-lg duration-200 transition-colors dark:bg-primary-300 dark:hover:bg-primary-300/50 bg-accent-200 hover:bg-accent-200/50 drop-shadow-md px-2 py-1"
                  to={`/anime?genres=${genre.mal_id}`}
                >
                  {genre.name}
                </Link>
              ))}
            </div>
          </div>
        </Main>
      )}
    </>
  );
};

export default Anime;
