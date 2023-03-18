import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { Storage } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// export const store = configureStore({
//   reducer: {
//     user: userSlice,
//   },
const rootReducer = combineReducers({
  user: userSlice,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export const persistor = persistStore(store);
