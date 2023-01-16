import Certs from '../components/Certs'
import Layout from '../components/Layout'
import SkillCon from '../components/SkillCon'
import { certs, skills } from '../utils/data'

export default function Skills() {
    const getSkills = category => skills.filter(item => item.cat === category).map(({id}) => id)
    return (
        <Layout title="skills" skill={true}>
            <div className="skills">
                <h1>Contactame</h1>
                <SkillCon title="Web" list={getSkills("web")} />
                <SkillCon title="Other" list={getSkills("other")}/>
                <div className="certs">
                    <h2>Certificados mas relevantes</h2>
                    <div className="l_certs">
                        {certs.map(img => <Certs key={img} img={img}/>)}
                    </div>
                </div>
            </div>
        </Layout>
    )
}