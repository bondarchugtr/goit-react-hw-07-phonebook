import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import contactsReducer from "../redux/telbook/reducer";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  REGISTER,
  PURGE,
  PERSIST,
} from "redux-persist";

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

// const middleware = {
//   serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// };

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middleware),
  devTools: process.env.NODE_ENV === "development",
});

// const store = configureStore({
//   reducer: persisterReducer,
//   middleware,
//   devTools: process.env.NODE_ENV === "development",
// });

// const persistor = persistStore(store);

export default store;
