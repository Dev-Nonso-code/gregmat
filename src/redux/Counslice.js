<<<<<<< HEAD
import {createSlice} from '@reduxjs/toolkit'


const countslice = createSlice({
       name:"count",
       initialState:{
            value:0,
            istrue: false
        },
        reducers:{
            Increment:(state, action)=>{
                 state.value +=  1
                //  state.value = action.payload
            },
            decrement:(state)=>{
                state.value -=  1
                if (state.value <= 0) {
                    state.value = 0
                }
            }
        }
})


export default countslice.reducer
=======
import {createSlice} from '@reduxjs/toolkit'


const countslice = createSlice({
       name:"count",
       initialState:{
            value:0,
            istrue: false
        },
        reducers:{
            Increment:(state, action)=>{
                 state.value +=  1
                //  state.value = action.payload
            },
            decrement:(state)=>{
                state.value -=  1
                if (state.value <= 0) {
                    state.value = 0
                }
            }
        }
})


export default countslice.reducer
>>>>>>> b3f96a0ef6476e5841931a470a6ee9d672ff2eac
export const { Increment, decrement} = countslice.actions