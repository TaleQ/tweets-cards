import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useUsers } from "../../hooks/useUsers";
import { useFilter } from "../../hooks/useFilter";
import { fetchUsers } from "../../redux/operations";
import { Filter } from "../../components/Filter/Filter";
import { UserCardsList } from "../../components/UserCardsList/UserCardsList";
import { UserCard } from "../../components/UserCard/UserCard";
import { LoadMoreBtn } from "../../components/LoadMoreBtn/LoadMoreBtn";
import { Error } from "../../components/Error/Error";
import { ItemsPagination } from "../../components/Pagination/Pagination";

const Tweets = () => {
  const dispatch = useDispatch();
  const { error, totalNumber, filterValue } = useUsers();
  const filtredUsers = useFilter();
  const [isFiltred, setIsFiltred] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers("1"));
  }, [dispatch]);

  useEffect(() => {
    if (filterValue === "Follow" || filterValue === "Followings") {
      setIsFiltred(true);
    } else {
      setIsFiltred(false);
    }
  }, [filterValue]);

  return (
    <>
      {/* <button type="button">Back</button> */}
      {error ? (
        <Error />
      ) : (
        <>
          <Filter />
          <UserCardsList>
            <UserCard />
          </UserCardsList>
          <ItemsPagination />
          {totalNumber > filtredUsers.length && !isFiltred ? (
            <LoadMoreBtn />
          ) : null}
        </>
      )}
    </>
  );
};

export default Tweets;
