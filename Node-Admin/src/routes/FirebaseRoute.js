const express = require('express');
const  {sendFirebaseNotification,sendEveryMinuteNotification}  = require('../controllers/FirebaseController');
const app = express();
const PORT = process.env.PORT || 3000;
const router = express.Router();

router.post('/send-notification',async (req,res)=>{
    const result= await sendFirebaseNotification(req,res);
    return res.send(result);
})


module.exports =router;