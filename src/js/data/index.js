import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import formReducer from "./form";

const rootReducer = {
  basketState: formReducer,
};

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
