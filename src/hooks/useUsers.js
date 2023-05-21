import { useSelector } from "react-redux";
import {
  selectAllUsers,
  selectError,
  selectFilter,
  selectFollowedUsers,
  selectIsLoading,
  selectTotalNumber,
  selectUnfollowedUsers,
} from "../redux/selectors";

export const useUsers = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const totalNumber = useSelector(selectTotalNumber);

  const allUsers = useSelector(selectAllUsers);
  const followedUsers = useSelector(selectFollowedUsers);
  const unfollowedUsers = useSelector(selectUnfollowedUsers);

  const filterValue = useSelector(selectFilter);

  return {
    isLoading,
    error,
    totalNumber,
    allUsers,
    followedUsers,
    unfollowedUsers,
    filterValue,
  };
};
