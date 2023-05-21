import notFoundImg from "../../img/not_foung_img.jpeg";
import css from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={css.notFoundBox}>
      <p className={css.notFoundText}>This page wasn't found</p>
      <img className={css.notFoundImg} src={notFoundImg} alt="Not found" />
    </div>
  );
};

export default NotFound;
