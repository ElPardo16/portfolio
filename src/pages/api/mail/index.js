// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sendContactMail } from "../../../controller/mailController"

export default async function handler(req, res) {
  switch(req.method){
    case "POST":
      try {
        const data = await sendContactMail(req.body)
        res.status(200).json({
          msg: "Correo enviado",
          data
        })
      } catch (error) {
        console.log(error)
        res.status(400).json({
          msg: `Error: ${error.message}`
        })
      }
    default:
      res.status(200).json({
        msg: "Not supported method"
      })
  }
}
