import Button from '../components/Button'
import Layout from '../components/Layout'
import Social from '../components/Social'

export default function Contact() {
    return (
        <Layout title="contact" con={true}>
            <div className="contact">
                <h1>Contactame</h1>
                <form action="">
                    <div className="con_i">
                        <input type="text" name="name" placeholder=' ' />
                        <label htmlFor="name">Nombre</label>
                    </div>
                    <div className="con_i">
                        <input type="email" name="email" placeholder=' '/>
                        <label htmlFor="email">Correo</label>
                    </div>
                    <div className="con_i">
                        <textarea name="msg" cols="30" rows="5" placeholder=' '></textarea>
                        <label htmlFor="msg">Mensaje</label>
                    </div>
                    <Button text="Enviar" />
                </form>
                <div className="other">
                    <p>O tambien por...</p>
                    <Social extra={true}/>
                </div>
            </div>
        </Layout>
    )
}