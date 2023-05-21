import { useUsers } from "./useUsers";

export const useFilter = () => {
  const { allUsers, unfollowedUsers, followedUsers, filterValue } = useUsers();

  const filtredUsers = (filterValue) => {
    switch (filterValue) {
      case "All":
        return allUsers;
      case "Follow":
        return unfollowedUsers;
      case "Following":
        return followedUsers;
      default:
        return allUsers;
    }
  };

  return filtredUsers(filterValue);
};
