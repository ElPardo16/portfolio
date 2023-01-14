import Box from '../components/Box'
import Label from '../components/Label'
import Layout from '../components/Layout'
import SkillCon from '../components/SkillCon'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { backImgList, changueSel, nextImgList, setImgList } from '../utils/projectSlice'
import gsap from 'gsap'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function portfolio() {
    const { select , projectList, imgList } = useSelector(state => state.project)
    const dispatch = useDispatch()
    const rot = useRef(0)
    const indexSel = Math.abs(rot.current / 90)
    const r = useRef(null)
    const l = useRef(null)
    const nextSel = useRef(null)
    const twins = useRef(0)
    const disable = _ => {
        if(Math.abs(rot.current / 90) == 0){
            l.current.classList.add("disabled")
        }else if(Math.abs(rot.current / 90) == projectList.length - 1){
            r.current.classList.add("disabled")
        }else{
            l.current.classList.remove("disabled")
            r.current.classList.remove("disabled")
        }
        
    }
    const updateImgList = callback => {
        dispatch(callback(projectList[indexSel + nextSel.current].img))
    }
    const calculateNext = _ => {
        if(twins.current > 0 && (indexSel + 1 != projectList.length && indexSel - 1 >= 0)){
            if(nextSel.current > 0){
                updateImgList(nextImgList)
            }else{
                updateImgList(backImgList)
            }
        }
    }
    useEffect(_ => {
        dispatch(setImgList(projectList.slice(0,4).map(item => item.img)))
        disable()
    },[])
    useEffect(_ => {
        disable()
        //console.log(nextSel.current+ "sad")
        console.log(Math.abs(rot.current / 90))
        if((Math.abs(rot.current / 90) + 1 ) % 4 === 0 && rot.current !== 0) twins.current++
        console.log(twins.current)
        //calculateNext()
    },[select])
    useEffect(() => {
        
        console.log(imgList)
    },[imgList])
   
    const changueProduct = (next, r) => {
        const actualSel = projectList.findIndex(item => item.id === select.id)
        nextSel.current = next === 0 ? -1 : 1
        const project = projectList[actualSel + nextSel.current]
        const newRot = rot.current + (90 * r)
        gsap.to(".box", {
            rotateY: newRot,
            duration: .4
        })
        rot.current += 90 * r
        /* if(Math.abs(rot.current) === 360){
            rot.current = 0
            gsap.set(".box", {
                rotateY: 0
            })
        } */
        dispatch(changueSel(project))
    }
    return (
        <Layout title="works" port={true}>
            <div className="portfolio">

                <div className="card">
                    <div className="arrows">
                        <span ref={l} onClick={_ => void changueProduct(0, 1)}>
                            <MdKeyboardArrowLeft size={80}/>
                        </span>
                        <span ref={r} onClick={_ => void changueProduct(1, -1)}>
                            <MdKeyboardArrowRight size={80}/>
                        </span>
                    </div>
                    <h1>{select.title}</h1>
                    <div className="gallery">

                        <Box />
                        {/* <Box/>
                        <Box/>
                        <Box/> */}
                    </div>
                    <div className="links">
                        <Label iName="DiGithubBadge" skill="Repo" />
                        <Label iName="DiNetbeans" skill="Deploy" />
                    </div>
                </div>
                <div className="info">
                    <SkillCon clss='s_info' />

                </div>
            </div>
        </Layout>
    )
}