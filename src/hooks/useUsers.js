import { useSelector } from "react-redux";
import {
  selectAllUsers,
  selectCount,
  selectError,
  selectFilter,
  selectFollowedUsers,
  selectIsLoading,
  selectPage,
  selectTotalNumber,
  selectUnfollowedUsers,
} from "../redux/selectors";

export const useUsers = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const totalNumber = useSelector(selectTotalNumber);
  const page = useSelector(selectPage);
  const count = useSelector(selectCount);

  const allUsers = useSelector(selectAllUsers);
  const followedUsers = useSelector(selectFollowedUsers);
  const unfollowedUsers = useSelector(selectUnfollowedUsers);

  const filterValue = useSelector(selectFilter);

  return {
    isLoading,
    error,
    totalNumber,
    page,
    count,
    allUsers,
    followedUsers,
    unfollowedUsers,
    filterValue,
  };
};
