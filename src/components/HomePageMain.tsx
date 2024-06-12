import { Link } from "react-router-dom";

const HomePageMain = () => {
  return (
    <div className="home_main">
      <div className="container hm_cont">
        <span className="home_text">
          <h1>Listening is everything</h1>
          <h3>
            Wherever you are, whatever you feel, Spotify is your go-to for an
            unparalleled audio experience.
          </h3>
          <Link to={"/main"}>
            <a className="green_btn">Play music</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default HomePageMain;
