const express = require("express");
const bodyparser = require("body-parser");
const {PORT} = require("./config/serverConfig");
const sender = require("./config/emailconfig");
const nodemailer = require("nodemailer");
const sendBasicMail = require("./services/email-service");
const job = require("./utils/job");
const {createTicket , deleteNotification} = require("./controller/ticketController");

const serverSetUp = async()=>{
    const app = express();

    app.use(bodyparser.json());
    
    app.use(bodyparser.urlencoded({extended:true}));

    app.post("/api/v1/ticketcreate" , createTicket);

    app.delete("/api/v1/ticketdelete" , deleteNotification);

    app.listen(PORT , async()=>{
        // sendBasicMail("pr8101999444@gmail.com" , "pr8101999444@gmail.com" , "test mail" , "This is a test mail");
        job();
        console.log("Server Started at" , PORT);
    })

}

serverSetUp();