import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/operations";
import { Filter } from "../../components/Filter/Filter";
import { UserCardsList } from "../../components/UserCardsList/UserCardsList";
import { UserCard } from "../../components/UserCard/UserCard";
import { LoadMoreBtn } from "../../components/LoadMoreBtn/LoadMoreBtn";
import { useUsers } from "../../hooks/useUsers";
import { useFilter } from "../../hooks/useFilter";

const Tweets = () => {
  const dispatch = useDispatch();
  const { error, totalNumber, filterValue } = useUsers();
  const filtredUsers = useFilter();
  const [isBtnShown, setIsBtnShown] = useState(true);

  useEffect(() => {
    dispatch(fetchUsers("1"));
  }, [dispatch]);

  useEffect(() => {
    if (filterValue === "Follow" || filterValue === "Following") {
      setIsBtnShown(false);
    } else {
      setIsBtnShown(true);
    }
  }, [filterValue]);

  return error ? (
    <div>Error</div>
  ) : (
    <>
      <Filter />
      <UserCardsList>
        <UserCard />
      </UserCardsList>
      {totalNumber > filtredUsers.length && isBtnShown ? <LoadMoreBtn /> : null}
    </>
  );
};

export default Tweets;
