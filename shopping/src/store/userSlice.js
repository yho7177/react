import {createSlice} from '@reduxjs/toolkit'

let user = createSlice({ //usestate 역할
    name: 'user',
    initialState: { name : 'kim', age : 20},
    reducers : {
        nmChng(state, action) {
            state.name = action.payload
        }
    }
})



export default user

export let { act } = user.actions