import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2404-ftb-et-web-ft/"
    }),
    endpoints:(builder)=>({
        getPlayers : builder.query({
            query:()=> 'players'
        }),
        getPlayer : builder.query({
            query:(id)=>`players/${id}`
        }),
        addPlayer: builder.mutation({
            query:(body)=>({
                url:"players",
                method:"POST",
                body:body
            })
        }),
        deletePlayer: builder.mutation({
            query:(id)=>({
                url:"players/"+id,
                method:"DELETE",
            })
        })
    })
})

export const {useGetPlayersQuery, useGetPlayerQuery, useAddPlayerMutation, useDeletePlayerMutation} =api;