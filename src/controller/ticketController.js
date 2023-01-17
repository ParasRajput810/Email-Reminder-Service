const {ticketCreate} = require("../services/email-service");

const createTicket = async(req,res)=>{
    
    try {
        const response = await ticketCreate(req.body);
        return res.status(201).json({
            data: response,
            err : [],
            success : true,
            message:"Notification ticket created successfully"
        })
    } catch (error) {
        return res.status(404).json({
            data: {},
            err : error,
            success : true,
            message:"Notification ticket creation failed"
        })
    }
}

module.exports = {createTicket};