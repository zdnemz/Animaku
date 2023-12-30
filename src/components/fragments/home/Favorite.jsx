import { Link } from "react-router-dom";
import Image from "../image";
import PropTypes from "prop-types";

const Favorite = ({ datas }) => {
  return (
    <div className="py-6">
      <h1 className="text-xl font-semibold py-2">Favorite Animes</h1>
      <div className="grid gap-4 rounded-lg bg-accent-200/50 dark:bg-primary-200/50">
        {datas?.favoriteAnimes?.slice(0, 5).map((anime, index) => (
          <div
            className="flex w-full bg-accent-200 rounded-lg dark:bg-primary-200 drop-shadow-md"
            key={index}
          >
            <Image
              src={anime?.images?.webp?.image_url}
              link={`/anime/${anime?.mal_id}`}
              key={anime?.mal_id}
              className="text-sm rounded-md overflow-hidden w-28 max-h-40"
              saturate
            />
            <div className="max-w-[calc(100%-7rem)] p-6">
              <div className="flex flex-col gap-2">
                <Link>
                  <h1 className="text-md font-semibold line-clamp-1">
                    {anime?.title}
                  </h1>
                </Link>
                <p className="text-opacity text-sm line-clamp-2">
                  {anime?.synopsis}
                </p>
                <p className="text-sm">
                  {anime?.favorites?.toLocaleString()} Favorites
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Favorite.propTypes = {
  datas: PropTypes.object.isRequired,
};

export default Favorite;
