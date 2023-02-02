import { createTransport } from "nodemailer";

export const sendContactMail = async info => {
    const transporter = createTransport({
        service: "Gmail",
        auth: {
          user: "andresito105@gmail.com", // generated ethereal user
          pass: process.env.pass, // generated ethereal password
        },
      })
    
      let data = await transporter.sendMail({
        from: '"Contacto Portafolio 🐻" <andresito105@gmail.com>', // sender address
        to: "andresito105@gmail.com", // list of receivers
        subject: "Contacto Portafolio 🐻", // Subject line
        html: `<h1>Mensaje:</h1>
                <p>${info.msg}</p>
                <h2>Persona:</h2>
                <p>${info.name}</p>
                <p>${info.mail}</p>`
      })
      return data
}