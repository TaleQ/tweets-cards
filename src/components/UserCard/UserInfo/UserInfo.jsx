import css from "./UserInfo.module.css";
import PropTypes from "prop-types";

export const UserInfo = ({ tweets, followers }) => {
  const formatter = new Intl.NumberFormat("en-US");

  return (
    <>
      <p className={css.text}>
        <span className={css.number}>{formatter.format(tweets)}</span>
        <span className={css.textSpan}>
          {tweets === 1 ? "Tweet" : "Tweets"}
        </span>
      </p>
      <p className={css.text}>
        <span className={css.number}>{formatter.format(followers)}</span>
        <span className={css.textSpan}>
          {followers === 1 ? "Follower" : "Followers"}
        </span>
      </p>
    </>
  );
};

UserInfo.propTypes = {
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};
