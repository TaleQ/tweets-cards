import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUsers,
  addFollower,
  removeFollower,
  loadMoreUsers,
} from "./operations";

const usersInitialState = {
  items: [],
  totalNumber: null,
  error: null,
  isLoading: false,
  followedUsers: [],
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => handlePending(state))
      .addCase(fetchUsers.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.totalNumber = action.payload.length;
        state.items = action.payload.slice(0, 6);
      })
      .addCase(loadMoreUsers.pending, (state) => handlePending(state))
      .addCase(loadMoreUsers.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(loadMoreUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(addFollower.pending, (state) => handlePending(state))
      .addCase(addFollower.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(addFollower.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (user) => user.id === action.payload.id
        );
        state.items[index] = action.payload;
        state.followedUsers.push(action.payload);
      })
      .addCase(removeFollower.pending, (state) => handlePending(state))
      .addCase(removeFollower.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(removeFollower.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (user) => user.id === action.payload.id
        );
        state.items[index] = action.payload;
        const indexInFollowed = state.followedUsers.findIndex(
          (user) => user.id === action.payload.id
        );
        state.followedUsers.splice(indexInFollowed, 1);
      });
  },
});

export const usersReducer = usersSlice.reducer;
