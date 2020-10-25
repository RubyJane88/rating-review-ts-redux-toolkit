/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";

/*Merges the main reducer with the router state and dynamically injected reducers*/
/*place all reducers here separated by commas.
 */

import starsRatingReviewReducer from "../features/starsratingreview/pages/starsratingreview-slice";

const injectedReducers = {
  starsRatingReview: starsRatingReviewReducer,
};

const rootReducer = combineReducers({
  ...injectedReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createReducer = () => rootReducer;
