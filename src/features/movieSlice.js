import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommends: null,
  newDisney: null,
  originals: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommends = action.payload.recommends;
      state.newDisney = action.payload.newDisney;
      state.originals = action.payload.originals;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommends = (state) => {
  console.log(state);
  return state.movie.recommends;
};
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginals = (state) => {
  return state.movie.originals;
};
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
