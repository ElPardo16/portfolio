import Box from '../components/Box'
import Label from '../components/Label'
import Layout from '../components/Layout'
import SkillCon from '../components/SkillCon'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { changueSel, nextBackImgList, nextImgList } from '../utils/projectSlice'
import gsap from 'gsap'
import { useRef } from 'react'
import { useEffect } from 'react'
// import dependencies
export default function Portfolio() {
    // get the select, the project list and imgList from global state
    const { select , projectList, imgList } = useSelector(state => state.project)
    //get the dispatch for changue state values
    const dispatch = useDispatch()
    // save the rotation of cube
    const rot = useRef(0)
    // get the selected index based in rotation
    const indexSel = projectList.findIndex(item => item.id === select.id)
    // references to arrow buttons
    const r = useRef(null)
    const l = useRef(null)
    // save the next item in cube
    const nextSel = useRef(null)
    // disable a arrow if no more elements in list
    const disable = _ => {
        if(indexSel == 0){
            // disable left arrow if is first element
            l.current.classList.add("disabled")
        }else if(indexSel == projectList.length - 1){
            // disable right arrow if is last element
            r.current.classList.add("disabled")
        }else{
            // enable two arrows if is middle item in list
            l.current.classList.remove("disabled")
            r.current.classList.remove("disabled")
        }
    }
    // set the box rotation when render component
    useEffect(_ => {
        gsap.set(".box", {
            rotateY: projectList.findIndex(item => item.id === select.id) * -90
        })
        rot.current = projectList.findIndex(item => item.id === select.id) * -90
        disable()
    },[])
    // when state select change  calculate next img in cube
    useEffect(_ => {
        //console.log(`ant ${ (indexSel % 4) - 1 >= 0? (indexSel % 4) - 1 : 3}, sel ${indexSel % 4}, nex ${(indexSel % 4) + 1 <= 3 ? (indexSel % 4) + 1 :0}`)
        disable()
        if(indexSel === 0){
            dispatch(nextImgList({
                index: (indexSel % 4) + 1 <= 3 ? (indexSel % 4) + 1 :0,
                img: projectList[indexSel + 1].img
            }))
        }else if(indexSel > 0 && indexSel < projectList.length - 1){
            dispatch(nextBackImgList({
                next: (indexSel % 4) + 1 <= 3 ? (indexSel % 4) + 1 :0,
                back: (indexSel % 4) - 1 >= 0? (indexSel % 4) - 1 : 3,
                imgN: projectList[indexSel + 1].img,
                imgB: projectList[indexSel - 1].img
            }))
        }else{
            dispatch(nextImgList({
                index: (indexSel % 4) - 1 >= 0? (indexSel % 4) - 1 : 3,
                img: projectList[indexSel - 1].img
            }))
        }        
    },[select])

    // only for probes
    /* useEffect(() => {
        console.log("update"+imgList)
    },[imgList]) */

    // rotate the cube for the next project
    const changueProduct = (next, r) => {
        // set the rotation of the cube
        nextSel.current = next === 0 ? -1 : 1
        // get the next project
        const project = projectList[indexSel + nextSel.current]
        // calculate the rotation of cube
        const newRot = rot.current + (90 * r)
        // rotate the cube with gsap
        gsap.to(".box", {
            rotateY: newRot,
            duration: .4
        })
        // save the rotation
        rot.current += 90 * r
        // update select state
        dispatch(changueSel(project))
    }
    return (
        <Layout title="works" port={true}>
            <div className="portfolio">
                <div className="card">
                    <h1>{select.title}</h1>
                    <div className="gallery">
                        <Box />
                    </div>
                    <div className="arrows">
                        <span ref={l} onClick={_ => void changueProduct(0, 1)}>
                            <MdKeyboardArrowLeft size={80}/>
                        </span>
                        <span ref={r} onClick={_ => void changueProduct(1, -1)}>
                            <MdKeyboardArrowRight size={80}/>
                        </span>
                    </div>
                    <div className="links">
                        {select.repo && <a href={select.repo} target="_blank" rel='noreferrer'><Label iName="SiGithub" skill="Repo" /></a>}
                        <a href={select.deploy} target="_blank" rel='noreferrer'><Label iName="SiNetlify" skill="Deploy" /></a>
                    </div>
                </div>
                <div className="info">
                    <SkillCon clss='s_info' list={select.skills} />
                </div>
            </div>
        </Layout>
    )
}