import {legacy_createStore as createstore} from 'redux'
import { loginReducer } from './loginReducer';
import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';
import {persistReducer,persistStore} from 'redux-persist'

const persistConfig={
    key:"root",
    version:1,
    storage
}



const persistedReducer = persistReducer(persistConfig,loginReducer)

export let store = createstore(persistedReducer);
export let persistor = persistStore(store)
store.subscribe(()=>{
    console.log(store.getState());
})