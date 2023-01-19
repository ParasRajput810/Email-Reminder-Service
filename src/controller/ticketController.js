const {ticketCreate , deleteTicket} = require("../services/email-service");

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

const deleteNotification = async(req,res) =>{
    console.log(req.query);
    try {
        const response = await deleteTicket(req.query.id);
        return res.status(201).json({
            data:response,
            success : true,
            message : "Deleted entry successfully",
            err : {}
        })
    } catch (error) {
        return res.status(501).json({
            data: {},
            err : error,
            success : false,
            message:"Notification ticket deletion failed"
        })
    }
}

module.exports = {createTicket , deleteNotification};