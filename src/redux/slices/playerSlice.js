import {createSlice} from "@reduxjs/toolkit";
import {api} from "../api/api.js";
const playerSlice = createSlice({
    name:"players",
    initialState: [],
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addMatcher(api.endpoints.getPlayers.matchFulfilled, (state, {payload})=>{
            return payload.data.players
        })

        builder.addMatcher(api.endpoints.addPlayer.matchFulfilled, (state, {payload})=>{
            state.push(payload.data.newPlayer);
            return state;
        })

        builder.addMatcher(api.endpoints.deletePlayer.matchFulfilled, (state, {payload})=>{
            console.log(payload)
            // const newArray = state.filter(i=>i.id!===payload.id)
            return state;
        })

    }
})

export default playerSlice.reducer;
