// npm i redux react-redux @reduxjs/toolkit

import {configureStore} from "@reduxjs/toolkit";
import playerSlice from "./redux/slices/playerSlice.js"
import {api} from "./redux/api/api.js";

const store = configureStore({
    reducer:{
        players:playerSlice,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(api.middleware)
})

export default store;
