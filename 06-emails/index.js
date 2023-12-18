// npm init -y
// npm add nodemailer
// npm add express

const express = require("express");
const nodemailer = require("nodemailer");


const app = express();

// Configuração de comunicação
const smtp = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
        user: "",
        pass: ""
    }
})

// configuração do email

const configEmail = {
    from: "",
    to: "",
    subject: "Testanto api de envio de email nodemailer",
    html: "<h1>Nodemailer</h1><p>Nodemailer é um módulo para aplicativos Node.js que permite o envio de e-mails com facilidade. O projeto começou em 2010, quando não havia uma opção sensata para enviar mensagens de e-mail. Hoje é a solução que a maioria dos usuários de Node.js utiliza por padrão.</p>"

}



new Promise((resolve, reject)=>{
    smtp.sendMail(configEmail)
    .then(resp => {
        smtp.close()
        return resolve(resp)
    }).catch(error => {
        console.log(error)
        smtp.close()
        return reject(error)
    })
})



app.listen(3000, () => {
    console.log("Projeto Rodando")
})