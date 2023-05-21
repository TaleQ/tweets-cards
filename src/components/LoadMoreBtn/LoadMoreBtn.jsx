import css from "./LoadMoreBtn.module.css";
import { useDispatch } from "react-redux";
import { loadMoreUsers } from "../../redux/operations";

export const LoadMoreBtn = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(loadMoreUsers());
  };
  return (
    <button className={css.loadMoreBtn} type="button" onClick={handleClick}>
      Load More
    </button>
  );
};
