import * as React from "react";
import Main from "../components/layouts/Main";
import Avatar from "../components/elements/Avatar";
import AnimeList from "../components/layouts/AnimeList";
import ImageCard from "../components/fragments/image/ImageCard";
import Image from "../components/fragments/image";
import ImageFooter from "../components/fragments/image/Footer";
import Episodes from "../components/elements/Episodes";
import Slider from "../components/layouts/Slider";

function Profile() {
  const convertDate = (date) => {
    const newDate = new Date(date);

    const day = String(newDate.getDate()).padStart(2, "0");
    const month = String(newDate.getMonth() + 1).padStart(2, "0");
    const year = String(newDate.getFullYear());

    return `${day}-${month}-${year}`;
  };

  const [data, setData] = React.useState([]);

  const random = Math.floor(Math.random() * data.length) + 1;

  React.useState(() => {
    const collectionData = JSON.parse(sessionStorage.getItem("data") || "{}");
    const randomData = Object.values(collectionData)
      .map((animes) => animes.map((anime) => anime))
      .flat()
      .sort(() => Math.random() - 0.5)
      .filter(
        (obj, index, self) =>
          index === self.findIndex((t) => t?.mal_id === obj?.mal_id)
      )
      .slice(0, Math.floor(Math.random() * 40) + 6);

    setData(randomData);
  }, []);

  return (
    <Main clearView full simple>
      <div className="lg:flex grid gap-8 my-8 justify-center">
        <div className="rounded-lg bg-accent-200 dark:bg-primary-200 px-6 py-8 flex items-center flex-col gap-8 lg:w-1/2 lg:max-w-[30rem] h-fit">
          <Avatar
            className="border border-primary-100 dark:border-accent-100"
            rounded
            size={"10rem"}
            loading
            src={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            }
          />
          <div className="flex flex-col flex-wrap text-center">
            <div className="flex justify-center">
              <h1 className="font-bold text-xl w-fit text-center">ZidaneMZ</h1>
            </div>
            <p className="text-accent4/50">1234567890</p>
            <p className="text-accent4/70 text-sm">
              Joined at {convertDate(Date())}
            </p>
            <div className="py-2 px-6">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                adipisci odio sint, neque quae quod, rerum doloremque quasi
                necessitatibus fugit repellat excepturi corporis, architecto et
                veniam perspiciatis natus cumque tempora?
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden gap-6 grid items-center lg:justify-between lg:w-1/2 lg:max-w-[30rem]">
          <div className="h-fit w-full overflow-hidden rounded-lg bg-accent-200 dark:bg-primary-200 px-6 py-3">
            <Slider title="Recently Watched">
              {data?.slice(-random - 3, -1)?.map((anime) => (
                <ImageCard key={anime?.mal_id}>
                  <Image
                    className="rounded-lg overflow-hidden !h-40 !w-28"
                    saturate
                    center
                    src={anime?.images.webp?.image_url}
                    title={anime?.title}
                    link={`/anime/${anime?.mal_id}`}
                  />
                  <ImageFooter>
                    <p className="text-sm text-primary-100/90 dark:text-accent-100/90">
                      {anime?.type === "Movie" ? (
                        "Movie"
                      ) : (
                        <Episodes eps={anime?.episodes} />
                      )}
                    </p>
                  </ImageFooter>
                </ImageCard>
              ))}
            </Slider>
          </div>
          <div className="w-full overflow-hidden rounded-lg bg-accent-200 dark:bg-primary-200 px-6 py-8">
            <h1 className="font-semibold text-lg">Total Time Watched</h1>
            <p>10 Hours 27 Minutes</p>
            <p className="text-opacity">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <AnimeList
        title={"Collection"}
        className=" bg-accent-200/50 dark:bg-primary-200/50 rounded-lg"
      >
        {data?.map((anime) => (
          <ImageCard key={anime?.mal_id}>
            <Image
              className="rounded-lg overflow-hidden min-h-40"
              saturate
              center
              src={anime?.images.webp?.image_url}
              title={anime?.title}
              link={`/anime/${anime?.mal_id}`}
            />
            <ImageFooter>
              <p className="text-sm text-primary-100/90 dark:text-accent-100/90">
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
    </Main>
  );
}

export default Profile;
