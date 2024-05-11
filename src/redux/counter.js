<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
// import { Nav } from "../component/Navbar component/Nav";
const counterSlice = createSlice({
    
    name: "counter",
    initialState :{
         count:0,
         myName: "nonsoglobal"
    },
    reducers:{
        increment:(state)=>{ 
            state.count += 1
        },
        decrement:(state)=>{
            state.count -= 1
        },
        changeMyName:(state)=>{
            state.myName = "Obasi"
        },
        incrementByUser:(state,actions)=>{
          state.count = state.count + actions.payload
        }
    }
})

export const {increment,decrement, changeMyName, incrementByUser} = counterSlice.actions
=======
import { createSlice } from "@reduxjs/toolkit";
// import { Nav } from "../component/Navbar component/Nav";
const counterSlice = createSlice({
    
    name: "counter",
    initialState :{
         count:0,
         myName: "nonsoglobal"
    },
    reducers:{
        increment:(state)=>{ 
            state.count += 1
        },
        decrement:(state)=>{
            state.count -= 1
        },
        changeMyName:(state)=>{
            state.myName = "Obasi"
        },
        incrementByUser:(state,actions)=>{
          state.count = state.count + actions.payload
        }
    }
})

export const {increment,decrement, changeMyName, incrementByUser} = counterSlice.actions
>>>>>>> b3f96a0ef6476e5841931a470a6ee9d672ff2eac
export default counterSlice.reducer;