import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  friends: [],
  friendRequests: [],
  feed: [],
  assignedQuestions: [],
  loading: false,
  error: null,
};

const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    setFriends: (state, action) => {
      state.friends = action.payload;
    },
    setFriendRequests: (state, action) => {
      state.friendRequests = action.payload;
    },
    setFeed: (state, action) => {
      state.feed = action.payload;
    },
    setAssignedQuestions: (state, action) => {
      state.assignedQuestions = action.payload;
    },
    addFriend: (state, action) => {
      state.friends.push(action.payload);
    },
    removeFriend: (state, action) => {
      state.friends = state.friends.filter((f) => f.id !== action.payload);
    },
    addReaction: (state, action) => {
      // Logic to add reaction to an answer
    },
    addComment: (state, action) => {
      // Logic to add comment to an answer
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setFriends,
  setFriendRequests,
  setFeed,
  setAssignedQuestions,
  addFriend,
  removeFriend,
  addReaction,
  addComment,
  setLoading,
  setError,
} = socialSlice.actions;
export default socialSlice.reducer;
