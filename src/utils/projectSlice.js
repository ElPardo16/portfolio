import { createSlice } from "@reduxjs/toolkit"
import { projects } from "./data"

const primary = Math.max(...projects.map(item => item.prior))
const initialState = {
    select: projects.find(p => p.prior === primary),
    projectList: projects.sort((a,b) => b.prior - a.prior),
    imgList: []
}
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

export const { changueSel, setImgList, nextImgList, backImgList } = projectSlice.actions
export default projectSlice.reducer