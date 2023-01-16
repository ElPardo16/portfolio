import Head from 'next/head'
import Button from '../components/Button'
import Layout from '../components/Layout'

export default function Home() {
	return (
		<Layout home={true}>
			<div className="home">
				<h1>Bienvenido a mi <br/>portafolio</h1>
				<p className='big'>Veras lo que puedo hacer y conoceras mas sobre mi</p>
				<Button text="Vamos" handler={_ => location.href = "/portfolio"}/>
			</div>
		</Layout>
	)
}
