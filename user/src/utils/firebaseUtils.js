import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
const firebaseConfig = {
  apiKey: "AIzaSyAPBPGalm20iFdQe0na1Lc4M229LZJlZHg",
  authDomain: "push-notification-6f24f.firebaseapp.com",
  projectId: "push-notification-6f24f",
  storageBucket: "push-notification-6f24f.firebasestorage.app",
  messagingSenderId: "1002342093073",
  appId: "1:1002342093073:web:7d7805a309c43f5bfabcb0",
  measurementId: "G-DL4MCMP1Q9"
};

const vapidKey ="BNg02UlrRx0OHr158iELG81VL3YvzKzrB96yY4k_GXnhVu7LoUR9nOmk7PYtziO8lYTsphysGml2MUoUpC4HrPE";

const app = initializeApp(firebaseConfig)

const messaging = getMessaging(app);

export const  requestFCMTOKEN = async()=>{
    return Notification.requestPermission()
        .then((permission)=>{
            if(permission === 'granted'){
                return getToken(messaging,{vapidKey})
            }
            else{
                throw new Error("Notification - Permission Not Granted");
            }
        })
        .catch((error)=>{
            console.log("Error getting FCM Token : ",error);
            throw error;
        })
}

export const onMessageListener = () => {
  return  new Promise((resolve)=>{
        onMessage(messaging,(payload)=>{
            resolve(payload);
        })
    })
}