import PropTypes from "prop-types";
import PaginationBar from "../fragments/pagination-bar";
import ImageFooter from "../fragments/image/Footer";
import Image from "../fragments/image";
import ImageCard from "../fragments/image/ImageCard";
import AnimeList from "./AnimeList";
import Main from "./Main";
import Loader from "../elements/Loading";
import Episodes from "../elements/Episodes";

const Query = ({ datas, error, Loading, title }) => {
  return (
    <>
      {Loading ? (
        <Loader />
      ) : error ? (
        <Main clearView center simple>
          <h1 className="text-center font-semibold">{error}</h1>
        </Main>
      ) : (
        <Main>
          <AnimeList
            title={`${datas?.pagination.items.total} Results For ${title}`}
          >
            {datas?.data.map((anime, index) => (
              <ImageCard key={index}>
                <Image
                  className="rounded-lg overflow-hidden min-h-40"
                  saturate
                  center
                  src={anime?.images.webp?.image_url}
                  title={anime?.title}
                  link={`/anime/${anime?.mal_id}`}
                />
                <ImageFooter>
                  <p className="text-sm text-accent-100/90">
                    {anime?.type === "Movie" ? (
                      "Movie"
                    ) : (
                      <Episodes eps={anime?.episodes} />
                    )}
                  </p>
                </ImageFooter>
              </ImageCard>
            ))}
          </AnimeList>
          <PaginationBar datas={datas?.pagination} />
        </Main>
      )}
    </>
  );
};

Query.propTypes = {
  datas: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
  Loading: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

export default Query;
