import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import phonebookReducer from './phonebookSlice';

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts']
};

const persistedPhonebookReducer = persistReducer(persistConfig, phonebookReducer);

export const store = configureStore({
    reducer: {
        phonebook: persistedPhonebookReducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);