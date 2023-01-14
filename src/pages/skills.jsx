import Certs from '../components/Certs'
import Layout from '../components/Layout'
import SkillCon from '../components/SkillCon'

export default function Skills() {
    return (
        <Layout title="skills" skill={true}>
            <div className="skills">
                <h1>Contactame</h1>
                <SkillCon title="Web" />
                <SkillCon title="Web" />
                <SkillCon title="Web" />
                <div className="certs">
                    <h2>Certificados mas relevantes</h2>
                    <div className="l_certs">
                        <Certs />
                        <Certs />
                        <Certs />
                        <Certs />
                    </div>
                </div>
            </div>
        </Layout>
    )
}