import Button from '../components/Button'
import Layout from '../components/Layout'
// import dependencies
export default function About() {
	return (
		// the layout is a component tha repeat in all pages, header and menu
		// set the menu select item
		<Layout title="about" about={true}>
			<div className="about">
				<div className="bio">
					<img src="/img/osoColorDev.png" alt="" />
					<h1>Andres Felipe Gonzalez Silva</h1>
					<p className="big">Desarrollador</p>
				</div>
				<div className="des">
					<div className="des_con">
						<h2>¿Quien soy?</h2>
						<p>Soy una persona que le gusta la programacion, desde los 13 años estoy en este mundo, y cada dia busco mejorar mis habilidades blandas y tecnicas</p>
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