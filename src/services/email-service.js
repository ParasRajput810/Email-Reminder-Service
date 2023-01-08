const { text } = require("body-parser");
const nodemailer = require("nodemailer");
const sender = require("../config/emailconfig");

const sendBasicMail = async(from,to,subject,body)=>{
    await sender.sendMail({
        from : from,
        to : to,
        subject : subject,
        text: body,
    })
}

module.exports = sendBasicMail;