import { configureStore } from "@reduxjs/toolkit";
import projectReducer from './projectSlice'
// import dependencies
// create the global state container
export const store = configureStore({
    reducer: {
        project: projectReducer,
    }
})