import {configureStore} from '@reduxjs/toolkit';

import taskReducer from './slices/tasksSlice.js';


export const store = configureStore({
    reducer:{

        tasks : taskReducer,



    },
})