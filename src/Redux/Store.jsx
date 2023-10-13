import {persistReducer} from 'redux-persist'

import userSlice from './userSlice/userSlice'
import artistSlice from './artistSlice/artistSlice'
import storage from 'redux-persist/lib/storage'
import { persistStore } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './adminSlice/adminSlice'

const persistConfig={
    key:'root',
    storage
}

const persistedUserReducer=persistReducer(persistConfig,userSlice)
const persistedArtistReducer=persistReducer(persistConfig,artistSlice)
const persistedAdminReducer=persistReducer(persistConfig,adminSlice)

const Store= configureStore({
    reducer:{
        user:persistedUserReducer,
        artist:persistedArtistReducer,
        admin:persistedAdminReducer
    }
})

const Persistor=persistStore(Store)

export  {Store,Persistor}