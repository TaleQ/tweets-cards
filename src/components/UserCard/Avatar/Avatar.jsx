import { useState } from "react";
import css from "./Avatar.module.css";
import PropTypes from "prop-types";

export const Avatar = ({ src, alt }) => {
  const [showAlt, setShowAlt] = useState(false);

  const handleMouseOver = () => {
    setShowAlt(true);
  };
  const handleMouseOut = () => {
    setShowAlt(false);
  };

  return (
    <div
      className={css.avatarLayout}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className={css.avatarWrap}>
        <img className={css.avatarImg} src={src} alt={alt} />
      </div>
      {showAlt && <div className={css.avatarAlt}>{alt}</div>}
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
