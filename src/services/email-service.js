const { text } = require("body-parser");
const nodemailer = require("nodemailer");
const sender = require("../config/emailconfig");
const ticketrepo = require("../repository/ticketrepository");

const repo = new ticketrepo();
const sendBasicMail = async(from,to,subject,body)=>{
    await sender.sendMail({
        from : from,
        to : to,
        subject : subject,
        text: body,
    })
}

const ticketCreate = async(data)=>{
    try {
        const response = await repo.create(data);
        return response;
    } catch (error) {
        throw {error};
    }
} 

const fetchTicket = async()=>{
    try {
        const response = await repo.getticket();
        return response;
    } catch (error) {
        throw {error};
    }
}

const updateticket = async(ticketid , data)=>{
    try {
        const response = await repo.updateticket(ticketid , data);
        return response;
    } catch (error) {
        throw {error};
    }
}

const deleteTicket = async(ticketid)=>{
    try {
        const response = await repo.deleteticket(ticketid);
        return response;
    } catch (error) {
        throw {error};
    }
}

module.exports = {
    sendBasicMail,
    ticketCreate,
    fetchTicket,
    updateticket,
    deleteTicket
};