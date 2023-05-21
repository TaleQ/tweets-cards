import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoading = (store) => store.users.isLoading;
export const selectError = (store) => store.users.error;
export const selectTotalNumber = (store) => store.users.totalNumber;
export const selectAllUsers = (store) => store.users.items;
export const selectFollowedUsers = (store) => store.users.followedUsers;

export const selectUnfollowedUsers = createSelector(
  [selectAllUsers, selectFollowedUsers],
  (allUsers, followedUsers) => {
    return allUsers.filter(
      (user) =>
        !followedUsers.some((followedUser) => followedUser.id === user.id)
    );
  }
);

export const selectFilter = (store) => store.filter;
