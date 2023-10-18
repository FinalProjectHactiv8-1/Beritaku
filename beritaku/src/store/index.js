import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "./reducers/covid19";
import indonesiaReducer from "./reducers/indonesia";

export const store = configureStore({
  reducer: {
    covid: covidReducer,
    indonesia: indonesiaReducer
  },
});