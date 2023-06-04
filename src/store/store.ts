import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth/auth.slice";
import infraReducer from "./slices/infra/infra.slice";
import laboratoryReducer from "./slices/laboratory/laboratory.slice";
import langReducer from "./slices/lang/lang.slice";
import locationReducer from "./slices/location/location.slice";
import userReducer from "./slices/user/user.slice";

const store = configureStore({
  reducer: {
    authReducer,
    infraReducer,
    laboratoryReducer,
    langReducer,
    locationReducer,
    userReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export default store;
