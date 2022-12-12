import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const {todo,id} = action.payload;
            state.push({todo,id});
            return state
        },
        removeTodo:(state,action)=>{
            const id = action.payload;
            console.log("DELETED: ",id)
            console.log(state)
            return state.filter(item => item.id !== id)
        },
        updateTodo:(state,action) => {
            const id = action.payload[0]
            const newTodo = action.payload[1]

            state.map(data =>{
                if(data.id === id){
                    // console.log(data.todo)
                    data.todo = newTodo;
                    console.log(data.todo)
                }
            })
        }
    }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions 

export default todoSlice.reducer;