import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoading = (store) => store.users.isLoading;
export const selectError = (store) => store.users.error;

export const selectTotalNumber = (store) => store.users.totalNumber;
export const selectPage = (store) => store.users.page;

export const selectCount = createSelector(
  [selectTotalNumber],
  (totalNumber) => {
    return Math.ceil(totalNumber / 6);
  }
);

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
