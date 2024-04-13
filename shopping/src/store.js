// import { configureStore } from "@reduxjs/toolkit"

// export default configureStore({
//     reducer: {

//     }
// })

import { configureStore, createSlice } from "@reduxjs/toolkit"
import user from './store/userSlice.js'


let stock = createSlice({ //usestate 역할
    name: 'stock',
    initialState: [10, 11, 12]
})

let baguni = createSlice({ //usestate 역할
    name: 'baguni',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers : {
        chngBaguni(state, action) {
            state.find((e) => {
                if(e.id === action.payload) {
                    e.count++
                }
            })
        },
        delBaguni(state, action) {
            
            let index = state.findIndex((e) => {
                return e.id == action.payload
            })
            state.splice(index, 1)
            
        },
        addBaguni(state, action) {
            if(action.payload.shoesData.count != 1) {
                action.payload.shoesData.count = 1
                state.push(action.payload.shoesData)
            }
            // state.push({ id: 0, name: 'White and Black', count: 2 })
        }
    }
})

export let { chngBaguni, delBaguni, addBaguni } = baguni.actions


export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        baguni : baguni.reducer
    }
})
