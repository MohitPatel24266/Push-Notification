const admin = require ("../utils/firebase")

class NotificationService {
    static async sendNotification(title,body,deviceToken){
        const message ={
            notification :{
                title,
                body
            },
            token:deviceToken,
        };  
        try {
            const response= await admin.messaging().send(message)
            console.log("Notification sent Secceddfully :: ",response);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = NotificationService