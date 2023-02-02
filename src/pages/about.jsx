import Image from 'next/image'
import Button from '../components/Button'
import Layout from '../components/Layout'
import imgProfile from "../../public/img/me.png"
// import dependencies
export default function About() {
	return (
		// the layout is a component tha repeat in all pages, header and menu
		// set the menu select item
		<Layout title="about" about={true}>
			<div className="about">
				<div className="bio">
					<Image src={imgProfile} alt="Foto de perfil" width={200} height={266} placeholder='blur' priority={true} />
					<h1>Andres Felipe Gonzalez Silva</h1>
					<p className="big">Desarrollador</p>
				</div>
				<div className="des">
					<div className="des_con">
						<h2>¿Quien soy?</h2>
						<p>Soy desarrollador hace 6 años, he trabajado en proyectos personales, como también en proyectos freelance para pulir mis habilidades técnicas.</p>
					</div>
					<div className="des_con">
						<h2>Curriculum</h2>
						<p>Puedes descargar mi curriculum a continuacion</p>
						<Button text="Decargar CV" handler={_ => void window.open("/curriculum/CV_Andres_Gonzalez.pdf")}/>
					</div>
				</div>
			</div>
		</Layout>
	)
}