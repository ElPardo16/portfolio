import Certs from '../components/Certs'
import Layout from '../components/Layout'
import SkillCon from '../components/SkillCon'
import { certs, skills } from '../utils/data'
// import dependencies
export default function Skills() {
    /* console.log(skills.map(item => `${item.id} ${item.title}`)) */
    // filter the skill by category and return a new array with only the id
    const getSkills = category => skills.filter(item => item.cat === category).map(({id}) => id)
    return (
        // the layout is a component tha repeat in all pages, header and menu
		// set the menu select item
        <Layout title="skills" skill={true}>
            <div className="skills">
                <h1>Contactame</h1>
                <SkillCon title="Web" list={getSkills("web")} />
                <SkillCon title="Other" list={getSkills("other")}/>
                <div className="certs">
                    <h2>Certificados mas relevantes</h2>
                    <div className="l_certs">
                        {/* render a list of certificates */}
                        {certs.map(img => <Certs key={img} img={img}/>)}
                    </div>
                </div>
            </div>
        </Layout>
    )
}