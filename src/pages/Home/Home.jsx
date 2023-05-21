import { BgVideo } from "../../components/BgVideo/BgVideo";
import { NavLink } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={css.homeThumb}>
        <h2 className={css.title}>Be trendy with Tweets Cards!</h2>
        <p>
          Explore our website and start your amazing journey to the world of
          tweets, information, and trends!
        </p>
        <p>Follow your favorite users in one click!</p>
        <button className={css.navBtn}>
          <NavLink to="/tweets">Go to Tweets</NavLink>
        </button>
      </div>
      <BgVideo />
    </>
  );
};

export default Home;
