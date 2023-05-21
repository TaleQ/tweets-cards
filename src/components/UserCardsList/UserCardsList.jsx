import { useFilter } from "../../hooks/useFilter";
import css from "./UserCardList.module.css";

export const UserCardsList = ({ children }) => {
  const filtredUsers = useFilter();

  return filtredUsers.length ? (
    <ul className={css.list}>{children}</ul>
  ) : (
    <p className={css.noUsersText}>There are no users to display</p>
  );
};
