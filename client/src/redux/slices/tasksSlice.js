import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tasks : []
};

const taskSlice = createSlice({
    
    name : "tasks",

    initialState,

    reducers:{
        // event
        addTask : (state,action) =>{
            state.tasks.push(action.payload);
        },
        removeTask : (state,action)=>{
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleCompleted : (state,action)=>{
            const task = state.tasks.find(task => task.id === action.payload);
            if(task){
                task.completed = !task.completed;
            }
        }
    }
});

export const {addTask, removeTask, toggleCompleted} = taskSlice.actions;
export default taskSlice.reducer;