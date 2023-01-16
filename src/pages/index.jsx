import Button from '../components/Button'
import Layout from '../components/Layout'
// import dependencies
export default function Home() {
	return (
		// the layout is a component tha repeat in all pages, header and menu
		// set the menu select item
		<Layout home={true}>
			<div className="home">
				<h1>Bienvenido a mi <br/>portafolio</h1>
				<p className='big'>Veras lo que puedo hacer y conoceras mas sobre mi</p>
				<Button text="Vamos" handler={_ => location.href = "/portfolio"}/>
			</div>
		</Layout>
	)
}
