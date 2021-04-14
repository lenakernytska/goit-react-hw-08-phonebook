import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
// import storage from 'redux-persist/lib/storage' 
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from "./contacts/contacts-reducers";


// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter'],
// };


const store = configureStore({
    reducer: {
    // contacts: persistReducer(contactsPersistConfig, contactsReducer),
      contacts: contactsReducer
  },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
})

  // let persistor = persistStore(store)

export  {store};