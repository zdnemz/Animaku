import { useEffect } from "react";

const SessionData = (callback, duration = 7000) => {
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("data") || "{}");
    if (!data) {
      return;
    }

    const combinedDatas = Object.values(data)
      .map((animes) => animes.map((anime) => anime.title))
      .flat();

    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * combinedDatas.length);
      callback(combinedDatas[random]);
    }, duration);

    return () => {
      clearInterval(interval);
    };
  }, [callback, duration]);
};

export { SessionData };
