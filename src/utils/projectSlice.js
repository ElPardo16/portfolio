import { createSlice } from "@reduxjs/toolkit"
import { projects } from "./data"
// import dependencies
//get the project with higher priority to set first
const primary = Math.max(...projects.map(item => item.prior))
const projectsDef = projects.sort((a,b) => b.prior - a.prior)
// set the initial state of projects
const initialState = {
    //the first project to render
    select: projects.find(p => p.prior === primary),
    // order list of projects by priority
    projectList: projectsDef,
    imgList: projectsDef.slice(0,4).map(item => item.img)
}

// create reducers for modify the state
export const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        changueSel: (state, action) => {
            state.select = action.payload
        },
        setImgList: (state, action) => {
            state.imgList = action.payload
        },
        nextImgList: (state, action) => {
            state.imgList.unshift(action.payload)
            state.imgList.pop() 
        },
        backImgList: (state, action) => {
            state.imgList.push(action.payload)
            state.imgList.shift() 
        }

    }
})

//export the reducers an the state
export const { changueSel, setImgList, nextImgList, backImgList } = projectSlice.actions
export default projectSlice.reducer