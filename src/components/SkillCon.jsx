import Label from "./Label";
import {skills} from "../utils/data"
import { useMemo } from "react";
// import dependencies

export default function SkillCon({title, clss = "s_con", list}) {
    // map the list of skills to render and find the correct object
    const listSkill = list.map(item => {
        return skills.find(s => s.id === item)
    })
    const mapSkill = useMemo(_ => listSkill.map(({id, title, icon}) => <Label key={id} iName={icon} skill={title}/>))

  return (
    <div className={clss}>
        {/* return a h1 if true else a p tag */}
        {clss === "s_con" ? <h2>{title}</h2> 
        : <p>Tecnologias usadas:</p>}
        <div className="labels">
            {/* render a list of skills previously saved */}
            {mapSkill}
        </div>
    </div>
  )
}