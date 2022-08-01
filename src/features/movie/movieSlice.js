import { createSlice } from "@reduxjs/toolkit";

const initialState ={
recommend:null,
new:null,
trending:null,
original:null,
telugu:null,
bollywood:null,
tamil:null,


};

const movieSlice = createSlice({
name:"movie",
initialState,

reducers:{

setmovie:(state,action)=>{

state.recommend = action.payload.recommend;
state.new = action.payload.new;


state.original= action.payload.original;
state.trending = action.payload.trending;
state.telugu = action.payload.telugu;
state.bollywood = action.payload.bollywood;
state.tamil = action.payload.tamil;


}






}






});

export  const {setmovie} = movieSlice.actions;


export const selectRecommend = (state)=>state.movie.recommend;
export const selectNew = (state)=>state.movie.new;
export const selectTrending = (state)=>state.movie.trending;
export const selectOriginal  = (state)=>state.movie.original;
export const selectTelugu = (state)=>state.movie.telugu;
export const selectBollywood = (state)=>state.movie.bollywood;
export const selectTamil = (state)=>state.movie.tamil;

export default movieSlice.reducer;