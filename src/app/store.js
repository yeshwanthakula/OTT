// eslint-disable-next-line no-unused-vars
import {configureStore} from '@reduxjs/toolkit'
import {getDefaultMiddleware} from '@reduxjs/toolkit'
import userReducer from "../features/users/Userslice";
import movieReducer from '../features/movie/movieSlice';

export default configureStore({
// we ude this when ever we add a new reducer//
reducer:{
user:userReducer,
movie:movieReducer,


},
middleware:getDefaultMiddleware({
serializableCheck:false,


}),



})
