import {createSlice} from "@reduxjs/toolkit"

const initialState={
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state) => {
            state.value++
        },
        decrement: (state) => {
            state.value--
        },
        double: (state) => {
            state.value = state.value*2;
        }
    }
});

export const {increment, decrement, double} = counterSlice.actions
export default counterSlice.reducer