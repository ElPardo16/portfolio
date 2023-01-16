import Label from "./Label";
import {skills} from "../utils/data"

export default function SkillCon({title, clss = "s_con", list}) {
    const listSkill = list.map(item => {
        return skills.find(s => s.id === item)
    })

  return (
    <div className={clss}>
        {clss === "s_con" ? <h2>{title}</h2> 
        : <p>Habilidades:</p>}
        <div className="labels">
            {listSkill.map(({id, title, icon}) => <Label key={id} iName={icon} skill={title}/>)}
        </div>
    </div>
  )
}