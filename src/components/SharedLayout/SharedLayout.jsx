import { NavLink, Outlet, useLocation } from "react-router-dom";
import css from "./SharedLayout.module.css";
import { useUsers } from "../../hooks/useUsers";
import { Loader } from "../Loader/Loader";

export const SharedLayout = () => {
  const { pathname } = useLocation();
  const { isLoading } = useUsers();
  return (
    <>
      <header className={css.header}>
        {pathname === "/tweets" ? (
          <button className={css.navBtn} type="button">
            <NavLink to="/">Back to Home</NavLink>
          </button>
        ) : null}
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
