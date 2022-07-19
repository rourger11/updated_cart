import {configureStore}from '@reduxjs/toolkit'
import rootReducer from "../Components/Reducer/index";

const store = configureStore({
    reducer:rootReducer
});
export default store;

