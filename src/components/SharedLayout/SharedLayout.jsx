import { NavLink, Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";
import { useUsers } from "../../hooks/useUsers";
import { Loader } from "../Loader/Loader";

export const SharedLayout = () => {
  const { isLoading } = useUsers();
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.navList}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tweets">Tweets</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className={css.container}>
          {isLoading && <Loader />}
          <Outlet />
        </div>
      </main>
    </>
  );
};
