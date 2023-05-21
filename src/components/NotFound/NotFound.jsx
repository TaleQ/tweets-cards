import { useNavigate } from "react-router-dom";
import notFoundImg from "../../img/not_foung_img.jpeg";
import css from "./NotFound.module.css";
import { useEffect } from "react";

export const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.notFoundBox}>
      <p className={css.notFoundText}>This page wasn't found</p>
      <img className={css.notFoundImg} src={notFoundImg} alt="Not found" />
    </div>
  );
};

export default NotFound;
