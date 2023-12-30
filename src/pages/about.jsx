import * as React from "react";
import Main from "../components/layouts/Main";
import axios from "axios";
import Loader from "../components/elements/Loading";
import Avatar from "../components/elements/Avatar";
import { Link } from "react-router-dom";
import Section from "../components/fragments/about/Section";
import SocialMedia from "../components/fragments/about/SocialMedia";
import Card from "../components/fragments/about/Card";
import { techs } from "../components/fragments/about/listTech";
import List from "../components/fragments/about/List";
import useTheme from "../hooks/useTheme";

const About = () => {
  const [user, setUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const { theme } = useTheme();

  React.useEffect(() => {
    axios
      .get("https://api.github.com/users/zdnemz")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // console.log(user);

  return !isLoading ? (
    <Main clearView simple center>
      <div className="grid gap-4 px-6">
        <Section title="About Me">
          <div className="flex justify-center items-center my-4">
            <Avatar rounded size={"10rem"} src={user.avatar_url} />
          </div>
          <p className="text-accent4/50 text-lg">
            {"Hello there! My name is "}
            <span className="text-accent4 hover:underline">
              <a href="https://github.com/zdnemz">{user.name}</a>
            </span>
          </p>
          <p className="text-accent4/50"></p>
          <p className="text-sm text-accent4/50">{user.bio}</p>
          <div className="flex gap-6 mt-2 flex-wrap">
            <SocialMedia name={"github"}>{user.login}</SocialMedia>
            <SocialMedia name={"twitter"}>{user.twitter_username}</SocialMedia>
            <SocialMedia name={"instagram"}>zdnemz</SocialMedia>
          </div>
        </Section>
        <Section title="Tech Stack">
          <Card>
            <ul className="grid grid-col-auto gap-6 only:selection:bg-transparent">
              {techs.map((tech, index) => (
                <Link to={tech.link} key={index}>
                  <li className="flex justify-center items-center duration-300 cursor-pointer h-full rounded-md drop-shadow-lg hover:bg-accent-100 dark:hover:bg-primary-100 relative group">
                    <img
                      src={theme === "dark" ? tech.logo.dark : tech.logo.light}
                      className="w-24"
                    />
                    <div className="group-hover:block hidden absolute top-0 translate-y-14 w-[40vw] max-w-72 h-fit p-4 bg-accent-100 dark:bg-primary-100 rounded-md">
                      <p>{tech.desc}</p>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </Card>
          <div>
            {techs.map((tech, index) => (
              <List
                title={tech?.reason?.title}
                list={tech?.reason?.list}
                key={index}
              />
            ))}
          </div>
        </Section>
        <Section title="Powered By">
          <Card>
            <Link className="hover:text-primary text-primary/80 duration-300 cursor-pointer w-fit">
              https://api.jikan.moe/v4
            </Link>
          </Card>
        </Section>
      </div>
    </Main>
  ) : (
    <Loader />
  );
};

export default About;
