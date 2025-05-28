//Node-Admin//src/controllers/FirebaseController.js

const NotificationService = require('../service/NotificationService');
require('dotenv').config();
const sendFirebaseNotification = async (req,res)=>{
    try{
        const {title,body,deviceToken} =req.body;
        await NotificationService.sendNotification(title, body, deviceToken)
        
         res.status(200).json({
            message:"Notification sent Successfully.",
            success:true
        });
    }catch(error){
        console.log("Error in sending notification --->",error)
        res.status(500).json({
            message:"Error sending  notification",
            success:false
        });
    }
}
//Every minute send notification
async function sendEveryMinuteNotification(){
    const title = "Scheduled Notification";
    const body = "This is a scheduled notification sent every minute.";
    const deviceToken = process.env.TEST_DEVICE_TOKEN
    await NotificationService.sendNotification(title,body,deviceToken)   
}
module.exports = {sendFirebaseNotification,sendEveryMinuteNotification};