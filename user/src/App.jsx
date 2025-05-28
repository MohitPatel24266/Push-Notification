import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import { requestFCMTOKEN, onMessageListener } from './utils/firebaseUtils';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [fcmToken, setFcmToken] = useState(null);
  useEffect(() => {
    const fetchFCMToken = async () => {
      try {
        const token = await requestFCMTOKEN()
        setFcmToken(token);
        console.log("FCM TOken : ", token)
      }
      catch (error) {
        console.log("Error in App.jsx, Fetchin FCM Token : ", error)
      }
    }
    fetchFCMToken();
  })
  onMessageListener().then(payload => {
    toast(
      <div>
        <strong>{payload.notification.title} : </strong> 
        <div>{payload.notification.body}</div>
      </div>,
     {position : "top-right"}
    );
    console.log("Received foreground message: ", payload)
  }).catch(err => console.log("Error in App.jsx, onMessageListener : ", err))
  return (
    <>
    <ToastContainer />
      <div className='container firebase-form p-4'>
        <div className='row'>
          {fcmToken && (
            <div className="col-md-12 mb-4">
              <div className="alert alert-info" >
                <strong>FCM Token : </strong>{fcmToken}
              </div>
            </div>
          )}
        </div>

      </div>
    </>

  )
}

export default App
