import { createSlice } from "@reduxjs/toolkit";
import {
  starsRatingReviewNameSpace,
  StarsRatingReviewType,
} from "./stars-rating-review-types";

export const initialState: StarsRatingReviewType = {
  rate: 0,
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
    },

    removeRatingStarReviewAction: (state) => {
      if (state.rate === 0) {
        // 0 i
        return;
      }
      state.rate = state.rate - 1;
    },
  },
});

export default starsRatingReviewSlice.reducer;

export const {
  addRatingStarReviewAction,
  removeRatingStarReviewAction,
} = starsRatingReviewSlice.actions;
