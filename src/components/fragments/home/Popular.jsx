import Image from "../image";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Popular = ({ datas }) => {
  return (
    <div className="py-6">
      <h1 className="text-xl font-semibold py-2">Popular Animes</h1>
      <div className="grid gap-4 bg-accent-200/50 dark:bg-primary-200/50 rounded-lg">
        {datas?.popularAnimes?.slice(0, 5).map((anime) => (
          <div
            className="relative overflow-hidden group text-accent-100 bg-accent-200 rounded-lg dark:bg-primary-200 drop-shadow-md"
            key={anime?.mal_id}
          >
            <Image
              src={anime?.images?.webp?.large_image_url}
              link={`/anime/${anime?.mal_id}`}
              className="text-sm max-h-40"
            />
            <div className="absolute top-0 left-0 w-full h-full z-[5]">
              <div className="rounded-br-lg bg-secondary-100 w-12 h-12 flex justify-center items-center">
                {anime?.popularity}
              </div>
            </div>
            <div className="absolute z-10 top-0 left-0 w-full h-full group-hover:translate-y-0 translate-y-[calc(100%-5rem)] transition-transform duration-200 bg-gradient-to-t from-primary-100 to-transparent px-8 py-6 text-accent-100/50 group-hover:text-accent-100">
              <Link to={`/anime/${anime?.mal_id}`}>
                <div className="pl-8 mb-1">
                  <h1 className="text-md font-semibold line-clamp-1">
                    {anime?.title}
                  </h1>
                  <p>
                    {anime?.type === "Movie"
                      ? "Movie"
                      : `${anime?.episodes} episodes`}
                  </p>
                </div>
                <p className="text-sm line-clamp-3">{anime?.synopsis}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Popular.propTypes = {
  datas: PropTypes.object.isRequired,
};

export default Popular;
