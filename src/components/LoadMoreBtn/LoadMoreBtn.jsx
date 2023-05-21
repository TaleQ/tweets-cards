import { useState } from "react";
import css from "./LoadMoreBtn.module.css";
import { useDispatch } from "react-redux";
import { loadMoreUsers } from "../../redux/operations";

export const LoadMoreBtn = () => {
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(loadMoreUsers(page));
    setPage(page + 1);
  };
  return (
    <button className={css.loadMoreBtn} type="button" onClick={handleClick}>
      Load More
    </button>
  );
};
