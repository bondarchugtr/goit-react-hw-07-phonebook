import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import { createLogger } from "redux-logger";
import contactsReducer from "../redux/telbook/reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  REGISTER,
  PURGE,
  PERSIST,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "contacts",
  storage,
};
const logger = createLogger();
let middleware = [];
if (process.env.NODE_ENV === "development") {
  middleware = (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
  ];
}

const rootReducer = combineReducers({
  contacts: contactsReducer,
});
const persisterReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persisterReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
const persistor = persistStore(store);

export default { store };
