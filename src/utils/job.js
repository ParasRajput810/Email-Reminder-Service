const {fetchTicket , updateticket} = require("../services/email-service");
const cron = require("node-cron");
const sender = require("../config/emailconfig");
const { emit } = require("../config/emailconfig");

const fetchtickets = async(data)=>{
    cron.schedule('*/2 * * * *' , async()=>{
        try {
            const response = await fetchTicket();
            response.forEach(element => {
                sender.sendMail({
                    from : "Airlinecare@gmail.com",
                    to : element.RecipientEmail,
                    subject : element.subject,
                    text: element.body,
                } , async(err , data)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        updateticket(element.id , {status : "FULLFILLED"});
                    }
                }
            ) } );
           console.log("Email sended");
        }catch (error) {
            console.log(error);
        }
        
    })
}

module.exports = fetchtickets;

