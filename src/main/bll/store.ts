import { combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import { itemsReducer } from './items-reducer';
import { createRowReducer } from './create-row-reducer';

const rootReducer = combineReducers({
    items: itemsReducer,
    newRows: createRowReducer
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(thunkMiddleware)
});
export type AppRootStateType = ReturnType<typeof rootReducer>


type AppDispatchType = typeof store.dispatch //создаем обертку над диспатчем
export const useAppDispatch = () => useDispatch<AppDispatchType>()