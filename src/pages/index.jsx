import * as React from "react";
import getHome from "../services/home";
import Main from "../components/layouts/Main";
import Greetings from "../components/elements/Greetings";
import Carousel from "../components/fragments/image/Carousel";
import ImageCard from "../components/fragments/image/ImageCard";
import Image from "../components/fragments/image";
import Slider from "../components/layouts/Slider";
import ImageFooter from "../components/fragments/image/Footer";
import Episodes from "../components/elements/Episodes";
import AnimeList from "../components/layouts/AnimeList";
import { Link } from "react-router-dom";
import Loader from "../components/elements/Loading";
import Favorite from "../components/fragments/home/Favorite";
import Popular from "../components/fragments/home/Popular";

const Home = () => {
  const [datas, setDatas] = React.useState({});
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (sessionStorage.getItem("data")) {
      setDatas(JSON.parse(sessionStorage.getItem("data")));
      setLoading(false);
    } else {
      getHome(
        (res) => {
          setDatas(res);
          sessionStorage.setItem("data", JSON.stringify(res));
        },
        setError,
        () => setLoading(false)
      );
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Main center clearView simple>
          <h1>An error occurred. Please try again later.</h1>
        </Main>
      ) : (
        <Main>
          <Greetings />
          <Carousel height="30vw">
            {datas?.favoriteAnimes?.slice(0, 8).map((anime) => (
              <Image
                src={anime?.images?.webp?.large_image_url}
                title={anime?.title}
                description={anime?.synopsis}
                link={`/anime/${anime?.mal_id}`}
                key={anime?.mal_id}
              />
            ))}
          </Carousel>

          <Slider title={"Airing Anime"} more link={"/anime/airing"}>
            {datas?.airingAnimes?.map((anime) => (
              <ImageCard key={anime?.mal_id}>
                <Image
                  saturate
                  className="text-sm rounded-md overflow-hidden"
                  center
                  src={anime?.images?.webp?.image_url}
                  title={anime?.title}
                  link={`/anime/${anime?.mal_id}`}
                  key={anime?.mal_id}
                />
                <ImageFooter>
                  <p className="font-semibold text-sm">
                    {anime.type === "Movie" ? (
                      "Movie"
                    ) : (
                      <Episodes eps={anime.episodes} />
                    )}
                  </p>
                </ImageFooter>
              </ImageCard>
            ))}
          </Slider>

          <AnimeList title={"Top Anime"}>
            {datas?.topAnimes?.map((anime, index) => (
              <ImageCard key={index}>
                <Image
                  src={anime?.images?.webp?.image_url}
                  title={anime?.title}
                  link={`/anime/${anime.mal_id}`}
                  key={anime.mal_id}
                  className="text-sm rounded-md overflow-hidden"
                  center
                  saturate
                />
                <ImageFooter>
                  <p className="font-semibold text-sm">
                    {anime.type === "Movie" ? (
                      "Movie"
                    ) : (
                      <Episodes eps={anime.episodes} />
                    )}
                  </p>
                </ImageFooter>
              </ImageCard>
            ))}
            <Link
              to={"/anime/top"}
              className="bg-accent-200 dark:bg-primary-200 h-[calc(100%-2rem)] hover:underline rounded-lg flex justify-center items-center"
            >
              More...
            </Link>
          </AnimeList>

          <div className="grid lg:grid-cols-2 gap-4 lg:grid-flow-col-dense">
            <Favorite datas={datas} />
            <Popular datas={datas} />
          </div>
        </Main>
      )}
    </>
  );
};

export default Home;
