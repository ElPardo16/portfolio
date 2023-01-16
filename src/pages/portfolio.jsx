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
// import dependencies
export default function Portfolio() {
    // get the select, the project list and imgList from global state
    const { select , projectList, imgList } = useSelector(state => state.project)
    //get the dispatch for changue state values
    const dispatch = useDispatch()
    // save the rotation of cube
    const rot = useRef(0)
    // get the selected index based in rotation
    const indexSel = Math.abs(rot.current / 90)
    // references to arrow buttons
    const r = useRef(null)
    const l = useRef(null)
    // save the next item in cube
    const nextSel = useRef(null)
    // save the number of twins of the cube
    const twins = useRef(0)
    // disable a arrow if no more elements in list
    const disable = _ => {
        if(Math.abs(rot.current / 90) == 0){
            // disable left arrow if is first element
            l.current.classList.add("disabled")
        }else if(Math.abs(rot.current / 90) == projectList.length - 1){
            // disable right arrow if is last element
            r.current.classList.add("disabled")
        }else{
            // enable two arrows if is middle item in list
            l.current.classList.remove("disabled")
            r.current.classList.remove("disabled")
        }
        
    }
    // update the next img in the cube
    const updateImgList = callback => {
        // set the next img in the state
        dispatch(callback(projectList[indexSel + nextSel.current].img))
    }
    // get the next or back image in array
    const calculateNext = _ => {
        if(twins.current > 0 && (indexSel + 1 != projectList.length && indexSel - 1 >= 0)){
            if(nextSel.current > 0){
                updateImgList(nextImgList)
            }else{
                updateImgList(backImgList)
            }
        }
    }
    // set the image list when render component
    useEffect(_ => {
        dispatch(setImgList(projectList.slice(0,5).map(item => item.img)))
        disable()
    },[])
    // when state select change  calculate next img in cube
    useEffect(_ => {
        disable()
        //console.log(nextSel.current+ "sad")
        console.log(Math.abs(rot.current / 90))
        if((Math.abs(rot.current / 90) + 1 ) % 5 === 0 && rot.current !== 0) twins.current++
        console.log(twins.current)
        calculateNext()
    },[select])
    // only for probes
    useEffect(() => {
        
        console.log(imgList)
    },[imgList])
    // rotate the cube for the next project
    const changueProduct = (next, r) => {
        // find the index of the selected object
        const actualSel = projectList.findIndex(item => item.id === select.id)
        // set the rotation of the cube
        nextSel.current = next === 0 ? -1 : 1
        // get the next project
        const project = projectList[actualSel + nextSel.current]
        // calculate the rotation of cube
        const newRot = rot.current + (90 * r)
        // rotate the cube with gsap
        gsap.to(".box", {
            rotateY: newRot,
            duration: .4
        })
        // save the rotation
        rot.current += 90 * r
        /* if(Math.abs(rot.current) === 360){
            rot.current = 0
            gsap.set(".box", {
                rotateY: 0
            })
        } */
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
                        <a href={select.repo} target="_blank" rel='noreferrer'><Label iName="SiGithub" skill="Repo" /></a>
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