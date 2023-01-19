const { response } = require('express');
const {NotificationTicket} = require('../models/index');
const { Op } = require("sequelize");
class Ticketrepository{
    async create(data){
        try {
            const response = await NotificationTicket.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw{error};
        }
    }
    async getalltickects(){
        try {
            const reponse = await NotificationTicket.findAll();
            return response;
        } catch (error) {
            throw {error};
        }
    }
    async getticket(filter){
        try {
            const response = await NotificationTicket.findAll({where:{
                status: "PENDING",
                NotificationTime : {
                    [Op.lte] : new Date(),
                }
            }})
            return response;
        } catch (error) {
            throw {error};
        }
    }
    async updateticket(ticketid , data){
        try {
            const response = await NotificationTicket.findByPk(ticketid);
            if(data.status){
                response.status = data.status;
            }
            response.save();
            return response;
        } catch (error) {
            throw {error}; 
        }
    }
    async deleteticket(ticketid){
        try {
            await NotificationTicket.destroy({where:{
                id : ticketid
            }});
            return true;
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = Ticketrepository;