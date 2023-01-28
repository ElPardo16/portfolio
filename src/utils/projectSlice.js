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
    //imgList: [0,1,2,3]
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
            const {index, img} = action.payload
            /* state.imgList.unshift(action.payload)
            state.imgList.pop() */ 
            state.imgList[index] = img
        },
        nextBackImgList: (state, action) => {
            /* state.imgList.push(action.payload)
            state.imgList.shift()  */
            const {next, back, imgN, imgB} = action.payload
            state.imgList[next] = imgN
            state.imgList[back] = imgB
        }

    }
})

//export the reducers an the state
export const { changueSel, setImgList, nextImgList, nextBackImgList } = projectSlice.actions
export default projectSlice.reducer