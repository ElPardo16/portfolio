import Label from "./Label";

export default function SkillCon({title, clss = "s_con"}) {
  return (
    <div className={clss}>
        {clss === "s_con" ? <h2>{title}</h2> 
        : <p>Habilidades:</p>}
        <div className="labels">
            <Label iName="DiHtml5" skill="Html"/>
            <Label iName="DiHtml5" skill="Html"/>
            <Label iName="DiHtml5" skill="Html"/>
            <Label iName="DiHtml5" skill="Html"/>
            <Label iName="DiHtml5" skill="Html"/>
            <Label iName="DiHtml5" skill="Html"/>
            <Label iName="DiHtml5" skill="Html"/>
            <Label iName="DiHtml5" skill="Html"/>
            <Label iName="DiHtml5" skill="Html"/>
            <Label iName="DiHtml5" skill="Html"/>
            <Label iName="DiHtml5" skill="Html"/>
            <Label iName="DiHtml5" skill="Html"/>
            <Label iName="DiHtml5" skill="Html"/>
            <Label iName="DiHtml5" skill="Html"/>
        </div>
    </div>
  )
}