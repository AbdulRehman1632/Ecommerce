import { createStore } from "redux";
import { ProductReducer } from "./reducers/ProductReducer";
import storage from 'redux-persist/lib/storage'
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";

// export const store = createStore(ProductReducer);

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["cart"],

  }

  const persistedReducer = persistReducer(persistConfig, ProductReducer)

  
  
export let store = createStore(persistedReducer)
export let persistor = persistStore(store)