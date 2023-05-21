import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://645a252865bd868e93123683.mockapi.io/api/";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/users/`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loadMoreUsers = createAsyncThunk(
  "users/loadMoreUsers",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const page = state.users.page + 1;
    try {
      const { data } = await axios.get(`/users/?limit=6&page=${page}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const showPage = createAsyncThunk(
  "users/showPage",
  async (page, thunkAPI) => {
    try {
      const { data } = await axios.get(`/users/?limit=6&page=${page}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addFollower = createAsyncThunk(
  "users/addFollower",
  async (userId, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentUsers = state.users.items;
    const index = currentUsers.findIndex((user) => user.id === userId);
    const newFollowersNumber = Number(currentUsers[index].followers) + 1;
    const updatedUser = {
      ...currentUsers[index],
      followers: newFollowersNumber,
    };
    try {
      const { data } = await axios.put(`/users/${userId}`, updatedUser);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeFollower = createAsyncThunk(
  "users/removeFollower",
  async (userId, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentUsers = state.users.items;
    const index = currentUsers.findIndex((user) => user.id === userId);
    const newFollowersNumber = Number(currentUsers[index].followers) - 1;
    const updatedUser = {
      ...currentUsers[index],
      followers: newFollowersNumber,
    };
    try {
      const { data } = await axios.put(`/users/${userId}`, updatedUser);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
