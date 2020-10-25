import { createSlice } from "@reduxjs/toolkit";
import {
  starsRatingReviewNameSpace,
  StarsRatingReviewType,
} from "./stars-rating-review-types";

export const initialState: StarsRatingReviewType = {
  rate: 0,
  stars: ["⭐"],
};

export const starsRatingReviewSlice = createSlice({
  name: starsRatingReviewNameSpace,
  initialState: initialState,

  reducers: {
    addRatingStarReviewAction: (state) => {
      if (state.rate === 10) {
        return;
      }
      state.rate = state.rate + 1;
      state.stars = [...state.stars, "⭐"];
    },

    removeRatingStarReviewAction: (state) => {
      if (state.rate === 0) {
        return;
      }
      state.rate = state.rate - 1;
      state.stars = state.stars.slice(0, -1);
    },
  },
});

export default starsRatingReviewSlice.reducer;

export const {
  addRatingStarReviewAction,
  removeRatingStarReviewAction,
} = starsRatingReviewSlice.actions;
