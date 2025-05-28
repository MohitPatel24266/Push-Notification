//Node-Admin//src/controllers/FirebaseController.js

const NotificationService = require('../service/NotificationService');

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

async function sendEveryMinuteNotification(){
    const title = "Scheduled Notification";
    const body = "This is a scheduled notification sent every minute.";
    const deviceToken ="edcq-OInVJjI9gBPjbe3na:APA91bHv_MYyh5gN5KWa41sI37TMtTL_EVs9aeNPoxWqrsyQps1f24f6ld1yK_JGohiA7RU4NpH67zByHMwW4ikZns5ctA-7o3LyDmbHrNwKI8F__kh3t2c"
     await NotificationService.sendNotification(title,body,deviceToken)   
}
module.exports = {sendFirebaseNotification,sendEveryMinuteNotification};