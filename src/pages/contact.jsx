import { useState } from 'react'
import Swal from 'sweetalert2'
import Button from '../components/Button'
import Layout from '../components/Layout'
import Social from '../components/Social'

const defaultData = {
    name: "",
    mail: "",
    msg: ""
}
// import dependencies
export default function Contact() {
    const [data, setData] = useState(defaultData)
    const inputHandler = ({target: {value, name}}) => {
        setData({
            ...data,
            [name]: value
        })
    }
    // handler of click event to submit form
    const clickHandler = async e => {
        e.preventDefault()
        if(data.mail === "" || data.msg === ""|| data.name === ""){
            Swal.fire(
                'Error',
                'Campos vacios',
                'error'
              )
              return
        }
        try {
            Swal.fire(
                'Enviando...'
              )
            const res = await fetch("/api/mail",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(data)
            })
            /* const json = await res.json()
            console.log(json) */
            Swal.fire(
                'Listo',
                'Correo enviado',
                'success'
              )
              setData(defaultData)
        } catch (error) {
            console.log(error)
            Swal.fire(
                'Error',
                'No se pudo enviar el correo',
                'error'
              )
        }
    }
    return (
        // the layout is a component tha repeat in all pages, header and menu
		// set the menu select item
        <Layout title="contact" con={true}>
            <div className="contact">
                <h1>Contactame</h1>
                <form action="">
                    <div className="con_i">
                        <input type="text" name="name" placeholder=' ' onChange={inputHandler} value={data.name} />
                        <label htmlFor="name">Nombre</label>
                    </div>
                    <div className="con_i">
                        <input type="mail" name="mail" placeholder=' ' onChange={inputHandler} value={data.mail}/>
                        <label htmlFor="mail">Correo</label>
                    </div>
                    <div className="con_i">
                        <textarea name="msg" cols="30" rows="5" placeholder=' ' onChange={inputHandler} value={data.msg}></textarea>
                        <label htmlFor="msg">Mensaje</label>
                    </div>
                    <Button text="Enviar" handler={clickHandler}/>
                </form>
                <div className="other">
                    <p>O tambien por...</p>
                    <Social extra={true}/>
                </div>
            </div>
        </Layout>
    )
}