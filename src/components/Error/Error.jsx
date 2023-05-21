import css from "./Error.module.css";

export const Error = () => {
  return (
    <div className={css.errorThumb}>
      <p>An error occured. Try again later</p>
    </div>
  );
};
